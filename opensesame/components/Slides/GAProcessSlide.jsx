import React from 'react';
import { Settings, Target, Users, GitBranch, RotateCcw } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function GAProcessSlide() {
  const steps = [
    {
      id: 1,
      icon: <Settings className="w-5 h-5" />,
      title: "Initialize",
      description: "Generate random starting population"
    },
    {
      id: 2,
      icon: <Target className="w-5 h-5" />,
      title: "Evaluate",
      description: "Measure each solution's performance"
    },
    {
      id: 3,
      icon: <Users className="w-5 h-5" />,
      title: "Select",
      description: "Choose the best performers"
    },
    {
      id: 4,
      icon: <GitBranch className="w-5 h-5" />,
      title: "Evolve",
      description: "Create new solutions through crossover and mutation"
    },
    {
      id: 5,
      icon: <RotateCcw className="w-5 h-5" />,
      title: "Repeat",
      description: "Continue until stopping criteria met"
    }
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          The GA Process: Step by Step
        </h2>

        <div className="flex flex-1 gap-8">
          {/* Left side: Steps */}
          <div className="w-1/2 relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-2 bottom-4 w-0.5 bg-purple-600" />

            {/* Steps */}
            <div className="space-y-5">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex items-center gap-4"
                  style={{
                    animation: `slideIn 0.5s ease-out ${index * 0.15}s`
                  }}
                >
                  {/* Number circle */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center">
                      <span className="text-purple-300 font-medium text-lg">{step.id}</span>
                    </div>
                  </div>

                  {/* Icon and content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      {React.cloneElement(step.icon, {
                        className: "text-purple-400"
                      })}
                      <h3 className="text-xl font-semibold text-purple-400">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm pl-8">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Flow Diagram */}
          <div className="w-1/2 flex items-start justify-center">
            <svg viewBox="0 0 400 500" className="w-full h-[450px]">
              {/* Start and End circles */}
              <circle cx="200" cy="30" r="20" fill="#a855f7" />
              <circle cx="200" cy="470" r="20" fill="#a855f7" />
              <text x="200" y="35" textAnchor="middle" fill="white" fontSize="12">Start</text>
              <text x="200" y="475" textAnchor="middle" fill="white" fontSize="12">End</text>

              {/* Process boxes */}
              <rect x="130" y="70" width="140" height="35" rx="8" fill="#3b82f6" />
              <rect x="130" y="140" width="140" height="35" rx="8" fill="#3b82f6" />
              <rect x="130" y="280" width="140" height="35" rx="8" fill="#3b82f6" />
              <rect x="130" y="350" width="140" height="35" rx="8" fill="#3b82f6" />

              {/* Decision diamonds */}
              <path d="M 130,210 L 200,245 L 270,210 L 200,175 Z" fill="#22c55e" />
              <path d="M 130,400 L 200,435 L 270,400 L 200,365 Z" fill="#22c55e" />

              {/* Vertical arrows */}
              <path d="M 200,50 L 200,70" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <path d="M 200,105 L 200,140" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <path d="M 200,175 L 200,210" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <path d="M 200,245 L 200,280" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <path d="M 200,315 L 200,350" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <path d="M 200,435 L 200,450" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Return arrow with labels */}
              <path d="M 270,400 C 320,400 320,120 200,120" 
                stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" fill="none" />
              <text x="315" y="270" textAnchor="middle" fill="white" fontSize="12">Continue</text>
              <text x="200" y="460" textAnchor="middle" fill="white" fontSize="12">Done</text>

              {/* Text labels */}
              <text x="200" y="92" textAnchor="middle" fill="white" fontSize="12">Initialize Population</text>
              <text x="200" y="162" textAnchor="middle" fill="white" fontSize="12">Evaluate Fitness</text>
              <text x="200" y="210" textAnchor="middle" fill="white" fontSize="12">Select Best Solutions</text>
              <text x="200" y="302" textAnchor="middle" fill="white" fontSize="12">Crossover</text>
              <text x="200" y="372" textAnchor="middle" fill="white" fontSize="12">Mutation</text>
              <text x="200" y="420" textAnchor="middle" fill="white" fontSize="12">Check Criteria</text>

              {/* Arrow marker definition */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
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

export default GAProcessSlide;