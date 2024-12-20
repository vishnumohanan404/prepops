import { useState } from 'react';
import { flashcards as initialCards } from '../data/flashcards';
import { Flashcard } from '../types';

export function useFlashcards() {
  const [cards, setCards] = useState(initialCards);

  const updateCardConfidence = (id: string, confidence: Flashcard['confidence']) => {
    setCards(cards.map(card => 
      card.id === id 
        ? { ...card, confidence, lastReviewed: new Date() }
        : card
    ));
  };

  return {
    cards,
    updateCardConfidence,
  };
}