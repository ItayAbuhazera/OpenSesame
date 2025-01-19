import { useState } from 'react';
import { PresentationLayout } from '../components/Layout/PresentationLayout';
import Head from 'next/head';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/OpenSesame/styles/globals.css" />
      </Head>
      <div>
        <PresentationLayout 
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      </div>
    </>
  );
}