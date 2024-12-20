import { containerCards } from './topics/containers';
import { cicdCards } from './topics/cicd';
import { monitoringCards } from './topics/monitoring';
import { cloudCards } from './topics/cloud';
import { infrastructureCards } from './topics/infrastructure';
import { securityCards } from './topics/security';
import { networkingCards } from './topics/networking';

export const flashcards = [
  ...containerCards,
  ...cicdCards,
  ...monitoringCards,
  ...cloudCards,
  ...infrastructureCards,
  ...securityCards,
  ...networkingCards,
];