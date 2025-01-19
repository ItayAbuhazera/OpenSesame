// components/Mermaid.jsx
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  // These colors will match your dark theme
  themeVariables: {
    darkMode: true,
    background: '#1e293b',
    primaryColor: '#3b82f6',
    secondaryColor: '#22c55e',
    tertiaryColor: '#7e22ce',
    primaryTextColor: '#fff',
  }
});

const Mermaid = ({ chart }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div className="mermaid" ref={elementRef}>
      {chart}
    </div>
  );
};

export default Mermaid;