import React from 'react';
import { Flashcard } from '../types';
import { FlashCard } from './FlashCard';

interface Props {
  cards: Flashcard[];
  onConfidenceUpdate: (id: string, confidence: Flashcard['confidence']) => void;
}

export function GridView({ cards, onConfidenceUpdate }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
      {cards.map(card => (
        <div key={card.id} className="h-64">
          <FlashCard
            card={card}
            onConfidenceUpdate={onConfidenceUpdate}
          />
        </div>
      ))}
    </div>
  );
}