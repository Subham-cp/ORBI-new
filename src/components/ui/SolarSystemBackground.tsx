"use client";

export const SolarSystemBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="solar-system">
        <div className="sun"></div>
        
        <div className="orbit orbit-1">
          <div className="planet"></div>
        </div>
        
        <div className="orbit orbit-2">
          <div className="planet"></div>
        </div>
        
        <div className="orbit orbit-3">
          <div className="planet"></div>
        </div>
        
        <div className="orbit orbit-4">
          <div className="planet"></div>
        </div>
      </div>
    </div>
  );
};