import { Flashcard } from '../../types';

export const infrastructureCards: Flashcard[] = [
  {
    id: 'infra-1',
    topic: 'Infrastructure',
    question: 'What is Infrastructure as Code (IaC)?',
    answer: 'Infrastructure as Code is managing and provisioning infrastructure through code instead of manual processes. It enables version control, automated deployment, and consistent environments.',
    confidence: 'medium',
  },
  {
    id: 'infra-2',
    topic: 'Infrastructure',
    question: 'Explain the concept of immutable infrastructure',
    answer: 'Immutable infrastructure means never modifying existing infrastructure but replacing it entirely with new instances. This ensures consistency and eliminates configuration drift.',
    confidence: 'low',
  },
  {
    id: 'infra-3',
    topic: 'Infrastructure',
    question: 'What is configuration management and why is it important?',
    answer: 'Configuration management automates and maintains system configurations. It ensures consistency across environments, tracks changes, and enables rapid recovery from failures.',
    confidence: 'medium',
  },
  {
    id: 'infra-4',
    topic: 'Infrastructure',
    question: 'What are the benefits of using service mesh?',
    answer: 'Service mesh provides traffic management, security, and observability for microservices. It handles service-to-service communication, enabling features like circuit breaking, retry logic, and mutual TLS.',
    confidence: 'low',
  },
  {
    id: 'infra-5',
    topic: 'Infrastructure',
    question: 'Explain the concept of GitOps',
    answer: 'GitOps uses Git as the single source of truth for infrastructure and applications. Changes to the system are made through pull requests, providing audit trail and automated deployment.',
    confidence: 'medium',
  },
  // Additional cards...
];