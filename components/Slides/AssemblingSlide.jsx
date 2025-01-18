import React from 'react';
import { Layers } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function AssemblingSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="w-8 h-8 text-pink-400" />
          <h2 className="text-4xl font-bold text-white">Assembling the Pieces</h2>
        </div>

        <div className="flex-1 space-y-5 text-gray-300 text-lg">
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <ol className="list-decimal ml-6 space-y-1">
              <li>Initialize population <em>P</em> with random token sequences</li>
              <li>For each individual, evaluate <strong>fitness</strong> on a training subset</li>
              <li>Selection → Crossover → Mutation → Elitism → Next Generation</li>
              <li>Repeat for <em>g</em> generations → best adversarial prompt found</li>
            </ol>
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

export default AssemblingSlide;