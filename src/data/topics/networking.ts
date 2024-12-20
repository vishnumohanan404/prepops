import { Flashcard } from '../../types';

export const networkingCards: Flashcard[] = [
  {
    id: 'net-1',
    topic: 'Networking',
    question: 'What is a reverse proxy and when would you use it?',
    answer: 'A reverse proxy sits in front of web servers and forwards client requests. It provides load balancing, caching, SSL termination, and can hide internal network structure.',
    confidence: 'medium',
  },
  {
    id: 'net-2',
    topic: 'Networking',
    question: 'Explain the OSI model layers',
    answer: 'The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. Each layer handles specific networking functions and protocols.',
    confidence: 'low',
  },
  {
    id: 'net-3',
    topic: 'Networking',
    question: 'What is DNS and how does it work?',
    answer: 'DNS (Domain Name System) translates domain names to IP addresses. It uses a hierarchical system of nameservers to resolve queries, with results often cached to improve performance.',
    confidence: 'medium',
  },
  {
    id: 'net-4',
    topic: 'Networking',
    question: 'What is a CIDR block and how is it used?',
    answer: 'CIDR (Classless Inter-Domain Routing) blocks define IP address ranges using a base IP and subnet mask. They help organize and allocate IP addresses efficiently in networks.',
    confidence: 'low',
  },
  {
    id: 'net-5',
    topic: 'Networking',
    question: 'Explain the difference between TCP and UDP',
    answer: 'TCP is connection-oriented, ensuring reliable, ordered data delivery with error checking. UDP is connectionless, offering faster transmission without guarantees, suitable for streaming and real-time applications.',
    confidence: 'medium',
  },
  // Additional cards...
];