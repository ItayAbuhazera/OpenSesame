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
      <div className="flex flex-col h-full p-6">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          The GA Process: Step by Step
        </h2>

        {/* Steps with vertical line connector */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[1.5rem] top-5 bottom-20 w-0.5 bg-purple-600/50" />
          
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative flex items-start gap-6 transition-all duration-300 hover:translate-x-2"
              >
                {/* Circle with number */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-900/80 border-2 border-purple-500">
                    <span className="text-purple-200 font-bold text-lg">{step.id}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-slate-800/50 rounded-lg p-4 hover:bg-slate-800/70 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-md bg-purple-900/30">
                      {React.cloneElement(step.icon, {
                        className: "w-5 h-5 text-purple-400"
                      })}
                    </div>
                    <h3 className="text-xl font-semibold text-purple-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 pl-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

export default GAProcessSlide;