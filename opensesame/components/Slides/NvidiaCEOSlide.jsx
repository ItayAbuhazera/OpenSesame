import React from 'react';
import { Quote } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function NvidiaCEOSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col p-8">
        {/* Top section with title */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white">
            Future of AI Technology
          </h2>
        </div>

        {/* Main content area */}
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Left side - Image */}
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            <img
              src="/nvidia-ceo.png"
              alt="NVIDIA CEO discussing AI future"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Quote */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="relative bg-slate-800/40 rounded-lg p-8 hover:bg-slate-800/60 transition-all duration-300">
              <Quote className="absolute -left-3 -top-3 w-8 h-8 text-blue-400" />
              <blockquote className="text-2xl text-gray-200 leading-relaxed italic">
                "Accelerated computing and AI have hit the tipping point. Data centers are becoming AI factories. The this is going to be one of the largest industrial transformations of all time."
              </blockquote>
              <footer className="mt-4 text-lg text-blue-400">
                - NVIDIA CEO
              </footer>
            </div>
          </div>
        </div>

        {/* Optional bottom section for additional context */}
        <div className="mt-8">
          <p className="text-gray-400 text-lg">
            The vision of AI-driven transformation in computing and industry
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}