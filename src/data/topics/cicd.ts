import { Flashcard } from '../../types';

export const cicdCards: Flashcard[] = [
  {
    id: 'cicd-1',
    topic: 'CI/CD',
    question: 'What is the purpose of a blue-green deployment?',
    answer: 'Blue-green deployment is a technique that reduces downtime by running two identical production environments. New versions are deployed to the inactive environment, tested, and then traffic is switched over, enabling quick rollbacks if needed.',
    confidence: 'low',
  },
  {
    id: 'cicd-2',
    topic: 'CI/CD',
    question: 'Explain the concept of continuous integration',
    answer: 'Continuous Integration is the practice of frequently merging code changes into a central repository, followed by automated builds and tests. This helps detect integration issues early and maintain code quality.',
    confidence: 'medium',
  },
  {
    id: 'cicd-3',
    topic: 'CI/CD',
    question: 'What is a deployment pipeline?',
    answer: 'A deployment pipeline is an automated process that takes code from version control through various stages including building, testing, and deploying to production. Each stage verifies the code quality and functionality.',
    confidence: 'medium',
  },
  {
    id: 'cicd-4',
    topic: 'CI/CD',
    question: 'What are feature flags and how do they help in CI/CD?',
    answer: 'Feature flags are toggles that allow features to be enabled/disabled without code deployment. They enable continuous delivery by separating feature release from code deployment, allowing gradual rollouts and A/B testing.',
    confidence: 'low',
  },
  {
    id: 'cicd-5',
    topic: 'CI/CD',
    question: 'Explain canary deployments',
    answer: 'Canary deployments gradually roll out changes to a small subset of users before making them available to everyone. This helps detect issues early and minimize impact while testing in production.',
    confidence: 'medium',
  },
  // Additional cards...
];