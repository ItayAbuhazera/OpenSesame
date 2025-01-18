import React from 'react';
import { MessageSquare } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function DiscussionSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-8 h-8 text-orange-400" />
          <h2 className="text-4xl font-bold text-white">Discussion</h2>
        </div>

        <div className="flex-1 space-y-5 text-gray-300 text-lg">
          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <p className="mb-2">
              <strong>Implications:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Automation lowers the barrier to jailbreaking significantly</li>
              <li>Black-box approach is a real threat for closed-source APIs</li>
            </ul>
          </div>

          <div
            className="bg-slate-800/40 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}
          >
            <p className="mb-2">
              <strong>Limitations:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Nonsensical appended tokens can be detected (perplexity)</li>
              <li>Primarily tested on 7B-parameter LLMs</li>
            </ul>
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

export default DiscussionSlide;