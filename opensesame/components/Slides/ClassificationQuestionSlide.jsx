import React from 'react';
import { HelpCircle, Box, Cpu } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function ClassificationQuestionSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-12">
        {/* Title with icon */}
        <div className="flex items-center gap-4 mb-16">
          <HelpCircle className="w-12 h-12 text-purple-400" />
          <h2 className="text-4xl font-bold text-white">
            Is This a Black-Box or White-Box Approach?
          </h2>
        </div>

        {/* Context statements */}
        <div className="space-y-8 mb-16">
          {/* First statement */}
          <div 
            className="flex items-start gap-4 bg-slate-800/40 rounded-lg p-6"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <Box className="w-6 h-6 text-blue-400 mt-1" />
            <p className="text-xl text-gray-300 leading-relaxed">
              We've explored both White-Box and Black-Box approaches, understanding their key differences and characteristics.
            </p>
          </div>

          {/* Second statement */}
          <div 
            className="flex items-start gap-4 bg-slate-800/40 rounded-lg p-6"
            style={{ animation: 'slideIn 0.5s ease-out 0.2s' }}
          >
            <Cpu className="w-6 h-6 text-green-400 mt-1" />
            <p className="text-xl text-gray-300 leading-relaxed">
              Our paper introduces an innovative Genetic Algorithm (GA)-based attack strategy. Think about what we've learned about each approach.
            </p>
          </div>
        </div>

        {/* Question box */}
        <div 
          className="bg-purple-900/30 rounded-xl p-8 border border-purple-500/30"
          style={{ animation: 'fadeIn 0.8s ease-out 0.4s' }}
        >
          <p className="text-2xl text-purple-200 text-center leading-relaxed">
            Given what you know about both approaches, which category does our GA-based attack belong to?
          </p>
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