"use client";

import { Section } from "@/components/ui/Section";
import { WelcomeSection } from "./WelcomeSection";
import { VisionSection } from "./VisionSection";
import { TeamSpotlight } from "./TeamSpotlight";
import { PresidentSpotlight } from "./PresidentSpotlight"; // Import the new component
import { MissionSection } from "./MissionSection";

export function AboutSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Contains both Welcome and Mission */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <WelcomeSection />
          <MissionSection />
        </div>
        
        {/* Right Column: Team Spotlight and President Spotlight */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <TeamSpotlight />
          <PresidentSpotlight /> {/* Added here */}
          <VisionSection />
        </div>
      </div>
    </Section>
  );
}