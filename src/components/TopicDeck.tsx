import React from 'react';
import { Topic } from '../types';
import { useNavigate } from 'react-router-dom';

interface Props {
  topic: Topic;
  cardCount: number;
  completedCount: number;
}

export function TopicDeck({ topic, cardCount, completedCount }: Props) {
  const navigate = useNavigate();
  
  const topicIcons = {
    Containers: '🐳',
    'CI/CD': '🔄',
    Cloud: '☁️',
    Monitoring: '📊',
    Infrastructure: '🏗️',
    Security: '🔒',
    Networking: '🌐',
  };

  const progress = Math.round((completedCount / cardCount) * 100);

  return (
    <div 
      onClick={() => navigate(`/deck/${topic}`)}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-transform hover:scale-105"
    >
      <div className="text-4xl mb-4">{topicIcons[topic]}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{topic}</h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600">{cardCount} cards</span>
        <span className="text-sm font-medium text-gray-800">{progress}% complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 rounded-full h-2 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}