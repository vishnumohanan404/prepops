import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../types';
import { RotateCw, ThumbsUp, ThumbsDown } from 'lucide-react';

interface Props {
  card: FlashcardType;
  onConfidenceUpdate: (id: string, confidence: FlashcardType['confidence']) => void;
  isFlipped?: boolean;
  onFlip?: () => void;
}

export function FlashCard({ card, onConfidenceUpdate, isFlipped: controlledIsFlipped, onFlip }: Props) {
  const [internalIsFlipped, setInternalIsFlipped] = useState(false);
  
  const isFlipped = controlledIsFlipped ?? internalIsFlipped;
  const handleFlip = () => {
    if (onFlip) {
      onFlip();
    } else {
      setInternalIsFlipped(!internalIsFlipped);
    }
  };

  return (
    <div 
      className="relative w-full h-full cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full p-6 bg-white rounded-lg shadow-lg flex flex-col">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 self-start">
              {card.topic}
            </span>
            <div className="flex-1 flex items-center justify-center text-lg font-medium text-gray-800 text-center">
              {card.question}
            </div>
            <div className="text-sm text-gray-500 text-center">Click to flip</div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full p-6 bg-white rounded-lg shadow-lg flex flex-col">
            <div className="flex-1 flex items-center justify-center text-gray-700 text-center">
              {card.answer}
            </div>
            <div className="flex justify-center gap-4 mt-4" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => onConfidenceUpdate(card.id, 'low')}
                className="p-2 rounded-full hover:bg-red-100 transition-colors"
                title="Not confident"
              >
                <ThumbsDown className="w-5 h-5 text-red-500" />
              </button>
              <button
                onClick={() => onConfidenceUpdate(card.id, 'medium')}
                className="p-2 rounded-full hover:bg-yellow-100 transition-colors"
                title="Somewhat confident"
              >
                <RotateCw className="w-5 h-5 text-yellow-500" />
              </button>
              <button
                onClick={() => onConfidenceUpdate(card.id, 'high')}
                className="p-2 rounded-full hover:bg-green-100 transition-colors"
                title="Very confident"
              >
                <ThumbsUp className="w-5 h-5 text-green-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}