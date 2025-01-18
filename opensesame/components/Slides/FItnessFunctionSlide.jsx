import React from 'react';
import { Calculator, Database, Users } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function FitnessFunctionSlide() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full p-8">
        {/* Title with icon */}
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold text-white">
            Fitness Function
          </h2>
        </div>

        <div className="flex-1 space-y-8">
          {/* Objective Section */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">
              Objective
            </h3>
            <p className="text-gray-300 mb-2">
              Align generated outputs to the target text:
            </p>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <pre className="font-mono text-green-400">
                "Sure, here is a..."
              </pre>
            </div>
          </div>

          {/* Loss Definition Section */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">
              Loss Definition
            </h3>
            
            {/* White-Box Approach */}
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-blue-400">
                White-Box Approach:
              </h4>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <pre className="font-mono text-blue-400">
                  ℒ_white-box = -log LLM(y_target | x_user || x_adv)
                </pre>
              </div>
            </div>

            {/* Black-Box Approach */}
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-green-400">
                Black-Box Approach:
              </h4>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <pre className="font-mono text-green-400">
                  ℒ_black-box = -ℒ_cos(f_embed(LLM(x_user || x_adv)), f_embed(y_target))
                </pre>
              </div>
            </div>
          </div>

          {/* Bottom Section - Two Columns */}
          <div className="grid grid-cols-2 gap-8">
            {/* Embedding Models */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Embedding Models
                </h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• BGE (BAAI/bge-large-en-v1.5)</li>
                <li>• all-MPNet-base-v2</li>
                <li>• all-MiniLM-L6-v2</li>
              </ul>
            </div>

            {/* Sampling */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Sampling
                </h3>
              </div>
              <p className="text-gray-300">
                Random batch evaluation (c=50)
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

export default FitnessFunctionSlide;