import React, { useState, useEffect, DragEvent, useRef } from 'react';
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
  Calendar as CalendarIcon, 
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
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Upload,
  Stethoscope,
  FileHeart,
  Pill,
  AlertCircle,
  StickyNote,
  PlusCircle,
  History,
  Syringe,
  Scissors,
  Bold,
  Italic,
  List,
  Heading1,
  FileSignature,
  ClipboardList
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
import { Client, Stage, View, Transaction, ClinicalNote, MedicalRecord } from './types';
import { Auth } from './components/Auth';
import { Dashboard } from './components/Dashboard';
import { Kanban } from './components/Kanban';
import { ClientList } from './components/ClientList';
import { MedicalRecordsPage } from './components/MedicalRecordsPage';

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
             { title: "Έξυπνος Προγραμματισμός", desc: "Αυτοματοποιημένες υπενθυμίσεις & follow-ups που δεν χάνουν ποτέ ραντεβού.", icon: CalendarIcon },
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


// 3.5 Calendar Component
interface CalendarViewProps {
  clients: Client[];
}

const CalendarView: React.FC<CalendarViewProps> = ({ clients }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => {
    // 0 = Sunday, 1 = Monday, etc. Adjust so Monday is 0 for our grid
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const monthNames = [
    "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος",
    "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
  ];
  
  const dayNames = ["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getEventsForDay = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    const events = [];

    clients.forEach(client => {
      if (client.consultationDate === dateStr) {
        events.push({ type: 'consultation', client, label: 'Επίσκεψη', time: '10:00' });
      }
      if (client.followUpDate === dateStr) {
        events.push({ type: 'followup', client, label: 'Follow-up', time: '11:00' });
      }
    });
    return events;
  };

  const selectedDayEvents = getEventsForDay(selectedDate);

  // Density Helper
  const getDailyDensity = (day: number) => {
     const date = new Date(year, month, day);
     const count = getEventsForDay(date).length;
     if (count === 0) return null;
     if (count <= 2) return 'bg-green-400';
     if (count <= 5) return 'bg-yellow-400';
     return 'bg-red-400';
  };

  return (
    <div className="flex gap-6 h-[calc(100vh-140px)] animate-fade-in">
      {/* Calendar Grid */}
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <CalendarIcon size={24} className="text-teal-600" />
            Ημερολόγιο Ραντεβού
          </h2>
          <div className="flex items-center gap-4">
            <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronLeft size={20} />
            </button>
            <span className="text-lg font-semibold w-32 text-center">
              {monthNames[month]} {year}
            </span>
            <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          {dayNames.map((day, idx) => (
            <div key={idx} className="py-2 text-center text-sm font-semibold text-gray-500 bg-gray-50 border-r last:border-r-0 border-gray-100">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 flex-1 overflow-y-auto">
          {/* Empty cells for previous month */}
          {Array.from({ length: firstDay }).map((_, idx) => (
            <div key={`empty-${idx}`} className="bg-gray-50/50 border-b border-r border-gray-100" />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }).map((_, idx) => {
            const day = idx + 1;
            const date = new Date(year, month, day);
            const isToday = new Date().toDateString() === date.toDateString();
            const isSelected = selectedDate.toDateString() === date.toDateString();
            const densityColor = getDailyDensity(day);

            return (
              <div 
                 key={day} 
                 onClick={() => setSelectedDate(date)}
                 className={`min-h-[100px] p-2 border-b border-r border-gray-100 cursor-pointer transition-colors relative group
                    ${isSelected ? 'bg-teal-50 ring-2 ring-inset ring-teal-500' : 'hover:bg-gray-50'}
                 `}
              >
                 <div className="flex justify-between items-start">
                    <span className={`text-sm font-medium inline-flex w-7 h-7 items-center justify-center rounded-full ${isToday ? 'bg-teal-600 text-white shadow-md' : 'text-gray-700'}`}>
                      {day}
                    </span>
                    {densityColor && <div className={`w-2 h-2 rounded-full ${densityColor}`} />}
                 </div>
                 
                 {/* Mini previews */}
                 <div className="mt-1 space-y-1">
                   {getEventsForDay(date).slice(0, 3).map((evt, evtIdx) => (
                     <div 
                       key={evtIdx}
                       className={`w-full h-1.5 rounded-full ${
                         evt.type === 'consultation' ? 'bg-blue-400' : 'bg-amber-400'
                       }`}
                     />
                   ))}
                 </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Agenda Sidebar */}
      <div className="w-80 bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 mb-1">
             {selectedDate.toLocaleDateString('el-GR', { weekday: 'long' })}
          </h3>
          <p className="text-gray-500 mb-6 border-b border-gray-100 pb-4">
             {selectedDate.toLocaleDateString('el-GR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          
          <div className="flex-1 overflow-y-auto space-y-4">
             {selectedDayEvents.length > 0 ? (
                selectedDayEvents.map((evt, idx) => (
                   <div key={idx} className="flex gap-3">
                      <div className="flex flex-col items-center">
                         <div className={`w-3 h-3 rounded-full mt-1.5 ${evt.type === 'consultation' ? 'bg-blue-500' : 'bg-amber-500'}`} />
                         <div className="w-0.5 flex-1 bg-gray-100 my-1" />
                      </div>
                      <div className="pb-4">
                         <p className="text-xs font-semibold text-gray-500 mb-0.5">{evt.time}</p>
                         <h4 className="font-medium text-gray-800">{evt.client.name}</h4>
                         <p className="text-sm text-gray-500">{evt.label} - {evt.client.procedureInterest}</p>
                      </div>
                   </div>
                ))
             ) : (
                <div className="text-center text-gray-400 py-10">
                   <CalendarIcon size={40} className="mx-auto mb-2 opacity-20" />
                   <p>Δεν υπάρχουν ραντεβού για αυτή την ημέρα.</p>
                </div>
             )}
          </div>
          
          <button className="mt-4 w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg font-medium transition-colors">
             + Προσθήκη Ραντεβού
          </button>
      </div>
    </div>
  );
};

// 3.6 Reusable Add Client Modal
interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (client: Client) => void;
}

const AddClientModal: React.FC<AddClientModalProps> = ({ isOpen, onClose, onAdd }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
        stage: Stage.NEW,
        transactions: [],
        ...newClient as any
    });
    onClose();
    setNewClient({ name: '', phone: '', email: '', procedureInterest: '', totalValue: 0, notes: '', consultationDate: '', followUpDate: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-fade-in">
        <div className="bg-teal-600 p-6">
          <h2 className="text-xl font-bold text-white">Προσθήκη Νέου Πελάτη</h2>
          <p className="text-teal-100 text-sm mt-1">Συμπληρώστε τα στοιχεία για την καρτέλα ασθενούς.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
              onClick={onClose}
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
  );
};


export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [view, setView] = useState<View>('dashboard');
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchClients();
      else setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchClients();
      else setClients([]);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('clients')
        .select(`
          *,
          transactions (*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const mappedClients: Client[] = (data || []).map((d: any) => ({
          id: d.id,
          user_id: d.user_id,
          name: d.name,
          phone: d.phone,
          email: d.email,
          stage: d.stage,
          procedureInterest: d.procedure_interest || d.procedureInterest,
          notes: d.notes,
          totalValue: d.total_value || d.totalValue || 0,
          createdAt: d.created_at || d.createdAt,
          consultationDate: d.consultation_date || d.consultationDate,
          followUpDate: d.follow_up_date || d.followUpDate,
          medicalRecord: d.medical_record || { history: '', allergies: '', medications: '', observations: '', treatmentPlan: '', postOpInstructions: '', notes: [] },
          transactions: (d.transactions || []).map((t: any) => ({
             id: t.id,
             clientId: t.client_id || t.clientId,
             date: t.date,
             amount: t.amount,
             description: t.description
          }))
      }));

      setClients(mappedClients);
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  };

  const addClient = async (client: Client) => {
     const dbPayload = {
         name: client.name,
         phone: client.phone,
         email: client.email,
         stage: client.stage,
         procedure_interest: client.procedureInterest,
         total_value: client.totalValue,
         notes: client.notes,
         consultation_date: client.consultationDate || null,
         follow_up_date: client.followUpDate || null,
         medical_record: { history: '', allergies: '', medications: '', observations: '', treatmentPlan: '', postOpInstructions: '', notes: [] }
     };
     const { error } = await supabase.from('clients').insert([dbPayload]);
     if (error) console.error(error);
     else fetchClients();
  };

  const updateClient = async (client: Client) => {
     const dbPayload = {
         name: client.name,
         phone: client.phone,
         email: client.email,
         stage: client.stage,
         procedure_interest: client.procedureInterest,
         total_value: client.totalValue,
         notes: client.notes,
         consultation_date: client.consultationDate || null,
         follow_up_date: client.followUpDate || null,
         medical_record: client.medicalRecord
     };
     const { error } = await supabase.from('clients').update(dbPayload).eq('id', client.id);
     if (error) console.error(error);
     else fetchClients();
  };

  const updateClientStage = async (id: string, stage: Stage) => {
      const { error } = await supabase.from('clients').update({ stage }).eq('id', id);
      if (error) console.error(error);
      else {
          setClients(clients.map(c => c.id === id ? { ...c, stage } : c));
      }
  };

  const saveTransaction = async (transaction: Transaction) => {
      if (transaction.id) {
          const { error } = await supabase.from('transactions').update({
              amount: transaction.amount,
              description: transaction.description,
              date: transaction.date
          }).eq('id', transaction.id);
          if (error) console.error(error);
      } else {
          const { id, ...rest } = transaction; 
          const payload = {
              client_id: transaction.clientId,
              amount: transaction.amount,
              description: transaction.description,
              date: transaction.date
          };
          const { error } = await supabase.from('transactions').insert([payload]);
          if (error) console.error(error);
      }
      fetchClients();
  };

  const deleteTransaction = async (id: string) => {
      const { error } = await supabase.from('transactions').delete().eq('id', id);
      if (error) console.error(error);
      fetchClients();
  };

  const bulkAddClients = async (newClients: Partial<Client>[]) => {
      const cleaned = newClients.map(c => ({
          name: c.name,
          phone: c.phone,
          email: c.email,
          stage: Stage.NEW,
          procedure_interest: c.procedureInterest,
          total_value: c.totalValue,
          notes: c.notes,
          medical_record: { history: '', allergies: '', medications: '', observations: '', treatmentPlan: '', postOpInstructions: '', notes: [] }
      }));
      const { error } = await supabase.from('clients').insert(cleaned);
      if (error) console.error(error);
      fetchClients();
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-50">
         <Loader2 className="animate-spin text-teal-600" size={48} />
      </div>
    );
  }

  if (!session) {
    if (showAuth) return <Auth />;
    return <LandingPage onLoginClick={() => setShowAuth(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 bg-[#0f172a] text-gray-400 flex flex-col transition-all duration-300 fixed h-full z-10">
        <div className="h-20 flex items-center justify-center lg:justify-start lg:px-6 border-b border-gray-800">
          <div className="bg-gradient-to-tr from-cyan-400 to-blue-600 p-2 rounded-lg">
            <Activity className="text-white" size={24} />
          </div>
          <span className="ml-3 font-bold text-xl text-white hidden lg:block tracking-tight">PlasticSurg</span>
        </div>

        <nav className="flex-1 py-8 space-y-2 px-2 lg:px-4">
           {[
             { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
             { id: 'kanban', label: 'Pipeline', icon: KanbanIcon },
             { id: 'calendar', label: 'Ημερολόγιο', icon: CalendarIcon },
             { id: 'accounting', label: 'Πελατολόγιο', icon: Banknote },
             { id: 'medical', label: 'Ιατρικό Ιστορικό', icon: ClipboardList },
           ].map((item) => (
             <button
               key={item.id}
               onClick={() => setView(item.id as View)}
               className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 group ${
                 view === item.id 
                 ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-900/20' 
                 : 'hover:bg-white/5 hover:text-gray-200'
               }`}
             >
               <item.icon size={22} className={view === item.id ? 'text-white' : 'group-hover:text-cyan-400 transition-colors'} />
               <span className="ml-3 font-medium hidden lg:block">{item.label}</span>
               {view === item.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white hidden lg:block" />}
             </button>
           ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
           <button 
             onClick={() => supabase.auth.signOut()}
             className="w-full flex items-center justify-center lg:justify-start p-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 transition-colors text-gray-500"
           >
             <LogOut size={20} />
             <span className="ml-3 font-medium hidden lg:block">Αποσύνδεση</span>
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 lg:ml-64 p-4 lg:p-8 overflow-y-auto">
         {/* Top Bar */}
         <header className="flex justify-between items-center mb-8">
            <div>
               <h1 className="text-2xl font-bold text-gray-800">
                 {view === 'dashboard' && 'Επισκόπηση Κλινικής'}
                 {view === 'kanban' && 'Διαχείριση Ροής (Pipeline)'}
                 {view === 'calendar' && 'Ημερολόγιο Ραντεβού'}
                 {view === 'accounting' && 'Λίστα Ασθενών & Ταμείο'}
                 {view === 'medical' && 'Ιατρικός Φάκελος & Ιστορικό'}
               </h1>
               <p className="text-sm text-gray-500 mt-1">
                 Καλωσήρθατε, Dr. {session.user.email}
               </p>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold border-2 border-white shadow-sm">
                  DR
               </div>
            </div>
         </header>

         {view === 'dashboard' && <Dashboard clients={clients} />}
         {view === 'kanban' && (
            <Kanban 
               clients={clients} 
               updateClientStage={updateClientStage} 
               onOpenAddModal={() => setIsAddModalOpen(true)}
            />
         )}
         {view === 'calendar' && <CalendarView clients={clients} />}
         {view === 'accounting' && (
            <ClientList 
               clients={clients}
               onUpdateClient={updateClient}
               onSaveTransaction={saveTransaction}
               onDeleteTransaction={deleteTransaction}
               onBulkAddClients={bulkAddClients}
               onAddClient={addClient}
            />
         )}
         {view === 'medical' && (
            <MedicalRecordsPage 
               clients={clients}
               onUpdateClient={updateClient}
            />
         )}

         <AddClientModal 
            isOpen={isAddModalOpen} 
            onClose={() => setIsAddModalOpen(false)} 
            onAdd={addClient} 
         />
      </main>
    </div>
  );
}
