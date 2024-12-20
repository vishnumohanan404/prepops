import { Flashcard } from '../../types';

export const securityCards: Flashcard[] = [
  {
    id: 'sec-1',
    topic: 'Security',
    question: 'What is the principle of least privilege?',
    answer: 'The principle of least privilege means giving users and processes only the minimum permissions needed to perform their tasks. This reduces the potential impact of security breaches.',
    confidence: 'medium',
  },
  {
    id: 'sec-2',
    topic: 'Security',
    question: 'Explain the concept of defense in depth',
    answer: 'Defense in depth uses multiple security controls in layers to protect assets. If one layer fails, others still provide protection, making it harder for attackers to compromise the system.',
    confidence: 'low',
  },
  {
    id: 'sec-3',
    topic: 'Security',
    question: 'What is RBAC and why is it important?',
    answer: 'Role-Based Access Control (RBAC) assigns permissions based on roles rather than individual users. It simplifies access management, reduces errors, and makes it easier to audit permissions.',
    confidence: 'medium',
  },
  {
    id: 'sec-4',
    topic: 'Security',
    question: 'What are security groups in cloud environments?',
    answer: 'Security groups are virtual firewalls that control inbound and outbound traffic to cloud resources. They help enforce network security policies and isolate resources.',
    confidence: 'low',
  },
  {
    id: 'sec-5',
    topic: 'Security',
    question: 'Explain the importance of secrets management',
    answer: 'Secrets management securely stores and controls access to sensitive information like API keys and passwords. It prevents exposure of credentials in code or logs and enables rotation of secrets.',
    confidence: 'medium',
  },
  // Additional cards...
];