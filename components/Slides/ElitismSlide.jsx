import React from 'react';
import { Crown } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function ElitismSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        <div className="flex items-center gap-3 mb-6">
          <Crown className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold text-white">Elitism</h2>
        </div>
        
        <div className="flex-1 space-y-6">
          <div
            className="bg-slate-800/40 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <p className="text-gray-300 text-lg mb-2">
              Keep top <em>e</em> individuals from each generation unchanged.
            </p>
            <p className="text-gray-300 text-lg">
              Prevent losing best solutions to random crossover/mutation.
            </p>
          </div>

          <div
            className="bg-slate-800/40 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'slideIn 0.5s ease-out 0.2s' }}
          >
            <p className="text-yellow-300 text-sm font-mono">
              e = n / 5
            </p>
            <p className="text-gray-300 text-lg mt-2">
              Stabilizes & speeds up convergence.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
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