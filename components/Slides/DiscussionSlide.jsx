import React from 'react';
import { MessageSquare } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function DiscussionSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-8 h-8 text-orange-400" />
          <h2 className="text-4xl font-bold text-white">Discussion</h2>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6 text-gray-300 text-lg">
          {/* Implications */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Implications
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Versatility:</strong> Prompts crafted for one model can effectively transfer to others.
              </li>
              <li>
                <strong>Effectiveness:</strong> Black-box jailbreaking demonstrated exceptional efficacy in bypassing defenses.
              </li>
              <li>
                <strong>Automation Impact:</strong> Reduces barriers for jailbreaking, posing risks for closed-source APIs.
              </li>
              <li>
                Highlights the need for continuous evaluation and mitigation strategies to secure LLMs.
              </li>
            </ul>
          </div>

          {/* Limitations */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Limitations
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Detectability:</strong> Added “garbage” tokens might be flagged by other LLMs or perplexity-based methods.
              </li>
              <li>
                <strong>Specific Conditions:</strong> Experiments focused on 7B-parameter models; robustness across architectures may vary.
              </li>
              <li>
                <strong>Perceptible Perturbations:</strong> Attack prompts include visible alterations, limiting stealth.
              </li>
            </ul>
          </div>

          {/* Future Directions */}
          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out 0.4s' }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Future Directions
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                Study interactions between prompt construction and genetic algorithm (GA) parameters.
              </li>
              <li>
                Investigate generalizability to other AI systems beyond language models.
              </li>
              <li>
                Develop methods to detect and mitigate adversarial prompts more effectively.
              </li>
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

export default DiscussionSlide;