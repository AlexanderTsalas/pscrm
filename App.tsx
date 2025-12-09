import React, { useState, useEffect, DragEvent } from 'react';
import { 
  LayoutDashboard, 
  Kanban as KanbanIcon, 
  Banknote, 
  Activity, 
  LogOut, 
  Loader2,
  Users, 
  Euro, 
  TrendingUp, 
  Calendar, 
  Clock, 
  ArrowRight,
  MoreHorizontal, 
  Phone, 
  Mail, 
  X,
  Plus, 
  Search, 
  CreditCard, 
  Trash2, 
  Edit2, 
  Save, 
  Download, 
  FileText, 
  FileDown, 
  Printer, 
  FileSpreadsheet, 
  ChevronDown,
  Lock,
  LucideIcon,
  ArrowLeft,
  ShieldCheck,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from 'recharts';
import { Session } from '@supabase/supabase-js';

import { supabase } from './supabaseClient';
import { Client, Stage, View, Transaction } from './types';

// --- Components ---

// 0. Landing Page Component
const LandingPage = ({ onLoginClick }: { onLoginClick: () => void }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-white relative">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>

      {/* Background Gradients/Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full blur-[120px]" />
         <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-cyan-400 to-blue-600 p-2.5 rounded-xl shadow-lg shadow-cyan-500/20">
            <Activity className="text-white" size={24} />
          </div>
          <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            PlasticSurg
          </span>
        </div>
        <button
          onClick={onLoginClick}
          className="group relative px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-md overflow-hidden"
        >
          <span className="relative z-10 text-sm font-medium tracking-wide group-hover:text-cyan-400 transition-colors">
            Σύνδεση
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 lg:pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              CRM Επομενης Γενιας
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Διαχειριστείτε το <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Μέλλον της Κλινικής
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl border-l-2 border-white/10 pl-6">
              Ανακαλύψτε το σύμπαν της ολοκληρωμένης διαχείρισης ασθενών. AI αναλύσεις, 
              οικονομικός έλεγχος και ταχύτητα πωλήσεων — όλα σε ένα υπερσύγχρονο dashboard.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onLoginClick}
                className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                Είσοδος στην Εφαρμογή
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button 
                 onClick={onLoginClick}
                 className="px-8 py-4 rounded-xl font-semibold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 group"
              >
                 <ShieldCheck size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                 Ασφαλής Πρόσβαση
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                <div>
                   <h4 className="text-3xl font-bold text-white">98<span className="text-cyan-500">%</span></h4>
                   <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Ικανοποιηση</p>
                </div>
                <div>
                   <h4 className="text-3xl font-bold text-white">2.5<span className="text-purple-500">x</span></h4>
                   <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Αυξηση Εσοδων</p>
                </div>
                <div>
                   <h4 className="text-3xl font-bold text-white">24<span className="text-blue-500">/7</span></h4>
                   <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Διαθεσιμοτητα</p>
                </div>
            </div>
          </div>

          {/* 3D Visual */}
          <div className="relative perspective-[2000px] group hidden lg:block">
            {/* Floating Elements */}
            <div className="absolute -top-12 -right-12 z-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] animate-pulse" />
            
            <div className="relative z-10 [transform:rotateY(-12deg)_rotateX(5deg)] hover:[transform:rotateY(-8deg)_rotateX(2deg)] transition-transform duration-700 ease-out [transform-style:preserve-3d]">
                {/* Main Card */}
                <div className="bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                    
                    {/* Mock UI Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500/80" />
                           <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                           <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="h-2 w-20 bg-white/10 rounded-full" />
                    </div>
                    
                    {/* Mock UI Content */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                       <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                          <div className="flex justify-between items-start mb-4">
                             <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400"><Users size={16}/></div>
                             <span className="text-green-400 text-xs font-bold">+12%</span>
                          </div>
                          <div className="h-6 w-16 bg-white/20 rounded mb-2" />
                          <div className="h-3 w-24 bg-white/10 rounded" />
                       </div>
                       <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                           <div className="flex justify-between items-start mb-4">
                             <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Euro size={16}/></div>
                             <span className="text-green-400 text-xs font-bold">+8%</span>
                          </div>
                          <div className="h-6 w-16 bg-white/20 rounded mb-2" />
                          <div className="h-3 w-24 bg-white/10 rounded" />
                       </div>
                    </div>

                    <div className="bg-white/5 rounded-xl border border-white/5 p-4 space-y-3">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500" />
                            <div className="flex-1 space-y-1">
                                <div className="h-2 w-32 bg-white/20 rounded" />
                                <div className="h-2 w-20 bg-white/10 rounded" />
                            </div>
                            <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">Ενεργός</div>
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500" />
                            <div className="flex-1 space-y-1">
                                <div className="h-2 w-28 bg-white/20 rounded" />
                                <div className="h-2 w-16 bg-white/10 rounded" />
                            </div>
                            <div className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">Αναμονή</div>
                        </div>
                    </div>
                </div>

                {/* Floating Card 1 */}
                <div className="absolute -right-8 top-20 bg-gray-800/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl [transform:translateZ(40px)] animate-float">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                         <CheckCircle2 size={18} />
                      </div>
                      <div>
                         <p className="text-[10px] text-gray-400 uppercase tracking-wide">Νέος Ασθενής</p>
                         <p className="text-sm font-bold text-white">Εγγραφή</p>
                      </div>
                   </div>
                </div>

                 {/* Floating Card 2 */}
                <div className="absolute -left-8 bottom-20 bg-gray-800/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl [transform:translateZ(60px)] animate-float-delayed">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                         <Smartphone size={18} />
                      </div>
                      <div>
                         <p className="text-[10px] text-gray-400 uppercase tracking-wide">Επίσκεψη</p>
                         <p className="text-sm font-bold text-white">Επιβεβαιώθηκε</p>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>

        {/* Feature Strip */}
        <div className="mt-10 lg:mt-20 grid md:grid-cols-3 gap-6">
           {[
             { title: "Έξυπνος Προγραμματισμός", desc: "Αυτοματοποιημένες υπενθυμίσεις & follow-ups που δεν χάνουν ποτέ ραντεβού.", icon: Calendar },
             { title: "Οικονομική Ανάλυση", desc: "Παρακολουθήστε έσοδα και προβλέψεις σε πραγματικό χρόνο.", icon: TrendingUp },
             { title: "Πορεία Ασθενούς", desc: "Οπτικό Kanban pipeline για την παρακολούθηση κάθε ευκαιρίας.", icon: KanbanIcon },
           ].map((feature, idx) => (
             <div key={idx} className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-110 transition-transform shadow-lg">
                   <feature.icon className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
             </div>
           ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-gray-500 text-sm bg-black/20 backdrop-blur-lg">
         <p>&copy; {new Date().getFullYear()} PlasticSurg CRM. Με επιφύλαξη παντός δικαιώματος.</p>
      </footer>
    </div>
  );
};

// 1. StatsCard Component
interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  trend?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, color, trend }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        {trend && <p className="text-xs text-green-600 mt-1 font-medium">{trend}</p>}
      </div>
      <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
    </div>
  );
};

// 2. Dashboard Component
interface DashboardProps {
  clients: Client[];
}

const Dashboard: React.FC<DashboardProps> = ({ clients }) => {
  // Calculations
  const totalRevenue = clients
    .filter(c => c.stage === Stage.CLOSED)
    .reduce((acc, curr) => acc + curr.totalValue, 0);
  
  const potentialRevenue = clients
    .filter(c => c.stage === Stage.IN_PROGRESS || c.stage === Stage.NEW)
    .reduce((acc, curr) => acc + curr.totalValue, 0);

  const totalClients = clients.length;
  const newLeads = clients.filter(c => c.stage === Stage.NEW).length;
  const conversionRate = totalClients > 0 
    ? ((clients.filter(c => c.stage === Stage.CLOSED).length / totalClients) * 100).toFixed(1) 
    : '0';

  // Chart Data Preparation
  const dataByStage = [
    { name: 'Νέος', value: clients.filter(c => c.stage === Stage.NEW).length },
    { name: 'Προχωράει', value: clients.filter(c => c.stage === Stage.IN_PROGRESS).length },
    { name: 'Έκλεισε', value: clients.filter(c => c.stage === Stage.CLOSED).length },
    { name: 'Απώλεια', value: clients.filter(c => c.stage === Stage.NOT_INTERESTED).length },
  ];

  const COLORS = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444'];

  const dataRevenue = [
    { name: 'Εισπραχθέντα', amount: totalRevenue },
    { name: 'Αναμενόμενα', amount: potentialRevenue },
  ];

  // Upcoming Reminders Logic
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const reminders = clients.flatMap(client => {
    const events = [];
    
    if (client.consultationDate) {
      const date = new Date(client.consultationDate);
      if (date >= today) {
        events.push({
          id: client.id + '_consultation',
          type: 'Επίσκεψη',
          date: client.consultationDate,
          clientName: client.name,
          procedure: client.procedureInterest,
          icon: Calendar,
          color: 'text-blue-600 bg-blue-50'
        });
      }
    }

    if (client.followUpDate) {
      const date = new Date(client.followUpDate);
      if (date >= today) {
        events.push({
          id: client.id + '_followup',
          type: 'Follow-up',
          date: client.followUpDate,
          clientName: client.name,
          procedure: client.procedureInterest,
          icon: Clock,
          color: 'text-amber-600 bg-amber-50'
        });
      }
    }
    return events;
  })
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .slice(0, 6); // Show top 6

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Συνολικά Έσοδα" 
          value={`€${totalRevenue.toLocaleString()}`} 
          icon={Euro} 
          color="text-emerald-600 bg-emerald-100" 
          trend="+12% από τον προηγούμενο μήνα"
        />
        <StatsCard 
          title="Ενεργοί Πελάτες" 
          value={totalClients} 
          icon={Users} 
          color="text-blue-600 bg-blue-100" 
        />
        <StatsCard 
          title="Νέα Leads" 
          value={newLeads} 
          icon={Activity} 
          color="text-purple-600 bg-purple-100" 
        />
        <StatsCard 
          title="Ποσοστό Μετατροπής" 
          value={`${conversionRate}%`} 
          icon={TrendingUp} 
          color="text-orange-600 bg-orange-100" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Pipeline Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Κατανομή Πελατολογίου (Pipeline)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataByStage}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {dataByStage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} Πελάτες`, 'Πλήθος']} />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Projection Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Οικονομική Επισκόπηση</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dataRevenue}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`€${value.toLocaleString()}`, 'Ποσό']} />
              <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={60}>
                 {
                    dataRevenue.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#f59e0b'} />
                    ))
                 }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Upcoming Reminders List */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96 overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-4">
             <h3 className="text-lg font-bold text-gray-800">Επόμενα Ραντεβού</h3>
             <span className="text-xs text-gray-400 font-medium">Επόμενες 30 ημέρες</span>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
            {reminders.length > 0 ? (
              reminders.map((event) => (
                <div key={event.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-50 hover:bg-gray-50 transition-colors">
                   <div className={`p-2 rounded-lg ${event.color} shrink-0`}>
                      <event.icon size={18} />
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                         <h4 className="font-semibold text-gray-800 text-sm truncate">{event.clientName}</h4>
                         <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                           {new Date(event.date).toLocaleDateString('el-GR', { day: '2-digit', month: '2-digit' })}
                         </span>
                      </div>
                      <p className="text-xs text-gray-500 truncate mt-0.5">{event.procedure}</p>
                      <div className="flex items-center gap-1 mt-1.5">
                         <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                            event.type === 'Follow-up' ? 'border-amber-200 text-amber-700' : 'border-blue-200 text-blue-700'
                         }`}>
                           {event.type}
                         </span>
                      </div>
                   </div>
                </div>
              ))
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                 <Calendar size={48} className="mb-2 opacity-20" />
                 <p className="text-sm">Δεν υπάρχουν προγραμματισμένα ραντεβού.</p>
               </div>
            )}
          </div>
          {reminders.length > 0 && (
             <button className="w-full mt-4 text-xs font-medium text-teal-600 hover:text-teal-700 flex items-center justify-center gap-1">
               Προβολή Όλων <ArrowRight size={12} />
             </button>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. Kanban Component
interface KanbanProps {
  clients: Client[];
  updateClientStage: (id: string, newStage: Stage) => void;
}

const STAGE_CONFIG = {
  [Stage.NEW]: { title: 'Νέος', color: 'border-t-blue-500', bg: 'bg-blue-50', badge: 'bg-blue-100 text-blue-700' },
  [Stage.IN_PROGRESS]: { title: 'Προχωράει', color: 'border-t-amber-500', bg: 'bg-amber-50', badge: 'bg-amber-100 text-amber-700' },
  [Stage.CLOSED]: { title: 'Έκλεισε', color: 'border-t-emerald-500', bg: 'bg-emerald-50', badge: 'bg-emerald-100 text-emerald-700' },
  [Stage.NOT_INTERESTED]: { title: 'Δεν ενδιαφέρεται', color: 'border-t-red-500', bg: 'bg-red-50', badge: 'bg-red-100 text-red-700' },
};

const Kanban: React.FC<KanbanProps> = ({ clients, updateClientStage }) => {
  const [draggedClientId, setDraggedClientId] = useState<string | null>(null);

  // Drag and Drop Handlers
  const onDragStart = (e: DragEvent, clientId: string) => {
    setDraggedClientId(clientId);
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const onDrop = (e: DragEvent, stage: Stage) => {
    e.preventDefault();
    if (draggedClientId) {
      updateClientStage(draggedClientId, stage);
      setDraggedClientId(null);
    }
  };

  return (
    <>
      <div className="flex gap-6 overflow-x-auto pb-6 h-[calc(100vh-180px)]">
        {Object.values(Stage).map((stage) => {
          const stageClients = clients.filter((c) => c.stage === stage);
          const config = STAGE_CONFIG[stage];

          return (
            <div
              key={stage}
              className={`flex-shrink-0 w-80 flex flex-col bg-gray-100 rounded-xl max-h-full`}
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, stage)}
            >
              {/* Column Header */}
              <div className={`p-4 font-semibold text-gray-700 flex justify-between items-center border-t-4 rounded-t-xl bg-white shadow-sm ${config.color}`}>
                <span>{config.title}</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                  {stageClients.length}
                </span>
              </div>

              {/* Cards Container */}
              <div className="p-3 flex-1 overflow-y-auto space-y-3 kanban-col">
                {stageClients.map((client) => (
                  <div
                    key={client.id}
                    draggable
                    onDragStart={(e) => onDragStart(e, client.id)}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-move hover:shadow-md transition-shadow group relative"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${config.badge}`}>
                        {client.procedureInterest}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                    
                    <h4 className="font-bold text-gray-800 mb-1">{client.name}</h4>
                    <p className="text-sm text-gray-500 mb-3 truncate">{client.email}</p>
                    
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                      <div className="font-bold text-gray-700">€{client.totalValue.toLocaleString()}</div>
                      <div className="flex gap-2">
                        <a href={`tel:${client.phone}`} className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md transition-colors">
                          <Phone size={16} />
                        </a>
                        <a href={`mailto:${client.email}`} className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md transition-colors">
                          <Mail size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                
                {stageClients.length === 0 && (
                  <div className="h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                    Σύρετε εδώ
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// 4. ClientList Component
interface ClientListProps {
  clients: Client[];
  onAddClient: (client: Client) => void;
  onUpdateClient: (client: Client) => void;
  // Transaction Handlers
  onSaveTransaction: (transaction: Transaction) => Promise<void>;
  onDeleteTransaction: (transactionId: string) => Promise<void>;
}

const ClientList: React.FC<ClientListProps> = ({ clients, onAddClient, onUpdateClient, onSaveTransaction, onDeleteTransaction }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Export Menu State
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);

  // Inline Editing State
  const [editingCell, setEditingCell] = useState<{ clientId: string, field: keyof Client } | null>(null);
  const [editValue, setEditValue] = useState('');

  // New Client Form State
  const [newClient, setNewClient] = useState<Partial<Client>>({
    name: '',
    phone: '',
    email: '',
    procedureInterest: '',
    totalValue: 0,
    notes: '',
    consultationDate: '',
    followUpDate: '',
  });

  // Accounting Modal State
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isAccountingModalOpen, setIsAccountingModalOpen] = useState(false);
  const [transactionForm, setTransactionForm] = useState<Partial<Transaction>>({
    amount: 0,
    description: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [editingTransactionId, setEditingTransactionId] = useState<string | null>(null);

  // Update selectedClient when props change (e.g. after a DB update)
  useEffect(() => {
    if (selectedClient) {
        const updated = clients.find(c => c.id === selectedClient.id);
        if (updated) setSelectedClient(updated);
    }
  }, [clients]);

  // Filter Logic
  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.procedureInterest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper for totals
  const getPaidAmount = (client: Client) => {
    return client.transactions?.reduce((sum, t) => sum + t.amount, 0) || 0;
  };

  // --- Handlers for New Client ---
  const handleSubmitNewClient = (e: React.FormEvent) => {
    e.preventDefault();
    // Pass partial client, App.tsx handles ID creation via DB
    onAddClient({
        stage: Stage.NEW,
        transactions: [],
        ...newClient as any
    });
    setIsModalOpen(false);
    setNewClient({ name: '', phone: '', email: '', procedureInterest: '', totalValue: 0, notes: '', consultationDate: '', followUpDate: '' });
  };

  // --- Handlers for Inline Editing ---
  const startEditing = (client: Client, field: keyof Client, value: string) => {
    setEditingCell({ clientId: client.id, field });
    setEditValue(value);
  };

  const cancelEditing = () => {
    setEditingCell(null);
    setEditValue('');
  };

  const saveEditing = () => {
    if (!editingCell) return;

    const clientToUpdate = clients.find(c => c.id === editingCell.clientId);
    if (clientToUpdate) {
      const updatedClient = { ...clientToUpdate, [editingCell.field]: editValue };
      onUpdateClient(updatedClient);
    }
    setEditingCell(null);
    setEditValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      saveEditing();
    } else if (e.key === 'Escape') {
      cancelEditing();
    }
  };

  // --- Handlers for Accounting/Transactions ---
  const openAccounting = (client: Client) => {
    setSelectedClient(client);
    setIsAccountingModalOpen(true);
    resetTransactionForm();
  };

  const resetTransactionForm = () => {
    setTransactionForm({ amount: 0, description: '', date: new Date().toISOString().split('T')[0] });
    setEditingTransactionId(null);
  };

  const handleSaveTransactionInternal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClient) return;

    const newTransaction: Transaction = {
      id: editingTransactionId || '', // ID handled by DB if empty, but we might need to handle this in App.tsx
      clientId: selectedClient.id,
      date: transactionForm.date || new Date().toISOString(),
      amount: Number(transactionForm.amount),
      description: transactionForm.description || '',
    };
    
    await onSaveTransaction(newTransaction);
    resetTransactionForm();
  };

  const handleEditTransaction = (t: Transaction) => {
    setTransactionForm({
      amount: t.amount,
      description: t.description,
      date: t.date
    });
    setEditingTransactionId(t.id);
  };

  const handleDeleteTransactionInternal = async (id: string) => {
    if (confirm("Είστε σίγουροι ότι θέλετε να διαγράψετε αυτή τη συναλλαγή;")) {
        await onDeleteTransaction(id);
    }
  };

  const updateClientField = (field: keyof Client, value: any) => {
    if (!selectedClient) return;
    const updatedClient = { ...selectedClient, [field]: value };
    // Optimistic update for UI responsiveness
    setSelectedClient(updatedClient); 
    onUpdateClient(updatedClient);
  };

  // --- Export Handlers ---

  const handleExportSingleClientCSV = () => {
    if (!selectedClient) return;

    const paid = getPaidAmount(selectedClient);
    const balance = selectedClient.totalValue - paid;
    const BOM = "\uFEFF"; 
    
    let csvContent = "data:text/csv;charset=utf-8," + BOM;
    
    csvContent += `Καρτέλα Πελάτη\n`;
    csvContent += `Ονοματεπώνυμο,${selectedClient.name}\n`;
    csvContent += `Τηλέφωνο,${selectedClient.phone}\n`;
    csvContent += `Email,${selectedClient.email}\n`;
    csvContent += `Ενδιαφέρον,${selectedClient.procedureInterest}\n`;
    csvContent += `Ημ. Επίσκεψης,${selectedClient.consultationDate || '-'}\n`;
    csvContent += `Follow-up,${selectedClient.followUpDate || '-'}\n`;
    csvContent += `Συνολική Αξία,${selectedClient.totalValue}\n`;
    csvContent += `Εισπραχθέντα,${paid}\n`;
    csvContent += `Υπόλοιπο,${balance}\n\n`;

    csvContent += `Ιστορικό Συναλλαγών\n`;
    csvContent += `Ημερομηνία,Περιγραφή,Ποσό\n`;

    if (selectedClient.transactions && selectedClient.transactions.length > 0) {
      selectedClient.transactions.forEach(t => {
        csvContent += `${t.date},${t.description},${t.amount}\n`;
      });
    } else {
      csvContent += `-,Δεν υπάρχουν συναλλαγές,0\n`;
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${selectedClient.name.replace(/\s+/g, '_')}_report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportListCSV = (subset: 'all' | 'filtered') => {
    const dataToExport = subset === 'all' ? clients : filteredClients;
    const BOM = "\uFEFF";
    let csvContent = "data:text/csv;charset=utf-8," + BOM;
    
    // Header
    csvContent += "Ονοματεπώνυμο,Τηλέφωνο,Email,Ενδιαφέρον,Στάδιο,Ημ. Επίσκεψης,Συνολική Αξία,Εισπραχθέντα,Υπόλοιπο\n";

    // Rows
    dataToExport.forEach(c => {
      const paid = getPaidAmount(c);
      const balance = c.totalValue - paid;
      csvContent += `"${c.name}","${c.phone}","${c.email}","${c.procedureInterest}","${c.stage}","${c.consultationDate || '-'}","${c.totalValue}","${paid}","${balance}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `clients_export_${subset}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExportMenuOpen(false);
  };

  const handlePrintListPDF = (subset: 'all' | 'filtered') => {
    const dataToExport = subset === 'all' ? clients : filteredClients;
    
    const printWindow = window.open('', '', 'height=600,width=900');
    if (!printWindow) return;

    const htmlContent = `
      <html>
        <head>
          <title>Λίστα Πελατών</title>
          <style>
            body { font-family: 'Helvetica', 'Arial', sans-serif; padding: 20px; }
            h1 { color: #0f766e; border-bottom: 2px solid #0f766e; padding-bottom: 10px; }
            .meta { margin-bottom: 20px; font-size: 14px; color: #666; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 12px; }
            th { background-color: #f3f4f6; text-align: left; padding: 8px; border-bottom: 2px solid #ddd; }
            td { padding: 8px; border-bottom: 1px solid #eee; }
            .money { text-align: right; font-family: monospace; }
            .total-row { font-weight: bold; background-color: #f9fafb; }
            @media print {
              @page { size: landscape; margin: 1cm; }
            }
          </style>
        </head>
        <body>
          <h1>Λίστα Πελατών & Οικονομική Αναφορά</h1>
          <div class="meta">
            <p>Ημερομηνία: ${new Date().toLocaleDateString('el-GR')}</p>
            <p>Σύνολο Εγγραφών: ${dataToExport.length}</p>
            <p>Φίλτρο: ${subset === 'all' ? 'Όλοι οι Πελάτες' : 'Φιλτραρισμένα Αποτελέσματα'}</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Ονοματεπώνυμο</th>
                <th>Τηλέφωνο</th>
                <th>Ενδιαφέρον</th>
                <th>Στάδιο</th>
                <th>Ημ. Επίσκεψης</th>
                <th class="money">Αξία</th>
                <th class="money">Εισπράξεις</th>
                <th class="money">Υπόλοιπο</th>
              </tr>
            </thead>
            <tbody>
              ${dataToExport.map(c => {
                const paid = getPaidAmount(c);
                const balance = c.totalValue - paid;
                return `
                  <tr>
                    <td>${c.name}</td>
                    <td>${c.phone}</td>
                    <td>${c.procedureInterest}</td>
                    <td>${c.stage}</td>
                    <td>${c.consultationDate ? new Date(c.consultationDate).toLocaleDateString('el-GR') : '-'}</td>
                    <td class="money">€${c.totalValue.toLocaleString()}</td>
                    <td class="money">€${paid.toLocaleString()}</td>
                    <td class="money">€${balance.toLocaleString()}</td>
                  </tr>
                `;
              }).join('')}
              <tr class="total-row">
                <td colspan="5" style="text-align: right; padding-right: 20px;">ΣΥΝΟΛΑ</td>
                <td class="money">€${dataToExport.reduce((sum, c) => sum + c.totalValue, 0).toLocaleString()}</td>
                <td class="money">€${dataToExport.reduce((sum, c) => sum + getPaidAmount(c), 0).toLocaleString()}</td>
                <td class="money">€${dataToExport.reduce((sum, c) => sum + (c.totalValue - getPaidAmount(c)), 0).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    setIsExportMenuOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Αναζήτηση πελάτη, email, ή επέμβασης..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
            <div className="relative">
              <button 
                onClick={() => setIsExportMenuOpen(!isExportMenuOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                  <FileDown size={18} />
                  <span>Εξαγωγή</span>
                  <ChevronDown size={14} className={`transition-transform ${isExportMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isExportMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsExportMenuOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1 animate-fade-in">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      CSV (Excel)
                    </div>
                    <button 
                      onClick={() => handleExportListCSV('all')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <FileSpreadsheet size={16} className="text-emerald-600" />
                      Όλοι οι Πελάτες
                    </button>
                    <button 
                      onClick={() => handleExportListCSV('filtered')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <FileSpreadsheet size={16} className="text-emerald-600" />
                      Φιλτραρισμένοι ({filteredClients.length})
                    </button>
                    
                    <div className="border-t border-gray-100 my-1"></div>
                    
                    <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      PDF (Εκτύπωση)
                    </div>
                    <button 
                      onClick={() => handlePrintListPDF('all')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Printer size={16} className="text-gray-600" />
                      Όλοι οι Πελάτες
                    </button>
                    <button 
                      onClick={() => handlePrintListPDF('filtered')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Printer size={16} className="text-gray-600" />
                      Φιλτραρισμένοι ({filteredClients.length})
                    </button>
                  </div>
                </>
              )}
            </div>

            <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow-sm"
            >
                <Plus size={18} />
                <span>Προσθήκη Πελάτη</span>
            </button>
        </div>
      </div>

      {/* Main Client Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Ονοματεπώνυμο</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Στοιχεία Επικ.</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Ενδιαφέρον</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Στάδιο</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Οικονομικά</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Ενέργειες</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredClients.map((client) => {
              const paid = getPaidAmount(client);
              const progress = client.totalValue > 0 ? (paid / client.totalValue) * 100 : 0;
              
              const isEditingName = editingCell?.clientId === client.id && editingCell.field === 'name';
              const isEditingPhone = editingCell?.clientId === client.id && editingCell.field === 'phone';
              const isEditingEmail = editingCell?.clientId === client.id && editingCell.field === 'email';

              return (
                <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 align-top">
                    {isEditingName ? (
                      <input 
                        type="text" 
                        autoFocus
                        className="w-full px-2 py-1 text-sm border border-teal-500 rounded focus:outline-none shadow-sm"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={saveEditing}
                        onKeyDown={handleKeyDown}
                      />
                    ) : (
                      <div 
                        className="font-medium text-gray-900 cursor-pointer hover:text-teal-600 group flex items-center gap-2"
                        onClick={() => startEditing(client, 'name', client.name)}
                        title="Click to edit name"
                      >
                        {client.name}
                        <Edit2 size={12} className="opacity-0 group-hover:opacity-50" />
                      </div>
                    )}
                    
                    <div className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                      {client.consultationDate && (
                         <span className="flex items-center text-teal-600" title="Ημερομηνία Επίσκεψης">
                           <Calendar size={10} className="mr-0.5" />
                           {new Date(client.consultationDate).toLocaleDateString('el-GR')}
                         </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 align-top">
                    {/* Phone Edit */}
                    {isEditingPhone ? (
                      <input 
                        type="tel" 
                        autoFocus
                        className="w-full px-2 py-1 text-sm border border-teal-500 rounded focus:outline-none shadow-sm mb-1"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={saveEditing}
                        onKeyDown={handleKeyDown}
                      />
                    ) : (
                      <div 
                        className="text-sm text-gray-600 cursor-pointer hover:text-teal-600 group flex items-center gap-2"
                        onClick={() => startEditing(client, 'phone', client.phone)}
                        title="Click to edit phone"
                      >
                         {client.phone}
                         <Edit2 size={10} className="opacity-0 group-hover:opacity-50" />
                      </div>
                    )}

                    {/* Email Edit */}
                    {isEditingEmail ? (
                      <input 
                        type="email" 
                        autoFocus
                        className="w-full px-2 py-1 text-sm border border-teal-500 rounded focus:outline-none shadow-sm"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={saveEditing}
                        onKeyDown={handleKeyDown}
                      />
                    ) : (
                      <div 
                        className="text-sm text-gray-500 cursor-pointer hover:text-teal-600 group flex items-center gap-2"
                        onClick={() => startEditing(client, 'email', client.email)}
                        title="Click to edit email"
                      >
                         {client.email}
                         <Edit2 size={10} className="opacity-0 group-hover:opacity-50" />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 align-top">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                      {client.procedureInterest}
                    </span>
                  </td>
                  <td className="px-6 py-4 align-top">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border
                      ${client.stage === Stage.NEW ? 'bg-blue-50 text-blue-700 border-blue-100' : ''}
                      ${client.stage === Stage.IN_PROGRESS ? 'bg-amber-50 text-amber-700 border-amber-100' : ''}
                      ${client.stage === Stage.CLOSED ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : ''}
                      ${client.stage === Stage.NOT_INTERESTED ? 'bg-red-50 text-red-700 border-red-100' : ''}
                    `}>
                      <span className={`w-1.5 h-1.5 rounded-full 
                          ${client.stage === Stage.NEW ? 'bg-blue-500' : ''}
                          ${client.stage === Stage.IN_PROGRESS ? 'bg-amber-500' : ''}
                          ${client.stage === Stage.CLOSED ? 'bg-emerald-500' : ''}
                          ${client.stage === Stage.NOT_INTERESTED ? 'bg-red-500' : ''}
                      `}></span>
                      {client.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right align-top">
                    <div className="text-sm font-medium text-gray-900">€{client.totalValue.toLocaleString()}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Εισπράξεις: <span className="text-emerald-600 font-medium">€{paid.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                      <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${Math.min(progress, 100)}%` }}></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right align-top">
                    <button 
                      onClick={() => openAccounting(client)}
                      className="text-teal-600 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 p-2 rounded-lg transition-colors"
                      title="Λογιστήριο & Συναλλαγές"
                    >
                      <CreditCard size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
        {filteredClients.length === 0 && (
            <div className="p-12 text-center text-gray-500">
                Δεν βρέθηκαν αποτελέσματα.
            </div>
        )}
      </div>

      {/* ADD NEW CLIENT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-fade-in">
            <div className="bg-teal-600 p-6">
              <h2 className="text-xl font-bold text-white">Προσθήκη Νέου Πελάτη</h2>
              <p className="text-teal-100 text-sm mt-1">Συμπληρώστε τα στοιχεία για την καρτέλα ασθενούς.</p>
            </div>
            
            <form onSubmit={handleSubmitNewClient} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ονοματεπώνυμο</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={newClient.name}
                    onChange={e => setNewClient({...newClient, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Τηλέφωνο</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={newClient.phone}
                    onChange={e => setNewClient({...newClient, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={newClient.email}
                    onChange={e => setNewClient({...newClient, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Εκτιμώμενη Αξία (€)</label>
                  <input 
                    required
                    type="number" 
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={newClient.totalValue}
                    onChange={e => setNewClient({...newClient, totalValue: Number(e.target.value)})}
                  />
                </div>
              </div>

               <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ημερομηνία Επίσκεψης</label>
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      value={newClient.consultationDate || ''}
                      onChange={e => setNewClient({...newClient, consultationDate: e.target.value})}
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ημ. Follow-up (Υπενθύμιση)</label>
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      value={newClient.followUpDate || ''}
                      onChange={e => setNewClient({...newClient, followUpDate: e.target.value})}
                    />
                 </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ενδιαφέρον για</label>
                <select 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  value={newClient.procedureInterest}
                  onChange={e => setNewClient({...newClient, procedureInterest: e.target.value})}
                >
                  <option value="">Επιλέξτε...</option>
                  <optgroup label="Πρόσωπο">
                    <option value="Ρινοπλαστική">Ρινοπλαστική</option>
                    <option value="Βλεφαροπλαστική">Βλεφαροπλαστική</option>
                    <option value="Ωτοπλαστική">Ωτοπλαστική</option>
                    <option value="Facelift (Ρυτιδοπλαστική)">Facelift (Ρυτιδοπλαστική)</option>
                    <option value="Μεταμόσχευση Μαλλιών">Μεταμόσχευση Μαλλιών</option>
                  </optgroup>
                  <optgroup label="Σώμα">
                    <option value="Αυξητική Στήθους">Αυξητική Στήθους</option>
                    <option value="Ανόρθωση Στήθους">Ανόρθωση Στήθους</option>
                    <option value="Μειωτική Στήθους">Μειωτική Στήθους</option>
                    <option value="Λιποαναρρόφηση">Λιποαναρρόφηση</option>
                    <option value="Κοιλιοπλαστική">Κοιλιοπλαστική</option>
                    <option value="Βραχιονοπλαστική">Βραχιονοπλαστική</option>
                    <option value="Γυναικομαστία">Γυναικομαστία</option>
                  </optgroup>
                  <optgroup label="Μη Επεμβατικά">
                    <option value="Botox/Fillers">Botox/Fillers</option>
                    <option value="Νήματα (Threads)">Νήματα (Threads)</option>
                    <option value="Μεσοθεραπεία">Μεσοθεραπεία</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Σημειώσεις</label>
                <textarea 
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={newClient.notes}
                  onChange={e => setNewClient({...newClient, notes: e.target.value})}
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg"
                >
                  Ακύρωση
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 shadow-sm"
                >
                  Αποθήκευση
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ACCOUNTING MODAL */}
      {selectedClient && isAccountingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl overflow-hidden animate-fade-in flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="bg-gray-900 text-white p-6 flex justify-between items-start shrink-0">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold">{selectedClient.name}</h2>
                  <span className="px-2 py-0.5 rounded bg-gray-700 text-xs text-gray-300">{selectedClient.procedureInterest}</span>
                </div>
                <div className="text-gray-400 text-sm mt-1 flex flex-wrap gap-x-4">
                  <span>{selectedClient.email}</span>
                  <span>•</span>
                  <span>{selectedClient.phone}</span>
                </div>
              </div>
              <div className="flex items-center">
                 <button onClick={handleExportSingleClientCSV} className="text-gray-400 hover:text-white transition-colors mr-4" title="Εξαγωγή σε CSV">
                    <Download size={24} />
                 </button>
                 <button onClick={() => setIsAccountingModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                   <X size={24} />
                 </button>
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Left Column: Stats & Edit Total */}
              <div className="w-1/3 bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto space-y-6">
                
                {/* Scheduling Section */}
                <div>
                   <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Προγραμματισμός</h3>
                   <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-4">
                      <div>
                        <label className="text-xs text-gray-500 font-medium flex items-center gap-1 mb-1">
                          <Calendar size={12} /> Ημ. Επίσκεψης
                        </label>
                        <input 
                          type="date"
                          value={selectedClient.consultationDate || ''}
                          onChange={(e) => updateClientField('consultationDate', e.target.value)}
                          className="w-full text-sm font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded p-1 focus:border-teal-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 font-medium flex items-center gap-1 mb-1">
                          <Clock size={12} /> Follow-up (Υπενθύμιση)
                        </label>
                         <input 
                          type="date"
                          value={selectedClient.followUpDate || ''}
                          onChange={(e) => updateClientField('followUpDate', e.target.value)}
                          className="w-full text-sm font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded p-1 focus:border-teal-500 focus:outline-none"
                        />
                      </div>
                   </div>
                </div>

                {/* Financials Section */}
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Οικονομική Εικόνα</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <label className="text-xs text-gray-500 font-medium">Συνολική Αξία Συμφωνίας</label>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-400 font-bold">€</span>
                        <input 
                          type="number" 
                          value={selectedClient.totalValue}
                          onChange={(e) => updateClientField('totalValue', Number(e.target.value))}
                          className="w-full text-xl font-bold text-gray-900 bg-transparent border-b border-dashed border-gray-300 focus:border-teal-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                      <label className="text-xs text-emerald-700 font-medium">Εισπραχθέντα</label>
                      <div className="text-2xl font-bold text-emerald-800 mt-1">
                        €{getPaidAmount(selectedClient).toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                      <label className="text-xs text-amber-700 font-medium">Υπόλοιπο</label>
                      <div className="text-2xl font-bold text-amber-800 mt-1">
                        €{(selectedClient.totalValue - getPaidAmount(selectedClient)).toLocaleString()}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                       <h4 className="text-xs font-bold text-gray-500 mb-2">Πρόοδος Πληρωμών</h4>
                       <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-emerald-500 h-2 rounded-full transition-all duration-500" 
                            style={{ width: `${Math.min((getPaidAmount(selectedClient) / selectedClient.totalValue) * 100, 100)}%` }}
                          ></div>
                       </div>
                       <p className="text-xs text-right text-gray-500 mt-1">
                         {Math.round((getPaidAmount(selectedClient) / selectedClient.totalValue) * 100)}% εξοφλήθηκε
                       </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Transactions */}
              <div className="w-2/3 p-6 overflow-y-auto bg-white flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FileText className="text-teal-600" size={20} />
                  Συναλλαγές & Πληρωμές
                </h3>

                {/* Add Transaction Form */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6">
                  <form onSubmit={handleSaveTransactionInternal} className="flex flex-col gap-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-xs font-medium text-gray-500 block mb-1">Ημερομηνία</label>
                        <input 
                          type="date" 
                          required
                          className="w-full text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                          value={transactionForm.date}
                          onChange={e => setTransactionForm({...transactionForm, date: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-500 block mb-1">Ποσό (€)</label>
                        <input 
                          type="number" 
                          required
                          placeholder="0.00"
                          className="w-full text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                          value={transactionForm.amount}
                          onChange={e => setTransactionForm({...transactionForm, amount: Number(e.target.value)})}
                        />
                      </div>
                      <div>
                         <label className="text-xs font-medium text-gray-500 block mb-1">Περιγραφή</label>
                         <input 
                          type="text" 
                          required
                          placeholder="π.χ. Προκαταβολή"
                          className="w-full text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                          value={transactionForm.description}
                          onChange={e => setTransactionForm({...transactionForm, description: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end pt-1">
                      {editingTransactionId && (
                         <button 
                           type="button" 
                           onClick={resetTransactionForm}
                           className="text-xs text-gray-500 mr-3 hover:text-gray-700"
                         >
                           Ακύρωση
                         </button>
                      )}
                      <button 
                        type="submit" 
                        className="bg-teal-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-teal-700 flex items-center gap-2 transition-colors"
                      >
                        {editingTransactionId ? <Save size={14} /> : <Plus size={14} />}
                        {editingTransactionId ? 'Ενημέρωση' : 'Προσθήκη Συναλλαγής'}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Transactions List */}
                <div className="flex-1">
                  <table className="w-full text-left">
                    <thead className="border-b border-gray-200">
                      <tr>
                        <th className="pb-3 text-xs font-semibold text-gray-500 uppercase">Ημερομηνία</th>
                        <th className="pb-3 text-xs font-semibold text-gray-500 uppercase">Περιγραφή</th>
                        <th className="pb-3 text-xs font-semibold text-gray-500 uppercase text-right">Ποσό</th>
                        <th className="pb-3 text-xs font-semibold text-gray-500 uppercase text-right">Ενέργειες</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {selectedClient.transactions && selectedClient.transactions.length > 0 ? (
                        selectedClient.transactions.map(t => (
                          <tr key={t.id} className="group hover:bg-gray-50">
                            <td className="py-3 text-sm text-gray-600">
                              {new Date(t.date).toLocaleDateString('el-GR')}
                            </td>
                            <td className="py-3 text-sm font-medium text-gray-800">{t.description}</td>
                            <td className="py-3 text-sm font-bold text-teal-600 text-right">
                              +€{t.amount.toLocaleString()}
                            </td>
                            <td className="py-3 text-right">
                              <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button 
                                  onClick={() => handleEditTransaction(t)}
                                  className="p-1 text-blue-500 hover:bg-blue-50 rounded"
                                >
                                  <Edit2 size={14} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteTransactionInternal(t.id)}
                                  className="p-1 text-red-500 hover:bg-red-50 rounded"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="py-8 text-center text-gray-400 text-sm italic">
                            Δεν έχουν καταχωρηθεί συναλλαγές.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// 5. Auth Component
const Auth = ({ onBack }: { onBack?: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        setMessage({ type: 'success', text: 'Ελέγξτε το email σας για επιβεβαίωση!' });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Προέκυψε σφάλμα' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans relative">
      {onBack && (
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
          Πίσω
        </button>
      )}

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
            <div className="bg-teal-600 p-3 rounded-xl text-white shadow-lg">
                <Activity size={32} />
            </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          PlasticSurg CRM
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isSignUp ? 'Δημιουργία νέου λογαριασμού' : 'Συνδεθείτε στον λογαριασμό σας'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleAuth}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 p-2.5 border"
                  placeholder="doctor@clinic.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Κωδικός πρόσβασης
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 p-2.5 border"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {message && (
              <div className={`p-3 rounded-md text-sm ${message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                {message.text}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin h-5 w-5" /> : (isSignUp ? 'Εγγραφή' : 'Σύνδεση')}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {isSignUp ? 'Έχετε ήδη λογαριασμό;' : 'Νέος χρήστης;'}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => { setIsSignUp(!isSignUp); setMessage(null); }}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                {isSignUp ? 'Σύνδεση' : 'Δημιουργία Λογαριασμού'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. Main App Component
export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [clients, setClients] = useState<Client[]>([]);
  const [showAuth, setShowAuth] = useState(false);

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
    if (showAuth) {
      return <Auth onBack={() => setShowAuth(false)} />;
    }
    return <LandingPage onLoginClick={() => setShowAuth(true)} />;
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