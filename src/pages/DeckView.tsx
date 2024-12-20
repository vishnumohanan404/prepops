import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useFlashcards } from '../hooks/useFlashcards';
import { ViewModeToggle } from '../components/ViewModeToggle';
import { GridView } from '../components/GridView';
import { StackView } from '../components/StackView';

export function DeckView() {
  const { topic } = useParams();
  const navigate = useNavigate();
  const { cards, updateCardConfidence } = useFlashcards();
  const [viewMode, setViewMode] = useState<'grid' | 'stack'>('grid');
  
  const deckCards = cards.filter(card => card.topic === topic);
  
  const stats = {
    total: deckCards.length,
    high: deckCards.filter(c => c.confidence === 'high').length,
    medium: deckCards.filter(c => c.confidence === 'medium').length,
    low: deckCards.filter(c => c.confidence === 'low').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Decks
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-8">{topic} Deck</h2>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-800">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Cards</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{stats.high}</div>
              <div className="text-sm text-gray-600">High Confidence</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">{stats.medium}</div>
              <div className="text-sm text-gray-600">Medium Confidence</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">{stats.low}</div>
              <div className="text-sm text-gray-600">Low Confidence</div>
            </div>
          </div>
        </div>

        <ViewModeToggle mode={viewMode} onModeChange={setViewMode} />

        {viewMode === 'grid' ? (
          <GridView cards={deckCards} onConfidenceUpdate={updateCardConfidence} />
        ) : (
          <StackView cards={deckCards} onConfidenceUpdate={updateCardConfidence} />
        )}
      </div>
    </div>
  );
}