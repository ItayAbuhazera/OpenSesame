'use client';

import React from 'react';
import { Box, Network } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export const EmbeddingFunctionSlide = () => {
  return (
  <SlideWrapper>
    <div className="flex flex-col h-full p-4 bg-slate-900 text-white">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Network className="w-8 h-8 text-purple-400" />
        <h2 className="text-4xl font-bold">Embedding Function</h2>
      </div>

      <div className="flex-1 grid grid-cols-5 gap-4">
        {/* Left Column - Visualization (now spans 3 columns) */}
        <div className="col-span-3">
          <div className="bg-slate-800 bg-opacity-50 rounded-lg p-4 h-full">
            <svg viewBox="0 0 800 700" className="w-full h-full">
              {/* Coordinate System */}
              <line x1="50" y1="350" x2="450" y2="350" stroke="white" strokeWidth="2" />
              <line x1="50" y1="350" x2="50" y2="50" stroke="white" strokeWidth="2" />
              
              {/* Axis Labels */}
              <text x="250" y="390" fill="white" fontSize="14" textAnchor="middle">PC1</text>
              <text x="20" y="200" fill="white" fontSize="14" textAnchor="middle" transform="rotate(-90, 20, 200)">PC2</text>

              {/* Animals Cluster */}
              <circle cx="170" cy="170" r="6" fill="#34D399" />
              <text x="170" y="155" fill="#34D399" fontSize="14" textAnchor="middle">Cat</text>
              
              <circle cx="195" cy="190" r="6" fill="#34D399" />
              <text x="195" y="210" fill="#34D399" fontSize="14" textAnchor="middle">Dog</text>
              
              <circle cx="182" cy="150" r="6" fill="#34D399" />
              <text x="182" y="135" fill="#34D399" fontSize="14" textAnchor="middle">Wolf</text>

              {/* Cluster Label */}
              <rect x="140" y="100" width="90" height="25" rx="12" fill="#1F2937" fillOpacity="0.8"/>
              <text x="185" y="118" fill="#34D399" fontSize="16" textAnchor="middle" fontWeight="bold">Animals</text>

              {/* Fruits Cluster */}
              <circle cx="350" cy="280" r="6" fill="#60A5FA" />
              <text x="350" y="265" fill="#60A5FA" fontSize="14" textAnchor="middle">Apple</text>
              
              <circle cx="380" cy="300" r="6" fill="#60A5FA" />
              <text x="380" y="320" fill="#60A5FA" fontSize="14" textAnchor="middle">Banana</text>

              {/* Cluster Label */}
              <rect x="315" y="230" width="90" height="25" rx="12" fill="#1F2937" fillOpacity="0.8"/>
              <text x="360" y="248" fill="#60A5FA" fontSize="16" textAnchor="middle" fontWeight="bold">Fruits</text>

              {/* Vector Annotation */}
              <rect x="320" y="80" width="120" height="45" rx="6" fill="#1F2937" fillOpacity="0.8"/>
              <text x="380" y="100" fill="white" fontSize="12" textAnchor="middle">[0.34, 2.35, 8.34, ...]</text>
              <text x="380" y="115" fill="gray" fontSize="12" textAnchor="middle">300 dimensions</text>
            </svg>
          </div>
        </div>

        {/* Right Column - Explanation (now spans 2 columns) */}
        <div className="col-span-2 space-y-4">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Semantic Comparison</h3>
            <p className="text-gray-300">
              The embedding function maps text into a high-dimensional vector space. 
              Words with similar meanings or contexts are positioned closer together 
              in this space. As shown in the diagram, similar concepts cluster together.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Embedding Models</h3>
            <div className="space-y-3 bg-slate-800 bg-opacity-50 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-green-400" />
                <p className="text-gray-300">
                  <span className="text-green-400 font-semibold">BGE</span> - 
                  Latest model (bge-large-en) with the most stable results
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-blue-400" />
                <p className="text-gray-300">
                  <span className="text-blue-400 font-semibold">MPNet</span> - 
                  Known for capturing subtle semantic nuances
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-purple-400" />
                <p className="text-gray-300">
                  <span className="text-purple-400 font-semibold">MiniLM</span> - 
                  Compact and efficient model
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 bg-opacity-50 rounded-lg p-4">
            <p className="text-gray-300">
              Each model maps text to a dense 1024-dimensional vector, representing its 
              semantic meaning. This allows us to quantitatively compare the distance 
              between the model's generated response and the desired output.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideWrapper>    
  );
};