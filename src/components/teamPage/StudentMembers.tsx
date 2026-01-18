"use client";

import React from 'react';
import Image from 'next/image';
import { StudentData } from './TeamPageClient';

interface StudentMembersProps {
  data: StudentData;
}

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-slate-200 mt-16 mb-8 text-center relative">
    <span className="relative z-10">{title}</span>
    <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></span>
  </h3>
);

const SubSectionTitle = ({ title }: { title: string }) => (
  <h4 className="text-xl font-semibold text-slate-300 mt-10 mb-6 pl-4 border-l-4 border-blue-500/50">
    {title}
  </h4>
);

// --- NEW CARD DESIGN (Core Team Style, but "Little Big") ---
const MemberCard = ({ name, role, affiliation, image }: { name: string; role: string; affiliation: string; image?: string }) => (
  /* Container - Matches CoreTeam/TeamCard visual style (Slate-950, White/10 border, Radial Gradient) */
  <div className="group relative h-full w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-white/10 bg-slate-950 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),rgba(255,255,255,0))] p-8 text-center shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1">
    
    {/* Image Container - 'Little Big' (Increased from w-32 to w-40) */}
    <div className="relative mx-auto h-40 w-40 mb-6 rounded-full border-4 border-white/5 shadow-xl group-hover:border-cyan-400/30 transition-all duration-500">
       {image ? (
         <Image 
            src={image} 
            alt={name} 
            fill 
            className="rounded-full object-cover object-top"
            sizes="(max-width: 768px) 100vw, 200px"
          />
       ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-800 text-slate-500">
             <span className="text-4xl">?</span>
          </div>
       )}
    </div>

    {/* Text Content */}
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-white font-heading tracking-wide mb-2 group-hover:text-cyan-300 transition-colors">{name}</h3>
      
      <div className="inline-block px-3 py-1 rounded-full bg-blue-950/30 border border-blue-500/20 mb-3">
        <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase">{role}</p>
      </div>
      
      <p className="text-slate-400 text-sm font-light leading-relaxed">{affiliation}</p>
    </div>
  </div>
);

export function StudentMembers({ data }: StudentMembersProps) {
  
  // Merge PR & Digital Media + Info Pub members
  const mergedPRMembers = [
    ...data.pr_media_wing.pr_digital_media,
    ...data.pr_media_wing.info_pub
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background - Simplified to match Core Team sections */}
      <div className="absolute inset-0 bg-slate-950 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"></div>
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Page Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 relative z-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400 inline-block pb-4">
          Student Team
        </span>
      </h2>

      <div className="max-w-7xl mx-auto relative z-10 px-4 space-y-20">
        
        {/* 1. Executive Leadership */}
        <div>
           <SectionTitle title="Executive Leadership" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center max-w-3xl mx-auto">
             <MemberCard {...data.president} />
             <MemberCard {...data.vice_president} />
           </div>
        </div>

        {/* 2. Core Administration */}
        <div>
           <SectionTitle title="Core Administration" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center max-w-3xl mx-auto">
             <MemberCard {...data.administration.treasurer} />
             <MemberCard {...data.administration.webmaster_admin} />
           </div>
        </div>

        {/* 3. Project Wing (Kept distinct Heads vs Leads logic, but same card style) */}
        <div>
          <SectionTitle title="Project Wing" />
          
          <SubSectionTitle title="Project Heads" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
             {data.project_wing.heads.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>

          <SubSectionTitle title="Project Leads" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
             {data.project_wing.leads.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>

        {/* 4. Public Relations & Media Wing (MERGED) */}
        <div>
          <SectionTitle title="Public Relations & Media Wing" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
             {mergedPRMembers.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>

        {/* 5. Event Wing */}
        <div>
          <SectionTitle title="Event Management Wing" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {data.event_wing.coordinators.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>

      </div>
    </div>
  );
}