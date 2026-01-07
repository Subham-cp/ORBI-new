"use client";

import React from 'react';
import { StudentData } from './TeamPageClient'; // Import the type we just made

interface StudentMembersProps {
  data: StudentData;
}

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-2xl font-bold text-slate-100 mt-12 mb-6 border-b border-slate-700 pb-2">
    {title}
  </h3>
);

const SubSectionTitle = ({ title }: { title: string }) => (
  <h4 className="text-xl font-semibold text-slate-300 mt-6 mb-4">
    {title}
  </h4>
);

const MemberCard = ({ name, role, affiliation }: { name: string; role: string; affiliation: string }) => (
  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-colors">
    <h5 className="font-bold text-lg text-white">{name}</h5>
    <p className="text-blue-400 text-sm mb-1">{role}</p>
    <p className="text-slate-400 text-xs">{affiliation}</p>
  </div>
);

export function StudentMembers({ data }: StudentMembersProps) {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Student Team Structure
      </h2>

      {/* 1. Leadership */}
      <SectionTitle title="Executive Leadership" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MemberCard {...data.president} />
        <MemberCard {...data.vice_president} />
      </div>

      {/* 2. Administration */}
      <SectionTitle title="Core Administration" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MemberCard {...data.administration.treasurer} />
        <MemberCard {...data.administration.webmaster_admin} />
      </div>

      {/* 3. Project Wing */}
      <SectionTitle title="Project Wing" />
      <div className="space-y-6">
        <div>
          <SubSectionTitle title="Project Heads" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.project_wing.heads.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>
        <div>
          <SubSectionTitle title="Project Leads" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.project_wing.leads.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>
      </div>

      {/* 4. PR Wing */}
      <SectionTitle title="Public Relations & Media Wing" />
      <div className="space-y-6">
        <div>
          <SubSectionTitle title="PR & Digital Media Incharges" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.pr_media_wing.pr_digital_media.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>
        <div>
          <SubSectionTitle title="Information & Publicity" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.pr_media_wing.info_pub.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>
      </div>

      {/* 5. Event Wing */}
      <SectionTitle title="Event Management Wing" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.event_wing.coordinators.map((m, i) => <MemberCard key={i} {...m} />)}
      </div>

      {/* 6. Volunteers */}
      <SectionTitle title="Volunteer Wing" />
      <div>
        <SubSectionTitle title="Chief Volunteers" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.volunteer_wing.chief_volunteers.map((m, i) => <MemberCard key={i} {...m} />)}
        </div>
      </div>

    </div>
  );
}