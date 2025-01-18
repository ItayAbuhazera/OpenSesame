import React from 'react';
import { Shuffle } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function CrossoverMutationSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        <div className="flex items-center gap-3 mb-6">
          <Shuffle className="w-8 h-8 text-green-400" />
          <h2 className="text-4xl font-bold text-white">Crossover & Mutation</h2>
        </div>

        <div className="flex-1 space-y-5">
          {/* Crossover */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <h3 className="text-xl text-white mb-2">Crossover (One-Point)</h3>
            <p className="text-gray-300 text-lg">
              Split two parent prompts at index ℓ, swap segments → offspring
            </p>
            <div className="bg-slate-700/60 p-3 rounded-md mt-2">
              <pre className="font-mono text-blue-300 text-sm">
{`O1 = [P1[:ℓ] || P2[ℓ:]]
O2 = [P2[:ℓ] || P1[ℓ:]]`}
              </pre>
            </div>
          </div>

          {/* Mutation */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}
          >
            <h3 className="text-xl text-white mb-2">Mutation</h3>
            <p className="text-gray-300 text-lg">
              Randomly replace tokens (at low prob) to maintain diversity.
            </p>
          </div>
        </div>

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