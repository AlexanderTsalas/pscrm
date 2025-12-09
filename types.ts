
export enum Stage {
  NEW = 'Νέος',
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
}

export type View = 'dashboard' | 'kanban' | 'accounting';
