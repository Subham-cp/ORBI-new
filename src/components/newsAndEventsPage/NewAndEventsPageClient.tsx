"use client";

import { motion } from 'framer-motion';
import { PageHero } from '@/components/ui/PageHero';
import heroData from '@/data/newsAndEventsPage/hero.json';
import newsData from '@/data/Notices/news.json';
import { NewsCard } from '@/components/ui/NewsCard';
import { Section } from '@/components/ui/Section';

export const NewsAndEventsPageClient = () => {
    return (
        <motion.div
            className="bg-slate-950 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHero
                title={heroData.hero.title}
                subtitle={heroData.hero.subtitle}
                backgroundImage={heroData.hero.backgroundImage}
            />

            <Section className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((newsItem) => (
                        <NewsCard key={newsItem.id} newsItem={newsItem} />
                    ))}
                </div>
            </Section>
            
        </motion.div>
    );
};