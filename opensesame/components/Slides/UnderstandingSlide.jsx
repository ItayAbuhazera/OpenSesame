import React from 'react';
import { Check } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function UnderstandingSlide() {
  const points = [
    {
      id: 1,
      text: "LLMs are advanced AI systems trained on vast amounts of data to understand and generate human-like text."
    },
    {
      id: 2,
      text: "Adversarial attacks involve manipulating inputs to cause the model to produce unintended or harmful outputs."
    },
    {
      id: 3,
      text: "These attacks can target various applications, including chatbots, recommendation systems, and autonomous agents."
    },
    {
      id: 4,
      text: "Defenses are strategies to make these models more robust and secure against such attacks."
    }
  ];

  return (
    <SlideWrapper>
    <div className="h-full flex flex-col p-8">
      <h2 className="text-4xl font-bold text-white mb-12">Understanding</h2>
      
      <div className="space-y-6">
        {points.map((point, index) => (
          <div 
            key={point.id}
            className="flex items-start gap-4 bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
            style={{
              opacity: 0,
              animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
            }}
          >
            <div className="mt-1">
              <Check 
                className="w-6 h-6 text-green-400"
                style={{
                  opacity: 0,
                  animation: `slideIn 0.3s ease-out ${index * 0.2 + 0.2}s forwards`,
                }}
              />
            </div>
            <p className="text-lg text-gray-200">{point.text}</p>
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

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
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