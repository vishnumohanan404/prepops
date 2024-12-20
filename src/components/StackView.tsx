import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Flashcard } from '../types';
import { FlashCard } from './FlashCard';

interface Props {
  cards: Flashcard[];
  onConfidenceUpdate: (id: string, confidence: Flashcard['confidence']) => void;
}

export function StackView({ cards, onConfidenceUpdate }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  if (cards.length === 0) {
    return <div>No cards in this deck</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl mb-8">
        <FlashCard
          card={cards[currentIndex]}
          onConfidenceUpdate={onConfidenceUpdate}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped(!isFlipped)}
        />
      </div>
      
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`p-2 rounded-full ${
            currentIndex === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <span className="text-sm text-gray-600">
          {currentIndex + 1} / {cards.length}
        </span>
        
        <button
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
          className={`p-2 rounded-full ${
            currentIndex === cards.length - 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}