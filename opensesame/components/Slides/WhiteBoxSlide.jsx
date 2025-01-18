import React from 'react';
import { Lock, FileText, AlertTriangle } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function WhiteBoxSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
      {/* Main title */}
        <h2 className="text-4xl font-bold text-white mb-2">
          White-Box Approaches
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          White-Box Attacks on LLMs
        </p>

        {/* Content sections */}
        <div className="space-y-8">
          {/* Full Access Section */}
          <div 
            className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">
                Full Access to Model
              </h3>
            </div>
            <p className="text-gray-300 text-lg ml-9">
              Architecture, gradients, parameters
            </p>
          </div>

          {/* Key Works Section */}
          <div 
            className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'slideIn 0.5s ease-out 0.2s' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">
                Key Works
              </h3>
            </div>
            <div className="space-y-3 ml-9">
              <p className="text-blue-400 text-lg">
                Zou et al. (2023): <span className="text-gray-300">Offensive LLM behavior via gradient-based methods</span>
              </p>
              <p className="text-blue-400 text-lg">
                Shin et al. (2020), Guo et al. (2021): <span className="text-gray-300">Attacks on NLP tasks (sentiment, NLI, etc.)</span>
              </p>
            </div>
          </div>

          {/* Challenges Section */}
          <div 
            className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'slideIn 0.5s ease-out 0.4s' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h3 className="text-2xl font-semibold text-white">
                Challenges
              </h3>
            </div>
            <div className="space-y-3 ml-9">
              <p className="text-gray-300 text-lg">
                Huge GPU/memory cost (billions of parameters)
              </p>
              <p className="text-gray-300 text-lg">
                Discrete tokens → modifying gradient-based algorithms
              </p>
            </div>
          </div>
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