import React from 'react';
import { Lightbulb } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function FutureWorkSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-8 h-8 text-yellow-400" />
          <h2 className="text-4xl font-bold text-white">Future Work</h2>
        </div>

        <div className="flex-1 space-y-5">
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              <li>Develop detection methods (e.g., perplexity-based or LLM-based checks)</li>
              <li>Evaluate on larger models (GPT-4, PaLM 2)</li>
              <li>Explore multi-turn or context-based adversarial strategies</li>
              <li>Refine target outputs for nuanced definitions of “harmful”</li>
            </ul>
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

export default FutureWorkSlide;