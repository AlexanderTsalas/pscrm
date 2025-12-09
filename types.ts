
export enum Stage {
  NEW = 'Νέος',
  APPOINTMENT = 'Ραντεβού',
  IN_PROGRESS = 'Προχωράει',
  CLOSED = 'Έκλεισε',
  NOT_INTERESTED = 'Δεν ενδιαφέρεται'
}

export interface Transaction {
  id: string;
  clientId?: string; // Foreign Key
  date: string;
  amount: number;
  description: string;
}

export interface ClinicalNote {
  id: string;
  date: string;
  content: string;
  type: 'general' | 'procedure' | 'post_op';
  author?: string;
}

export interface MedicalRecord {
  history: string;
  allergies: string;
  medications: string;
  observations?: string; // Doctor's General Notes
  treatmentPlan?: string; // Specific Plan
  postOpInstructions?: string; // Instructions for patient
  notes: ClinicalNote[];
}

export interface Client {
  id: string;
  user_id?: string; // Owner
  name: string;
  phone: string;
  email: string;
  stage: Stage;
  procedureInterest: string; // e.g., "Ρινοπλαστική"
  notes: string;
  totalValue: number; // Potential or actual value
  createdAt: string;
  transactions?: Transaction[];
  consultationDate?: string;
  followUpDate?: string;
  medicalRecord?: MedicalRecord;
}

export type View = 'dashboard' | 'kanban' | 'accounting' | 'calendar' | 'medical';
