"use client";

import { PageHero } from '@/components/ui/PageHero';
import { CoreTeam } from '@/components/teamPage/CoreTeam';
// 1. Uncomment the import
import { StudentMembers } from '@/components/teamPage/StudentMembers'; 
import { HeroData, TeamMember } from '@/types'

// Define the props interface to include studentMembers
interface TeamPageClientProps {
  hero: HeroData;
  coreMembers: TeamMember[];
  studentMembers: any; // Using 'any' here because your JSON is now a complex hierarchy, not a simple array
}

// 2. Add studentMembers to the destructured props
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
        
        {/* 3. Uncomment the component usage */}
        <StudentMembers members={studentMembers} />
      </div>
    </div>
  );
}