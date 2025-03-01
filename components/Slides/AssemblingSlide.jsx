/**
 * AssemblingSlide.tsx
 *
 * Summarizes the overall GA pipeline (Algorithm 4 in Lapid et al., 2024).
 * Emphasizes black-box queries, random-subset sampling for fitness,
 * and repeated iterations for universal jailbreak success.
 */
'use client';

import React from 'react';
import { Layers } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function AssemblingSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Slide header */}
        <div className="flex items-center gap-3 mb-6">
          <Layers className="w-8 h-8 text-pink-400" />
          <h2 className="text-4xl font-bold text-white">Assembling the Pieces</h2>
        </div>

        {/* Slide content */}
        <div className="flex-1 space-y-5 text-gray-300 text-2xl">
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <ol className="list-decimal ml-10 space-y-5">
              <li>Initialize population <em>P</em> with random token sequences (length <em>m</em>)</li>
              <li>For each individual, query the black-box LLM on a <strong>random subset</strong> of training prompts</li>
              <li>Measure <strong>fitness</strong> via cosine similarity to a target phrase in embedding space</li>
              <li>Selection (tournament) → Crossover (one-point) → Mutation (token replacement) → Elitism</li>
              <li>Repeat for <em>g</em> generations to evolve a universal adversarial suffix</li>
            </ol>
            <p className="mt-4 text-md text-gray-400">
              We used <strong>MPNet</strong> (and other embedders) to approximate fitness in a purely black-box manner 
              (no gradients, no model internals).
            </p>
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

        {/* Simple fade-in animation */}
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