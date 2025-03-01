'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { SlideWrapper } from '../Layout/SlideWrapper';

export function WhyImportantSlide() {
  const points = [
    {
      id: 1,
      title: "Revolutionizing Fields",
      description: "LLMs are transforming healthcare, education, and more."
    },
    {
      id: 2,
      title: "Vulnerability to Attacks",
      description: "These models are susceptible to adversarial attacks."
    },
    {
      id: 3,
      title: "Severe Consequences",
      description: "Exploiting vulnerabilities can have serious consequences."
    }
  ];

  return (
    <SlideWrapper>
    <div className="grid grid-cols-2 h-full gap-8">
      {/* Left side - Image */}
      <div className="relative h-full w-full">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <img
            src="/laptopwithcode.png"
            alt="Laptop with code"
            className="object-cover w-full h-full brightness-75 hover:brightness-100 transition-all duration-500"
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col p-6">
        <h2 className="text-4xl font-bold text-white mb-12">
          Why is this Important?
        </h2>

        <div className="space-y-8">
          {points.map((point, index) => (
            <div 
              key={point.id}
              className="relative bg-slate-800/40 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300"
              style={{
                opacity: 0,
                animation: `slideIn 0.5s ease-out ${index * 0.2}s forwards`
              }}
            >
              <div 
                className="absolute -left-3 top-1/2 transform -translate-y-1/2"
                style={{
                  opacity: 0,
                  animation: `checkmarkFly 0.4s ease-out ${index * 0.2 + 0.3}s forwards`
                }}
              >
                <div className="bg-green-500 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes checkmarkFly {
          0% {
            opacity: 0;
            transform: translate(-20px, -50%) scale(0);
          }
          70% {
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% {
            opacity: 1;
            transform: translate(0, -50%) scale(1);
          }
        }
      `}</style>
    </div>
    </SlideWrapper>
  );
}