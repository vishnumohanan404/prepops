export interface Flashcard {
  id: string;
  topic: Topic;
  question: string;
  answer: string;
  lastReviewed?: Date;
  confidence: 'low' | 'medium' | 'high';
}

export type Topic = 
  | 'Containers'
  | 'CI/CD'
  | 'Cloud'
  | 'Monitoring'
  | 'Infrastructure'
  | 'Security'
  | 'Networking';