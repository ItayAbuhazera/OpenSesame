import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function ConclusionSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle className="w-8 h-8 text-green-400" />
          <h2 className="text-4xl font-bold text-white">Conclusion</h2>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6 text-gray-300 text-lg">
          {/* Main Findings */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">Main Findings</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Genetic Algorithms can effectively automate universal adversarial prompts to jailbreak LLMs.
              </li>
              <li>
                Achieved ~99% success in bypassing refusals using a black-box approach.
              </li>
              <li>
                Demonstrates the feasibility and versatility of adversarial techniques across models.
              </li>
            </ul>
          </div>

          {/* Implications */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">Implications</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Highlights critical vulnerabilities in current LLM defenses.
              </li>
              <li>
                Emphasizes the need for continuous, adaptive defense mechanisms.
              </li>
              <li>
                Raises awareness for developers and organizations to explore robust mitigation strategies.
              </li>
            </ul>
          </div>

          {/* Final Thought */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'fadeIn 0.5s ease-out 0.4s' }}
          >
            <h3 className="text-xl font-semibold text-green-400 mb-3">Final Thought</h3>
            <p>
              This research underscores the importance of proactive security in AI, inspiring the development of stronger defenses to safeguard against adversarial attacks.
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

export default ConclusionSlide;
