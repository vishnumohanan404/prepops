import React from 'react';
import { Topic } from '../types';

interface Props {
  topics: Topic[];
  selectedTopic: Topic | 'all';
  onTopicSelect: (topic: Topic | 'all') => void;
}

export function TopicFilter({ topics, selectedTopic, onTopicSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onTopicSelect('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${selectedTopic === 'all' 
            ? 'bg-gray-800 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
      >
        All Topics
      </button>
      {topics.map((topic) => (
        <button
          key={topic}
          onClick={() => onTopicSelect(topic)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedTopic === topic
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}