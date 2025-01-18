import React from 'react';
import { Filter } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function SelectionSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        <div className="flex items-center gap-3 mb-6">
          <Filter className="w-8 h-8 text-yellow-400" />
          <h2 className="text-4xl font-bold text-white">Selection</h2>
        </div>

        <div className="flex-1 space-y-5">
          <div
            className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <h3 className="text-2xl text-white mb-3">Tournament (k=2)</h3>
            <ul className="list-decimal ml-6 text-gray-300 text-lg space-y-1">
              <li>Pick 2 individuals at random</li>
              <li>Compare fitness (lower loss = better fitness)</li>
              <li>The “fitter” becomes a parent</li>
            </ul>
          </div>

          <div
            className="bg-slate-800/40 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'slideIn 0.5s ease-out 0.2s' }}
          >
            <p className="text-gray-300 text-lg">
              <strong>Why Tournament?</strong> 
              Simple implementation & balanced selective pressure.
            </p>
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

export default SelectionSlide;
