// components/Layout/SlideWrapper.jsx
'use client';

import React from 'react';

export function SlideWrapper({ children }) {
  return (
    <div className="h-[calc(100vh-64px)] w-full bg-[#0f172a] text-white p-12 flex flex-col relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full h-full">
        {children}
      </div>
    </div>
  );
}