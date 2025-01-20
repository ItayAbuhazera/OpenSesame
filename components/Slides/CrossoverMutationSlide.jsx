import React from 'react';
import { Shuffle } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function CrossoverMutationSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Shuffle className="w-8 h-8 text-green-400" />
          <h2 className="text-4xl font-bold text-white">Crossover & Mutation</h2>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* Crossover */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              Crossover: Combining Solutions
            </h3>
            <p className="text-gray-300 text-lg mb-3">
              <strong>How:</strong> Split two parents at a random index <strong>ℓ</strong>, exchange segments, and generate offspring.
            </p>
            <div className="bg-slate-700/60 p-4 rounded-md">
              <pre className="font-mono text-blue-300 text-sm">
{`Offspring 1: O1 = [P1[:ℓ] || P2[ℓ:]]
Offspring 2: O2 = [P2[:ℓ] || P1[ℓ:]]`}
              </pre>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              <strong>Purpose:</strong> Combines traits from two parents to explore new solutions.
            </p>
          </div>

          {/* Mutation */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              Mutation: Adding Randomness
            </h3>
            <p className="text-gray-300 text-lg">
              <strong>How:</strong> Randomly change small parts of a solution with a low probability.
            </p>
            <p className="text-gray-300 text-sm mt-2">
              <strong>Purpose:</strong> Maintains diversity and prevents stagnation by introducing novel traits.
            </p>
          </div>
        </div>

        {/* Animation */}
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

export default CrossoverMutationSlide;
