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
<<<<<<< HEAD
        {/* Header */}
=======
        {/* Slide header */}
>>>>>>> bb971e498696503840b9b4a637321016e9da72a0
        <div className="flex items-center gap-3 mb-6">
          <Crown className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold text-white">Elitism</h2>
        </div>
<<<<<<< HEAD

        {/* Content */}
=======
        
        {/* Main content */}
>>>>>>> bb971e498696503840b9b4a637321016e9da72a0
        <div className="flex-1 space-y-6">
          {/* Explanation */}
          <div
            className="bg-slate-800/40 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
<<<<<<< HEAD
            <h3 className="text-2xl font-semibold text-white mb-3">
              What is Elitism?
            </h3>
            <p className="text-gray-300 text-lg">
              Elitism ensures that the top <strong>e</strong> individuals (best solutions) from each generation are carried forward unchanged.
=======
            <p className="text-gray-300 text-2xl mb-2">
              Preserve the top <em>e</em> individuals (lowest-loss prompts) across generations.
            </p>
            <p className="text-gray-300 text-2xl">
              This ensures we do not lose high-performing universal jailbreak prompts 
              due to random recombination or mutation.
>>>>>>> bb971e498696503840b9b4a637321016e9da72a0
            </p>
          </div>

          {/* Purpose */}
          <div
            className="bg-slate-800/40 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}
          >
<<<<<<< HEAD
            <h3 className="text-2xl font-semibold text-white mb-3">
              Why Use Elitism?
            </h3>
            <ul className="list-disc ml-6 text-gray-300 text-lg space-y-2">
              <li>Prevents losing the best solutions during random crossover or mutation.</li>
              <li>Stabilizes the population and accelerates convergence.</li>
              <li>Improves the overall performance of the algorithm.</li>
            </ul>
          </div>

          {/* Key Formula */}
          <div
            className="bg-slate-800/40 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out 0.4s' }}
          >
            <h3 className="text-xl font-mono text-yellow-300 mb-2">
              e = n / 5
            </h3>
            <p className="text-gray-300 text-lg">
              Where <strong>n</strong> is the population size, and <strong>e</strong> is the number of elite individuals preserved.
=======
            <p className="text-yellow-300 text-lg font-mono">
              e = n / 5
            </p>
            <p className="text-gray-300 text-2xl mt-2">
              Stabilizes population quality &amp; speeds up convergence (Lapid et al., 2024).
>>>>>>> bb971e498696503840b9b4a637321016e9da72a0
            </p>
          </div>
        </div>

<<<<<<< HEAD
        {/* Animation */}
=======
        {/* Simple slide-in animation */}
>>>>>>> bb971e498696503840b9b4a637321016e9da72a0
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

export default ElitismSlide;
