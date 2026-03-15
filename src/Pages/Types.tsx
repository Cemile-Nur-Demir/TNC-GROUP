export interface Ders {
  id: string;
  title: string;
  code?: string;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string; // ISO string
  completed: boolean;
  createdAt: string; // ISO string
}