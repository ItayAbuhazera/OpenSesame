import React from 'react';

export function Card({ className, ...props }) {
  return (
    <div
      className={`bg-slate-900 text-slate-50 shadow-lg ${className}`}
      {...props}
    />
  );
}