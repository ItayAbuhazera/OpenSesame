import React from 'react';
import { Lightbulb } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function FutureWorkSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-8 h-8 text-yellow-400" />
          <h2 className="text-4xl font-bold text-white">Future Work</h2>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* Detection Strategies */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Defense Strategies
            </h3>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              <li>
                Leverage <strong>prompt readability</strong> metrics to detect adversarial prompts.
              </li>
              <li>
                Integrate <strong>genetic algorithm recognition techniques</strong> to identify attack patterns.
              </li>
              <li>
                Develop <strong>LLM-based checks</strong> and perplexity-based methods to assess token validity.
              </li>
            </ul>
          </div>

          {/* Broader Evaluation */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Broader Evaluation
            </h3>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              <li>Evaluate on larger models (e.g., GPT-4, PaLM 2) for scalability.</li>
              <li>Assess defenses on multi-turn and context-based adversarial attacks.</li>
            </ul>
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

export default FutureWorkSlide;
