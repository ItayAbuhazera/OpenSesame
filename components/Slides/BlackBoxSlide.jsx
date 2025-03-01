'use client';

import React from 'react';
import { Lock, FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function BlackBoxSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Main title */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white">
            Black-Box Approaches
          </h2>
          <p className="text-xl text-gray-400 mt-2">
            Black-Box Attacks on LLMs
          </p>
        </div>

        {/* Content sections */}
        <div className="flex-1 space-y-5">
          {/* No Access Section */}
          <div 
            className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-semibold text-white">
                No Access to Model Internals
              </h3>
            </div>
            <p className="text-gray-300 text-lg ml-9">
              Only rely on model outputs
            </p>
          </div>

          {/* Key Works Section */}
          <div 
            className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'slideIn 0.5s ease-out 0.2s' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-semibold text-white">
                Key Works
              </h3>
            </div>
            <p className="ml-9">
              <span className="text-green-400 text-lg">Maus et al. (2023):</span>
              <span className="text-gray-300 text-lg"> Square Attack + Bayesian optimization for adversarial prompts</span>
            </p>
          </div>

          {/* Advantages Section */}
          <div 
            className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'slideIn 0.5s ease-out 0.4s' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-semibold text-white">
                Advantages
              </h3>
            </div>
            <div className="space-y-1 ml-9">
              <p className="text-gray-300 text-lg">
                More realistic threat model (public APIs)
              </p>
              <p className="text-gray-300 text-lg">
                Typically lower resource demands than white-box
              </p>
            </div>
          </div>

          {/* Limitations Section */}
          <div 
            className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'slideIn 0.5s ease-out 0.6s' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h3 className="text-2xl font-semibold text-white">
                Limitations
              </h3>
            </div>
            <p className="text-gray-300 text-lg ml-9">
              Fewer direct optimization signals → need clever searching/heuristics
            </p>
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