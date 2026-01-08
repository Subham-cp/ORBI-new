"use client";

import Image from 'next/image';
import Link from 'next/link';
// Removed motion import for the inner div to prevent conflict
import { Section } from '@/components/ui/Section';
import { Title } from '@/components/ui/Title'; 
import presidentData from '@/data/homePage/presidentSpotlight.json';
import { Linkedin, GraduationCap, Twitter, Award, User } from 'lucide-react';

const iconMap = {
  Linkedin: Linkedin,
  GraduationCap: GraduationCap,
  Twitter: Twitter,
  Award: Award,
  User: User
};

export function PresidentSpotlight() {
  return (
    // The Section component already handles the fade-in animation
    <Section className="border border-white/10 rounded-2xl bg-slate-950 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),rgba(255,255,255,0))]"> 
      <Title icon={User} as="h2" className='mb-6'>
          ORBI President
      </Title>
      
      {/* Changed motion.div to standard div to ensure visibility on mobile */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl py-6">
        <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56">
          <Image
            src={presidentData.image}
            alt={presidentData.name}
            fill
            className="rounded-2xl object-cover ring-2 ring-emerald-400/50"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-white font-heading">{presidentData.name}</h3>
          <p className="text-base text-emerald-400">{presidentData.title}</p>
          <blockquote className="mt-4 border-l-4 border-slate-700 pl-4 text-left text-slate-300 italic">
            &#34;{presidentData.message}&#34;
          </blockquote>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          {presidentData.socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap] || User;
            return (
              <Link 
                key={social.name} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 transition-colors hover:text-emerald-400 p-2 rounded-lg hover:bg-white/10"
              >
                <Icon className="h-6 w-6" />
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}