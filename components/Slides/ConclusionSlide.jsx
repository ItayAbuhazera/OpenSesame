import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function ConclusionSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle className="w-8 h-8 text-green-400" />
          <h2 className="text-4xl font-bold text-white">Conclusion</h2>
        </div>

        <div className="flex-1 space-y-5 text-gray-300 text-lg">
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <p className="mb-2">
              <strong>Main Takeaway:</strong> 
              A Genetic Algorithm can automate universal adversarial prompts to jailbreak LLMs.
            </p>
            <p className="mb-2">
              ~99% success in bypassing refusals; black-box approach is feasible.
            </p>
            <p className="mb-2">
              Emphasizes need for continuous, adaptive defense strategies.
            </p>
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

export default ConclusionSlide;