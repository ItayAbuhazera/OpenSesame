'use client';

import React from 'react';
import Image from 'next/image';
import { SlideWrapper } from '../Layout/SlideWrapper';


export function TitleSlide() {
  return (
    <SlideWrapper>
    <div className="grid grid-cols-2 h-full gap-8">
      {/* Left side - Image */}
      <div className="relative h-full w-full">
        <div className="absolute inset-0 rounded-lg">
          <img
            src="/cyberpunkcity.png"
            alt="Futuristic cityscape"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col justify-center space-y-20">
        {/* Course Info */}
        <div className="text-gray-400">
          <p className="text-xl mb-1">Deep Learning</p>
          <p className="text-xl">Dr. Omri Azencot</p>
        </div>

        {/* Main Title */}
        <div>
          <h1 className="text-6xl font-bold text-white mb-4">
            Adversarial Attacks in LLMs
          </h1>
          <h2 className="text-2xl text-blue-400 leading-relaxed">
            OPEN SESAME! UNIVERSAL BLACK-BOX JAILBREAKING OF LARGE LANGUAGE MODELS
          </h2>
        </div>

        {/* Presenters */}
        <div className="mt-auto">
          <p className="text-xl text-gray-400 mb-3">Presented by:</p>
          <div className="space-y-2">
            <p className="text-2xl text-white">Roee Ziv</p>
            <p className="text-2xl text-white">Itay Abuhazera</p>
          </div>
        </div>
      </div>
    </div>
    </SlideWrapper>
  );
}