'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PresentationLayout } from '../components/Layout/PresentationLayout';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSlide = parseInt(searchParams.get('slide') || '0');
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  
  const handleSetSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    router.push(`/?slide=${slideIndex}`, { scroll: false });
  };

  return (
    <PresentationLayout 
      currentSlide={currentSlide} 
      setCurrentSlide={handleSetSlide} 
    />
  );
}