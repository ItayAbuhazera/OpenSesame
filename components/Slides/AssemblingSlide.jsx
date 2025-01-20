import React from 'react';
import { Layers } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function AssemblingSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Layers className="w-8 h-8 text-pink-400" />
          <h2 className="text-4xl font-bold text-white">Assembling the Pieces</h2>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6 text-gray-300 text-lg">
          {/* Process Overview */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <h3 className="text-2xl font-semibold text-white mb-3">Step-by-Step Process</h3>
            <ol className="list-decimal ml-6 space-y-2">
              <li>
                <strong>Initialize Population:</strong> Generate random token sequences for the initial population <em>P</em>.
              </li>
              <li>
                <strong>Evaluate Fitness:</strong> Assess each individual based on performance on a training subset.
              </li>
              <li>
                <strong>Evolution Process:</strong> Apply <strong>Selection</strong> (choose parents), <strong>Crossover</strong> (combine traits), <strong>Mutation</strong> (introduce randomness), and <strong>Elitism</strong> (preserve the best) to create the next generation.
              </li>
              <li>
                <strong>Repeat for Generations:</strong> Iterate for <em>g</em> generations until the best adversarial prompt is found.
              </li>
            </ol>
          </div>

          {/* Conclusion */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}
          >
            <h3 className="text-xl font-semibold text-pink-400 mb-2">Goal:</h3>
            <p>
            In this way, we utilize a genetic algorithm to identify the most effective offensive suffix with the best results.
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

export default AssemblingSlide;
