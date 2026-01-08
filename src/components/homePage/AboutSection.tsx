"use client";

import { Section } from "@/components/ui/Section";
import { WelcomeSection } from "./WelcomeSection";
import { VisionSection } from "./VisionSection";
import { TeamSpotlight } from "./TeamSpotlight";
import { PresidentSpotlight } from "./PresidentSpotlight"; 
import { MissionSection } from "./MissionSection";

export function AboutSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Contains Welcome, Mission, and Vision */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <WelcomeSection />
          <MissionSection />
          <VisionSection /> {/* Moved here from the right column */}
        </div>
        
        {/* Right Column: Team Spotlight and President Spotlight */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <TeamSpotlight />
          <PresidentSpotlight />
        </div>
      </div>
    </Section>
  );
}