import { useMemo } from "react";
import { Brain } from "lucide-react";
import { TopicDeck } from "../components/TopicDeck";
import { useFlashcards } from "../hooks/useFlashcards";

export function Home() {
  const { cards } = useFlashcards();

  const topicStats = useMemo(() => {
    const stats = new Map();

    cards.forEach((card) => {
      if (!stats.has(card.topic)) {
        stats.set(card.topic, { total: 0, completed: 0 });
      }
      const topicStat = stats.get(card.topic);
      topicStat.total += 1;
      if (card.confidence === "high") {
        topicStat.completed += 1;
      }
    });

    return stats;
  }, [cards]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-12">
          <Brain className="w-10 h-10 text-gray-700 mr-3" />
          <h1 className="text-4xl font-bold text-gray-800">
            DevOps/SRE Flashcards
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from(topicStats.entries()).map(([topic, stats]) => (
            <TopicDeck
              key={topic}
              topic={topic}
              cardCount={stats.total}
              completedCount={stats.completed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
