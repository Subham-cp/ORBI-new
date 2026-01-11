"use client";
// STEP 1: Import the 'HTMLMotionProps' type from framer-motion
import { motion, HTMLMotionProps } from 'framer-motion';

// STEP 2: Update the interface to use the correct Framer Motion props
interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
}

export const Section = ({ children, className = '', ...rest }: SectionProps) => {
  return (
    <motion.section
      className={`w-full px-4 py-12 md:px-8 md:py-16 lg:py-20 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      {...rest} // This will now be correctly typed
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
  {
  "id": "5",
  "title": "Stratospheric High-Altitude Balloon Payload (HAB-X)",
  "image": "/images/rocket.jpg", 
  "link": "#",
  "fields": ["Aerospace", "Telemetry", "Atmospheric Science"],
  "description": "Development of a modular, reusable payload system designed for high-altitude balloon missions reaching the stratosphere (approx. 30km altitude). The payload integrates multi-sensor arrays to measure vertical atmospheric profiles including pressure, temperature, humidity, and UV radiation. Key features include a redundant GPS tracking system, long-range LoRaWAN telemetry for real-time ground communication, and a stabilized horizon-capture imaging system.",
  "status": "Upcoming",
  "startDate": "2024-04-15",
  "endDate": "2025-06-30",
  "teamMembers": [
    { "name": "Team Lead Name", "profileLink": "#" },
    { "name": "Dr. Project Mentor", "profileLink": "#" }
  ]
}
};
