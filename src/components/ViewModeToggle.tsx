import React from 'react';
import { Grid, Layers } from 'lucide-react';

interface Props {
  mode: 'grid' | 'stack';
  onModeChange: (mode: 'grid' | 'stack') => void;
}

export function ViewModeToggle({ mode, onModeChange }: Props) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onModeChange('grid')}
        className={`flex items-center px-4 py-2 rounded-lg ${
          mode === 'grid'
            ? 'bg-gray-800 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <Grid className="w-4 h-4 mr-2" />
        Grid View
      </button>
      <button
        onClick={() => onModeChange('stack')}
        className={`flex items-center px-4 py-2 rounded-lg ${
          mode === 'stack'
            ? 'bg-gray-800 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <Layers className="w-4 h-4 mr-2" />
        Stack View
      </button>
    </div>
  );
}