import { Flashcard } from '../../types';

export const containerCards: Flashcard[] = [
  {
    id: 'cont-1',
    topic: 'Containers',
    question: 'What is the difference between a container and a virtual machine?',
    answer: 'Containers virtualize the operating system, sharing the host OS kernel, while VMs virtualize the hardware, running a complete OS. Containers are lightweight, start faster, and use fewer resources.',
    confidence: 'medium',
  },
  {
    id: 'cont-2',
    topic: 'Containers',
    question: 'Explain container orchestration and its benefits',
    answer: 'Container orchestration automates deployment, scaling, and management of containerized applications. Benefits include automated scaling, self-healing, load balancing, and simplified deployment across clusters.',
    confidence: 'low',
  },
  {
    id: 'cont-3',
    topic: 'Containers',
    question: 'What are Docker volumes and when should you use them?',
    answer: 'Docker volumes are persistent data storage mechanisms that exist outside containers. Use them for persistent data storage, sharing data between containers, and backing up or migrating data.',
    confidence: 'medium',
  },
  {
    id: 'cont-4',
    topic: 'Containers',
    question: 'What is Docker Compose and what problem does it solve?',
    answer: 'Docker Compose is a tool for defining and running multi-container Docker applications. It uses YAML files to configure application services, making it easier to manage complex applications with multiple interconnected containers.',
    confidence: 'low',
  },
  {
    id: 'cont-5',
    topic: 'Containers',
    question: 'Explain container networking modes in Docker',
    answer: 'Docker supports several networking modes: bridge (default, isolated network), host (container shares host network), none (no networking), overlay (multi-host networking), and macvlan (direct access to host network interface).',
    confidence: 'medium',
  },
  // Additional cards...
];