import { Flashcard } from '../../types';

export const monitoringCards: Flashcard[] = [
  {
    id: 'mon-1',
    topic: 'Monitoring',
    question: 'What are the four golden signals of monitoring?',
    answer: 'The four golden signals are: Latency (time to serve requests), Traffic (demand on system), Errors (rate of failed requests), and Saturation (how "full" the system is).',
    confidence: 'medium',
  },
  {
    id: 'mon-2',
    topic: 'Monitoring',
    question: 'What is the difference between metrics and logs?',
    answer: 'Metrics are numerical measurements taken over time (e.g., request count, CPU usage), while logs are detailed records of specific events with contextual information. Metrics are better for trends and alerts, logs for debugging and audit trails.',
    confidence: 'low',
  },
  {
    id: 'mon-3',
    topic: 'Monitoring',
    question: 'What is the purpose of alerting thresholds?',
    answer: 'Alerting thresholds define conditions that trigger notifications when metrics exceed normal operating parameters. They help identify potential issues before they impact users and enable proactive system maintenance.',
    confidence: 'medium',
  },
  {
    id: 'mon-4',
    topic: 'Monitoring',
    question: 'Explain the concept of cardinality in monitoring',
    answer: 'Cardinality refers to the number of unique combinations of label values in metrics. High cardinality can impact monitoring system performance and storage costs. It\'s important to balance granularity with resource usage.',
    confidence: 'low',
  },
  {
    id: 'mon-5',
    topic: 'Monitoring',
    question: 'What is the difference between blackbox and whitebox monitoring?',
    answer: 'Blackbox monitoring tests external behavior without system knowledge (e.g., HTTP checks), while whitebox monitoring examines internal system metrics (e.g., memory usage, application metrics). Both are important for complete system observability.',
    confidence: 'medium',
  },
  // Additional cards...
];