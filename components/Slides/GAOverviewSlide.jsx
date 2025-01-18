import React from 'react';
import { Sparkles, Target, Users, RefreshCw } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function GAOverviewSlide() {
  const features = [
    {
      id: 1,
      icon: <Sparkles />,
      title: "Bio-Inspired Design",
      description: "Mimics natural evolution (survival of the fittest)"
    },
    {
      id: 2,
      icon: <Target />,
      title: "Search/Optimization Method",
      description: "Finds optimal solutions in complex problem spaces"
    },
    {
      id: 3,
      icon: <Users />,
      title: "Population-Based",
      description: "Operates on a collection of candidate solutions"
    },
    {
      id: 4,
      icon: <RefreshCw />,
      title: "Iterative Process",
      description: "Continuously improves through selection, crossover, and mutation"
    }
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-5">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-12">
          Genetic Algorithm (GA) Overview
        </h2>

        {/* Features list */}
        <div className="flex-1 space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
              style={{
                animation: `slideIn 0.5s ease-out ${index * 0.15}s`
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="mt-1">
                  {React.cloneElement(feature.icon, {
                    className: "w-6 h-6 text-purple-400"
                  })}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-blue-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </SlideWrapper>
  );
}