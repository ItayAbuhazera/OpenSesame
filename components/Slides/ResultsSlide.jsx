/**
 * ResultsSlide.tsx
 *
 * Presents final success rates and key observations from the paper:
 *  - Attack success rate (ASR) of ~95–99% on Vicuna/LLaMA2
 *  - Transferability across models
 *  - Example table from the paper (Table 1) showing no-attack vs. with-attack rates.
 */
'use client';

import React from 'react';
import { BarChart } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function ResultsSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Slide header */}
        <div className="flex items-center gap-3 mb-6">
          <BarChart className="w-8 h-8 text-blue-400" />
          <h2 className="text-4xl font-bold text-white">Key Results</h2>
        </div>

        {/* Slide content */}
        <div className="flex-1 space-y-5">
          {/* Attack Success Rate */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Attack Success Rate (ASR)
            </h3>
            <p className="text-gray-300 text-lg">
              <strong>Attack Success Rate (ASR):</strong> Achieves ≈ 95–99% on Vicuna-7b &amp; LLaMA2-7b-chat.
            </p>
            <p className="text-gray-300 text-lg mt-2">
              <strong>Transferability:</strong> Prompts evolved on one model often work on another 
              (e.g., Vicuna → LLaMA2), underlining the universal nature of the attack (Lapid et al., 2024).
            </p>
          </div>

          {/* Example Table */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}
          >
            <p className="text-gray-300 text-lg mb-2">Example performance:</p>
            <div className="bg-slate-700/60 p-4 rounded-md">
              <pre className="font-mono text-sm text-green-300">
{`Model         | No Attack  | With Attack
-------------- | ---------  | -----------
Vicuna-7b      | 0.6%       | ~95-98%
LLaMA-7b-chat  | 16.3%      | ~98-99%`}
              </pre>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              * “No Attack” = just the user’s original prompt. 
              * “With Attack” = user prompt + evolved universal adversarial suffix.
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

export default ResultsSlide;