import React from 'react';
import { Filter } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function SelectionSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Filter className="w-8 h-8 text-yellow-400" />
          <h2 className="text-4xl font-bold text-white">Tournament Selection</h2>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-5">
          {/* Tournament Process */}
          <div
            className="bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <h3 className="text-2xl font-semibold text-white mb-3">How It Works</h3>
            <ol className="list-decimal ml-6 text-gray-300 text-lg space-y-1">
              <li>Randomly select <strong>k</strong> individuals.</li>
              <li>Compare their fitness.</li>
              <li>The fitter individual becomes a parent.</li>
            </ol>
          </div>

          {/* Why Tournament? */}
          <div
            className="bg-slate-800/40 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'slideIn 0.5s ease-out 0.2s' }}
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Why Use Random Selection?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong>Reason:</strong> Randomness maintains diversity, prevents premature convergence, and balances exploration (testing new ideas) with exploitation (improving existing solutions).
            </p>
          </div>

          {/* Benefits */}
          <div
            className="bg-slate-800/40 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/60"
            style={{ animation: 'slideIn 0.5s ease-out 0.4s' }}
          >
            <p className="text-gray-300 text-lg">
              <strong>Key Advantages:</strong> 
              Simple to implement, effective selective pressure, and adaptable for various population sizes.
            </p>
          </div>
        </div>

        {/* Animation */}
        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
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

export default SelectionSlide;
