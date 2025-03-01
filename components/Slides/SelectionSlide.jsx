/**
 * SelectionSlide.tsx
 *
 * This slide explains the selection step of our Genetic Algorithm
 * for universal black-box jailbreak attacks, following Lapid et al. (2024).
 * We emphasize tournament selection as in the paper's methodology (Section A.5).
 */
'use client';

import React from 'react';
import { Filter } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function SelectionSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Slide header */}
        <div className="flex items-center gap-3 mb-6">
          <Filter className="w-8 h-8 text-yellow-400" />
          <h2 className="text-4xl font-bold text-white">Selection</h2>
        </div>

        {/* Slide content */}
        <div className="flex-1 space-y-5">
          {/* Tournament selection description */}
          <div
            className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <h3 className="text-2xl text-white mb-3"><strong>Tournament (k=2)</strong></h3>
            <ul className="list-decimal ml-6 text-gray-300 text-lg space-y-2">
              <li>Pick 2 individuals at random from the population</li>
              <li>Compare their fitness (lower loss ⇒ better fitness)</li>
              <li>The “fitter” individual proceeds to reproduce</li>
            </ul>
          </div>

          {/* Why tournament selection? */}
                <div
                className="bg-slate-800/40 rounded-lg p-12 transition-all duration-300 hover:bg-slate-800/60"
                style={{ animation: 'slideIn 0.5s ease-out 0.2s' }}
                >
                <p className="text-gray-300 text-lg">
                  <strong>Why Tournament?</strong> 
                  <br />
                  Simple implementation, balanced selective pressure, and proven efficacy 
                  in evolving adversarial prompts under black-box conditions (Lapid et al., 2024).
                </p>
                </div>
              </div>

              {/* A simple slide-in animation for the content */}
        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(20px);
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

export default SelectionSlide;
