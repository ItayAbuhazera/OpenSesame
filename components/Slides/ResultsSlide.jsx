import React from 'react';
import { BarChart } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function ResultsSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <BarChart className="w-8 h-8 text-blue-400" />
          <h2 className="text-4xl font-bold text-white">Key Results</h2>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* Attack Success Rate */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Attack Success Rate (ASR)
            </h3>
            <p className="text-gray-300 text-lg">
              Achieved <strong>95–99%</strong> success on models like Vicuna-7b and LLaMA2-7b-chat.
            </p>
            <p className="text-gray-300 text-sm mt-2">
              <strong>Why it matters:</strong> High ASR demonstrates the effectiveness of evolved prompts in breaching model defenses.
            </p>
          </div>

          {/* Transferability */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Transferability
            </h3>
            <p className="text-gray-300 text-lg">
              Prompts evolved on one model often work on another, indicating robustness across architectures.
            </p>
          </div>

          {/* Example Table */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out 0.4s' }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Performance Comparison
            </h3>
            <div className="bg-slate-700/60 p-4 rounded-md">
              <pre className="font-mono text-sm text-green-300">
{`Model          | No Attack  | With Attack
--------------- | ---------- | -----------
Vicuna-7b       | 0.6%       | ~95-98%
LLaMA-7b-chat   | 16.3%      | ~98-99%`}
              </pre>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              <strong>Insight:</strong> With attacks, the performance significantly increases, validating the efficiency of evolved prompts.
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

export default ResultsSlide;
