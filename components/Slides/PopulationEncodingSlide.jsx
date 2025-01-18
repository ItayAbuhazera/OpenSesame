import React from 'react';
import { Code, Binary } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function PopulationEncodingSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Title with icon */}
        <div className="flex items-center gap-3 mb-8">
          <Binary className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold text-white">
            Population Encoding & Initialization
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          {/* Representation Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Representation
            </h3>
            <p className="text-gray-300 text-lg mb-2">
              Each individual = a vector of tokens
            </p>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <pre className="font-mono text-blue-400">
                P = {'{'}(x₁ ... xₘ) | xᵢ ∈ T{'}'}ₙ
              </pre>
            </div>
          </div>

          {/* Population Size & Prompt Length Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Population Size & Prompt Length
            </h3>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <pre className="font-mono text-green-400">
                n ∈ {'{'}10, 20, 30{'}'}, m ∈ {'{'}20, 40, 60{'}'}
              </pre>
            </div>
          </div>

          {/* Random Initialization Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Random Initialization
            </h3>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <pre className="font-mono">
                <span className="text-yellow-400">P ← []</span>
                {'\n'}<span className="text-purple-400">for</span> <span className="text-blue-400">i</span> <span className="text-white">from</span> <span className="text-blue-400">1</span> <span className="text-white">to</span> <span className="text-blue-400">n</span><span className="text-white">:</span>
                {'\n  '}<span className="text-yellow-400">I ← random.choices(T, m)</span>
                {'\n  '}<span className="text-yellow-400">P ← P + I</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

export default PopulationEncodingSlide;