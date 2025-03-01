'use-client';

import { useState } from 'react';
import { PresentationLayout } from '../components/Layout/PresentationLayout';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <PresentationLayout 
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}