'use client';

import React from 'react';
import { Lock, Box, ArrowRight } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function AttackMethodsSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Understanding LLM Attack Methods
        </h2>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-2 gap-12 flex-1">
          {/* White-box attacks */}
          <div 
            className="bg-slate-800/40 rounded-lg p-8 hover:bg-slate-800/60 transition-all duration-300"
            style={{
              animation: 'slideInLeft 0.6s ease-out'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl font-semibold text-blue-400">
                White-box attacks
              </h3>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              An approach that exploits vulnerabilities by having complete visibility into the system's inner workings, including access to the model's architecture, parameters, and training process. Think of it like having the complete blueprint of a building's security system.
            </p>
          </div>

          {/* Black-box attacks */}
          <div 
            className="bg-slate-800/40 rounded-lg p-8 hover:bg-slate-800/60 transition-all duration-300"
            style={{
              animation: 'slideInRight 0.6s ease-out'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Box className="w-8 h-8 text-green-400" />
              <h3 className="text-3xl font-semibold text-green-400">
                Black-box attacks
              </h3>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              A more practical approach that operates without internal system knowledge, relying solely on the model's inputs and outputs to find vulnerabilities. Similar to testing a system's security by only interacting with its public interfaces.
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <div 
          className="mt-8 text-center px-24"
          style={{
            animation: 'fadeIn 0.8s ease-out'
          }}
        >
          <p className="text-gray-400 text-lg">
            Both methods seek to understand and expose potential vulnerabilities, but through fundamentally different approaches.
          </p>
        </div>

        <style jsx>{`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
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