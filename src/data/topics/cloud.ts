import { Flashcard } from '../../types';

export const cloudCards: Flashcard[] = [
  {
    id: 'cloud-1',
    topic: 'Cloud',
    question: 'Explain the shared responsibility model in cloud computing',
    answer: 'The shared responsibility model defines security responsibilities between cloud providers and customers. Providers secure the cloud infrastructure, while customers are responsible for data, applications, and access management.',
    confidence: 'medium',
  },
  {
    id: 'cloud-2',
    topic: 'Cloud',
    question: 'What is auto-scaling and how does it work?',
    answer: 'Auto-scaling automatically adjusts compute resources based on demand. It monitors metrics (CPU, memory, requests) and adds/removes instances according to defined rules, ensuring optimal performance and cost efficiency.',
    confidence: 'low',
  },
  {
    id: 'cloud-3',
    topic: 'Cloud',
    question: 'What are the different types of cloud services (IaaS, PaaS, SaaS)?',
    answer: 'IaaS provides infrastructure (VMs, storage), PaaS provides development platforms and tools, and SaaS provides complete applications. Each level offers different management responsibilities and flexibility.',
    confidence: 'medium',
  },
  {
    id: 'cloud-4',
    topic: 'Cloud',
    question: 'Explain cloud-native architecture principles',
    answer: 'Cloud-native architectures emphasize microservices, containers, dynamic orchestration, and automated scaling. They focus on resilience, observability, and leveraging cloud platform capabilities.',
    confidence: 'low',
  },
  {
    id: 'cloud-5',
    topic: 'Cloud',
    question: 'What is edge computing and how does it relate to cloud computing?',
    answer: 'Edge computing processes data closer to where it\'s generated, reducing latency and bandwidth usage. It complements cloud computing by handling time-sensitive processing locally while leveraging cloud for storage and heavy computation.',
    confidence: 'medium',
  },
  // Additional cards...
];