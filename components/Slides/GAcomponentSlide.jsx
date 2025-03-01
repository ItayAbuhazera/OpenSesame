'use client';

import React from 'react';
import { Users, Target, GitBranch, Shuffle } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function GAComponentsSlide() {
  const components = [
    {
      id: 1,
      icon: <Users />,
      title: "Population",
      description: "Collection of potential solutions, like a pool of candidates competing for survival",
      color: "text-blue-400"
    },
    {
      id: 2,
      icon: <Target />,
      title: "Selection",
      description: 'Picking top candidates based on "fitness" - how well they solve the problem',
      color: "text-green-400"
    },
    {
      id: 3,
      icon: <GitBranch />,
      title: "Crossover",
      description: 'Combining features from two "parent" solutions to create new possibilities',
      color: "text-purple-400"
    },
    {
      id: 4,
      icon: <Shuffle />,
      title: "Mutation",
      description: "Random changes that maintain diversity and prevent stagnation",
      color: "text-amber-400"
    }
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-12">
          GA Essentials: Core Components
        </h2>

        {/* Grid of components */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          {components.map((component, index) => (
            <div
              key={component.id}
              className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.15}s`
              }}
            >
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-4">
                {React.cloneElement(component.icon, {
                  className: `w-6 h-6 ${component.color}`
                })}
                <h3 className={`text-2xl font-semibold ${component.color}`}>
                  {component.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                {component.description}
              </p>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </SlideWrapper>
  );
}