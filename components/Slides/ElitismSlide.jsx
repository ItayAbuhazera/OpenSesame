/**
 * ElitismSlide.tsx
 *
 * Highlights how we preserve top individuals each generation,
 * preventing accidental loss of the best adversarial suffixes.
 * Follows the approach in Section A.7 of Lapid et al. (2024).
 */

import React from 'react';
import { Crown } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function ElitismSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Slide header */}
        <div className="flex items-center gap-3 mb-6">
          <Crown className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold text-white">Elitism</h2>
        </div>

        {/* Main content */}
        <div className="flex-1 space-y-6">
          {/* Explanation */}
          <div
            className="bg-slate-800/40 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <p className="text-gray-300 text-2xl mb-2">
              Preserve the top <em>e</em> individuals (lowest-loss prompts) across generations.
            </p>
            <p className="text-gray-300 text-2xl">
              This ensures we do not lose high-performing universal jailbreak prompts 
              due to random recombination or mutation.
            </p>
          </div>

          {/* Purpose */}
          <div
            className="bg-slate-800/40 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}
          >
            <p className="text-yellow-300 text-lg font-mono">
              e = n / 5
            </p>
            <p className="text-gray-300 text-2xl mt-2">
              Stabilizes population quality &amp; speeds up convergence (Lapid et al., 2024).
            </p>
          </div>
        </div>

        {/* Simple slide-in animation */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
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

export default ElitismSlide;