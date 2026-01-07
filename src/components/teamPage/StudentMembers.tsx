"use client";

import React from 'react';
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

// New 3D ID Card Component
const MemberCard = ({ name, role, affiliation }: { name: string; role: string; affiliation: string }) => (
  // Container for 3D perspective
  <div className="group [perspective:1000px] h-[260px] w-full max-w-sm mx-auto">
    // The card itself that tilts
    <div className="relative w-full h-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(8deg)_rotateX(4deg)] transition-all ease-out">
      // Front face of the card
      <div className="absolute inset-0 w-full h-full bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center overflow-hidden [backface-visibility:hidden]">
        
        {/* Lanyard Slot visualization */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-slate-800/80 rounded-b-xl border-b border-x border-white/10 shadow-sm"></div>
        
        {/* Photo Placeholder */}
        <div className="relative w-20 h-20 rounded-full mb-3 mt-4 p-0.5 bg-gradient-to-br from-blue-500/50 to-purple-500/50 shadow-lg">
           <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
             </svg>
           </div>
           {/* Subtle glow behind photo */}
           <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md -z-10"></div>
        </div>

        {/* Text Content */}
        <h5 className="font-bold text-lg text-white mb-0.5 leading-tight line-clamp-1" title={name}>{name}</h5>
        <p className="text-blue-400 text-xs font-bold tracking-wider uppercase mb-3">{role}</p>
        
        {/* Divider & Affiliation */}
        <div className="mt-auto pt-3 border-t border-white/10 w-full flex-grow flex items-center justify-center">
            <p className="text-slate-400 text-xs font-mono leading-snug line-clamp-2" title={affiliation}>{affiliation}</p>
        </div>

        {/* Reflective Sheen Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        {/* Bottom-right accent chip */}
        <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-md blur-[2px] -z-10"></div>
      </div>
    </div>
  </div>
);

export function StudentMembers({ data }: StudentMembersProps) {
  return (
    <div className="py-20 relative">
      {/* Background Element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950/0 to-slate-950/0 pointer-events-none"></div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400 inline-block pb-2 relative">
          Student Team Structure
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full blur-sm"></div>
        </span>
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* 1. Leadership */}
        <SectionTitle title="Executive Leadership" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
          <MemberCard {...data.president} />
          <MemberCard {...data.vice_president} />
        </div>

        {/* 2. Administration */}
        <SectionTitle title="Core Administration" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
          <MemberCard {...data.administration.treasurer} />
          <MemberCard {...data.administration.webmaster_admin} />
        </div>

        {/* 3. Project Wing */}
        <SectionTitle title="Project Wing" />
        <div className="space-y-10">
          <div>
            <SubSectionTitle title="Project Heads" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
              {data.project_wing.heads.map((m, i) => <MemberCard key={i} {...m} />)}
            </div>
          </div>
          <div>
            <SubSectionTitle title="Project Leads" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
              {data.project_wing.leads.map((m, i) => <MemberCard key={i} {...m} />)}
            </div>
          </div>
        </div>

        {/* 4. PR Wing */}
        <SectionTitle title="Public Relations & Media Wing" />
        <div className="space-y-10">
          <div>
            <SubSectionTitle title="PR & Digital Media Incharges" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
              {data.pr_media_wing.pr_digital_media.map((m, i) => <MemberCard key={i} {...m} />)}
            </div>
          </div>
          <div>
            <SubSectionTitle title="Information & Publicity" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
              {data.pr_media_wing.info_pub.map((m, i) => <MemberCard key={i} {...m} />)}
            </div>
          </div>
        </div>

        {/* 5. Event Wing */}
        <SectionTitle title="Event Management Wing" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {data.event_wing.coordinators.map((m, i) => <MemberCard key={i} {...m} />)}
        </div>

        {/* 6. Volunteers */}
        <SectionTitle title="Volunteer Wing" />
        <div>
          <SubSectionTitle title="Chief Volunteers" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {data.volunteer_wing.chief_volunteers.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>
      </div>

    </div>
  );
}