"use client";

import { PageHero } from '@/components/ui/PageHero';
import { CoreTeam } from '@/components/teamPage/CoreTeam';
import { StudentMembers } from '@/components/teamPage/StudentMembers';
import { HeroData, TeamMember } from '@/types'

// 1. Define the shape of a single student
interface Student {
  id?: number;
  name: string;
  role: string;
  affiliation: string;
}

// 2. Define the shape of your specific JSON hierarchy
export interface StudentData {
  president: Student;
  vice_president: Student;
  administration: {
    treasurer: Student;
    webmaster_admin: Student;
  };
  project_wing: {
    heads: Student[];
    leads: Student[];
  };
  pr_media_wing: {
    pr_digital_media: Student[];
    info_pub: Student[];
  };
  event_wing: {
    coordinators: Student[];
  };
  volunteer_wing: {
    chief_volunteers: Student[];
  };
}

interface TeamPageClientProps {
  hero: HeroData;
  coreMembers: TeamMember[];
  studentMembers: StudentData; // No more 'any' error!
}

export function TeamPageClient({ hero, coreMembers, studentMembers }: TeamPageClientProps) {
  return (
    <div>
      <PageHero 
        title={hero.title} 
        subtitle={hero.subtitle} 
        backgroundImage={hero.backgroundImage}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CoreTeam members={coreMembers} />
        {/* Pass the data to the new component */}
        <StudentMembers data={studentMembers} />
      </div>
    </div>
  );
}