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

// --- NEW FUTURISTIC "DATA-PAD" CARD DESIGN ---
const MemberCard = ({ name, role, affiliation, image }: { name: string; role: string; affiliation: string; image?: string }) => (
  /* Container for 3D perspective */
  <div className="group [perspective:1000px] h-[280px] w-full max-w-sm mx-auto">
    {/* The card itself that tilts */}
    <div className="relative w-full h-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(12deg)_rotateX(5deg)] transition-all ease-out">
      
      {/* --- Front face of the card --- */}
      <div className="absolute inset-0 w-full h-full bg-slate-950 rounded-xl border border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] overflow-hidden [backface-visibility:hidden]">
        
        {/* 1. Background Effects (Circuitry & Grid) */}
        {/* Subtle digital grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
        {/* Glowing top energy bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>
        {/* Glowing bottom energy bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-70"></div>
        
        {/* 2. Corner Accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-400 rounded-tl-md"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-blue-400 rounded-tr-md"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-purple-400 rounded-bl-md"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-400 rounded-br-md"></div>

        {/* 3. Content Container */}
        <div className="relative z-10 flex flex-col items-center h-full p-6">
            
            {/* Photo Container with spinning data ring */}
            <div className="relative w-24 h-24 mb-4 group-hover:scale-105 transition-transform duration-500">
                {/* Spinning outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/60 animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* Inner glowing border */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-500 p-1 shadow-lg shadow-blue-500/20">
                    <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center overflow-hidden relative">
                        {image ? (
                        <Image 
                            src={image} 
                            alt={name} 
                            fill 
                            className="object-cover"
                        />
                        ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        )}
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <h5 className="font-bold text-xl text-white mb-1 leading-tight text-center tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{name}</h5>
            
            {/* Role with technical styling */}
            <div className="mb-4 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-500/20">
                <p className="text-blue-300 text-xs font-bold tracking-[0.15em] uppercase">{role}</p>
            </div>
            
            {/* Affiliation (Mono font for technical data look) */}
            <div className="mt-auto w-full border-t border-blue-500/20 pt-3 text-center">
                <p className="text-slate-400 text-xs font-mono leading-snug line-clamp-2">{affiliation}</p>
            </div>
        </div>

        {/* 4. Scanline Overlay Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-10 z-20"></div>
      </div>
    </div>
  </div>
);

export function StudentMembers({ data }: StudentMembersProps) {
  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background Element - Adjusted for new theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30"></div>


      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 relative z-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400 inline-block pb-2 relative">
          Student Team Structure
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full blur-sm"></div>
        </span>
      </h2>

      <div className="max-w-6xl mx-auto relative z-10">
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
        <div className="space-y-16">
          <div>
            <SubSectionTitle title="Project Heads" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {data.project_wing.heads.map((m, i) => <MemberCard key={i} {...m} />)}
            </div>
          </div>
          <div>
            <SubSectionTitle title="Project Leads" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {data.project_wing.leads.map((m, i) => <MemberCard key={i} {...m} />)}
            </div>
          </div>
        </div>

        {/* 4. PR Wing */}
        <SectionTitle title="Public Relations & Media Wing" />
        <div className="space-y-16">
          <div>
            <SubSectionTitle title="PR & Digital Media Incharges" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {data.pr_media_wing.pr_digital_media.map((m, i) => <MemberCard key={i} {...m} />)}
            </div>
          </div>
          <div>
            <SubSectionTitle title="Information & Publicity" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {data.pr_media_wing.info_pub.map((m, i) => <MemberCard key={i} {...m} />)}
            </div>
          </div>
        </div>

        {/* 5. Event Wing */}
        <SectionTitle title="Event Management Wing" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {data.event_wing.coordinators.map((m, i) => <MemberCard key={i} {...m} />)}
        </div>

        {/* 6. Volunteers */}
        <SectionTitle title="Volunteer Wing" />
        <div>
          <SubSectionTitle title="Chief Volunteers" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {data.volunteer_wing.chief_volunteers.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>
      </div>

    </div>
  );
}