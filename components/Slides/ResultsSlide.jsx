import React from 'react';
import { BarChart } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function ResultsSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        <div className="flex items-center gap-3 mb-6">
          <BarChart className="w-8 h-8 text-blue-400" />
          <h2 className="text-4xl font-bold text-white">Key Results</h2>
        </div>

        <div className="flex-1 space-y-5">
          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <p className="text-gray-300 text-lg">
              <strong>Attack Success Rate (ASR)</strong> ≈ 95–99% on Vicuna-7b &amp; LLaMA2-7b-chat
            </p>
            <p className="text-gray-300 text-lg mt-2">
              <strong>Transferability</strong>: prompts evolved on one model often work on another.
            </p>
          </div>

          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'slideIn 0.5s ease-out 0.2s' }}
          >
            <p className="text-gray-300 text-lg">
              Example table:
            </p>
            <div className="bg-slate-700/60 p-4 rounded-md mt-2">
              <pre className="font-mono text-sm text-green-300">
{`Model          | No Attack  | With Attack
--------------- | ---------- | -----------
Vicuna-7b       | 0.6%       | ~95-98%
LLaMA-7b-chat   | 16.3%      | ~98-99%`}
              </pre>
            </div>
          </div>
        </div>

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

export default ResultsSlide;