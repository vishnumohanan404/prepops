"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CheckSquare,
  HelpCircle,
  BarChart,
  Target,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Interactive Quizzes",
    description: "Test your knowledge with our comprehensive quizzes",
  },
  {
    icon: CheckSquare,
    title: "Cheatsheets",
    description: "Quick reference guides for key concepts and commands",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Common interview questions and expert answers",
  },
  {
    icon: BarChart,
    title: "Progress Tracking",
    description: "Monitor your learning journey and improvements",
  },
  {
    icon: Target,
    title: "Goals",
    description: "Set and achieve your learning objectives",
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    description: "Compete with peers and showcase your expertise",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl group-hover:from-primary/20 transition-all duration-300" />
            <div className="relative p-8">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
