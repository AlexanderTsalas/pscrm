import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Kanban as KanbanIcon, Banknote, Activity, LogOut, Loader2 } from 'lucide-react';
import { Client, Stage, View, Transaction } from './types';
import { Dashboard } from './components/Dashboard';
import { Kanban } from './components/Kanban';
import { ClientList } from './components/ClientList';
import { Auth } from './components/Auth';
import { supabase } from './supabaseClient';
import { Session } from '@supabase/supabase-js';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchClients(session.user.id);
      } else {
        setClients([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session?.user?.id) {
        fetchClients(session.user.id);
    }
  }, [session]);

  const fetchClients = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*, transactions(*)');

      if (error) throw error;

      if (data) {
        const mappedClients: Client[] = data.map((c: any) => ({
          id: c.id,
          user_id: c.user_id,
          name: c.name,
          phone: c.phone || '',
          email: c.email || '',
          stage: c.stage,
          procedureInterest: c.procedure_interest || '',
          notes: c.notes || '',
          totalValue: c.total_value,
          createdAt: c.created_at,
          consultationDate: c.consultation_date,
          followUpDate: c.follow_up_date,
          transactions: c.transactions ? c.transactions.map((t: any) => ({
             id: t.id,
             clientId: t.client_id,
             date: t.date,
             amount: t.amount,
             description: t.description
          })).sort((a: Transaction, b: Transaction) => new Date(b.date).getTime() - new Date(a.date).getTime()) : []
        }));
        setClients(mappedClients);
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleUpdateClientStage = async (id: string, newStage: Stage) => {
    try {
        const { error } = await supabase
            .from('clients')
            .update({ stage: newStage })
            .eq('id', id);
        
        if (error) throw error;

        setClients(clients.map(client => 
            client.id === id ? { ...client, stage: newStage } : client
        ));
    } catch (error) {
        console.error("Error updating stage:", error);
    }
  };

  const handleUpdateClient = async (updatedClient: Client) => {
    try {
        const { error } = await supabase
            .from('clients')
            .update({
                name: updatedClient.name,
                phone: updatedClient.phone,
                email: updatedClient.email,
                procedure_interest: updatedClient.procedureInterest,
                notes: updatedClient.notes,
                total_value: updatedClient.totalValue,
                consultation_date: updatedClient.consultationDate || null,
                follow_up_date: updatedClient.followUpDate || null
            })
            .eq('id', updatedClient.id);

        if (error) throw error;

        // Optimistically update local state (keeping existing transactions)
        setClients(clients.map(client => 
            client.id === updatedClient.id ? { ...updatedClient, transactions: client.transactions } : client
        ));
    } catch (error) {
        console.error("Error updating client:", error);
    }
  };

  const handleAddClient = async (newClient: Client) => {
    if (!session?.user) return;
    try {
        const { data, error } = await supabase
            .from('clients')
            .insert([{
                user_id: session.user.id,
                name: newClient.name,
                phone: newClient.phone,
                email: newClient.email,
                stage: newClient.stage,
                procedure_interest: newClient.procedureInterest,
                notes: newClient.notes,
                total_value: newClient.totalValue,
                consultation_date: newClient.consultationDate || null,
                follow_up_date: newClient.followUpDate || null
            }])
            .select()
            .single();

        if (error) throw error;

        if (data) {
            const mappedClient: Client = {
                id: data.id,
                user_id: data.user_id,
                name: data.name,
                phone: data.phone,
                email: data.email,
                stage: data.stage as Stage,
                procedureInterest: data.procedure_interest,
                notes: data.notes,
                totalValue: data.total_value,
                createdAt: data.created_at,
                consultationDate: data.consultation_date,
                followUpDate: data.follow_up_date,
                transactions: []
            };
            setClients([...clients, mappedClient]);
            setCurrentView('kanban');
        }
    } catch (error) {
        console.error("Error adding client:", error);
    }
  };

  const handleSaveTransaction = async (transaction: Transaction) => {
      if (!session?.user || !transaction.clientId) return;

      try {
          if (transaction.id) {
             // Update existing
             const { error } = await supabase
                .from('transactions')
                .update({
                    amount: transaction.amount,
                    description: transaction.description,
                    date: transaction.date
                })
                .eq('id', transaction.id);
            if (error) throw error;
          } else {
             // Create new
             const { error } = await supabase
                .from('transactions')
                .insert([{
                    client_id: transaction.clientId,
                    user_id: session.user.id,
                    amount: transaction.amount,
                    description: transaction.description,
                    date: transaction.date
                }]);
             if (error) throw error;
          }

          // Refresh data to ensure totals and IDs are correct
          await fetchClients(session.user.id);
      } catch (error) {
          console.error("Error saving transaction", error);
      }
  };

  const handleDeleteTransaction = async (id: string) => {
      try {
          const { error } = await supabase
            .from('transactions')
            .delete()
            .eq('id', id);
          
          if (error) throw error;

          if (session?.user) await fetchClients(session.user.id);
      } catch (error) {
          console.error("Error deleting transaction", error);
      }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
      return (
          <div className="flex items-center justify-center h-screen bg-gray-50">
              <Loader2 className="w-10 h-10 text-teal-600 animate-spin" />
          </div>
      );
  }

  if (!session) {
    return <Auth />;
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard clients={clients} />;
      case 'kanban':
        return (
          <Kanban 
            clients={clients} 
            updateClientStage={handleUpdateClientStage} 
          />
        );
      case 'accounting':
        return (
          <ClientList 
            clients={clients} 
            onAddClient={handleAddClient} 
            onUpdateClient={handleUpdateClient}
            onSaveTransaction={handleSaveTransaction}
            onDeleteTransaction={handleDeleteTransaction}
          />
        );
      default:
        return <Dashboard clients={clients} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col z-10">
        <div className="p-6 flex items-center gap-3 border-b border-gray-100">
          <div className="bg-teal-600 p-2 rounded-lg text-white">
            <Activity size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-800 leading-tight">PlasticSurg</h1>
            <p className="text-xs text-gray-500">CRM & Management</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              currentView === 'dashboard' 
                ? 'bg-teal-50 text-teal-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          
          <button
            onClick={() => setCurrentView('kanban')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              currentView === 'kanban' 
                ? 'bg-teal-50 text-teal-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <KanbanIcon size={20} />
            Πωλήσεις (Kanban)
          </button>

          <button
            onClick={() => setCurrentView('accounting')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              currentView === 'accounting' 
                ? 'bg-teal-50 text-teal-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Banknote size={20} />
            Λογιστήριο & Πελάτες
          </button>
        </nav>

        <div className="p-4 border-t border-gray-100">
            <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
                <LogOut size={16} />
                Αποσύνδεση
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-50 relative">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 sticky top-0 z-20">
          <h2 className="text-xl font-semibold text-gray-800">
            {currentView === 'dashboard' && 'Επισκόπηση Ιατρείου'}
            {currentView === 'kanban' && 'Διαχείριση Πωλήσεων'}
            {currentView === 'accounting' && 'Λογιστήριο & Ασθενείς'}
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm text-gray-500">Online</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold border border-teal-200 uppercase text-xs">
              {session.user.email?.substring(0,2)}
            </div>
          </div>
        </header>
        
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
