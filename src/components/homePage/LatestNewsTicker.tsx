"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from "@/components/ui/Section";
import { Newspaper, ChevronUp, ChevronDown, Calendar, Megaphone } from 'lucide-react';

// 1. Import direct data sources
import newsDataRaw from '@/data/Notices/news.json';
import eventsDataRaw from '@/data/Notices/events.json';

// 2. Define a unified type for the ticker items
interface TickerItem {
  id: string;
  type: 'News' | 'Event';
  text: string;
  link: string;
}

export function LatestNewsTicker() {
  // 3. Merge and transform the data into a single array
  // We explicitly map 'title' to 'text' as requested to show headlines
  const tickerItems: TickerItem[] = [
    ...newsDataRaw.map(item => ({
      id: item.id,
      type: 'News' as const,
      text: item.title,
      link: item.link
    })),
    ...eventsDataRaw.map(item => ({
      id: item.id,
      type: 'Event' as const,
      text: item.title,
      link: item.link
    }))
  ];

  const [index, setIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    if (tickerItems.length === 0) return; // Guard against empty data
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % tickerItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [tickerItems.length]);

  const handlePrev = () => {
    if (tickerItems.length === 0) return;
    setIndex(prevIndex => (prevIndex - 1 + tickerItems.length) % tickerItems.length);
  };

  const handleNext = () => {
    if (tickerItems.length === 0) return;
    setIndex(prevIndex => (prevIndex + 1) % tickerItems.length);
  };

  // Guard: If no data exists, don't render or render a placeholder
  if (tickerItems.length === 0) return null;

  const currentItem = tickerItems[index];

  return (
    <Section>
        <div className="flex items-center rounded-xl border border-white/10 bg-slate-950 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),rgba(255,255,255,0))] p-3 sm:p-2 shadow-2xl backdrop-blur-md">
        
        {/* Fixed Title Label */}
        <div className="flex-shrink-0 bg-cyan-500 text-white font-bold flex items-center justify-center rounded-lg px-4 py-3 font-heading">
          <Newspaper className="h-6 w-6 sm:mr-3" />
          <span className="hidden sm:inline text-xl">Latest Updates</span>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-grow min-h-[2.5rem] flex items-center mx-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index} // Key change triggers animation
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full flex items-center gap-3"
            >
              {/* Type Badge (News vs Event) */}
              <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded border ${
                currentItem.type === 'Event' 
                  ? 'border-purple-500/50 text-purple-400 bg-purple-500/10' 
                  : 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10'
              }`}>
                {currentItem.type === 'Event' ? (
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> EVENT</span>
                ) : (
                    <span className="flex items-center gap-1"><Megaphone className="w-3 h-3" /> NEWS</span>
                )}
              </span>

              {/* The Headline */}
              <Link 
                href={currentItem.link} 
                className="block text-slate-200 hover:text-sky-400 transition-colors text-sm sm:text-base font-medium truncate" 
                target='_blank'
              >
                {currentItem.text}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex-shrink-0 flex items-center gap-1 border-l border-white/10 pl-2">
          <button onClick={handlePrev} aria-label="Previous item" className="p-2 rounded-md text-slate-400 hover:bg-white/10 hover:text-sky-400 transition-colors">
            <ChevronUp className="h-5 w-5" />
          </button>
          <button onClick={handleNext} aria-label="Next item" className="p-2 rounded-md text-slate-400 hover:bg-white/10 hover:text-sky-400 transition-colors">
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>

      </div>
    </Section>
  );
}