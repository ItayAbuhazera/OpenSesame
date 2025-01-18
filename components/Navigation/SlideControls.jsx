import { ChevronLeft, ChevronRight } from 'lucide-react';

export function SlideControls({ currentSlide, setCurrentSlide, totalSlides }) {
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="p-4 flex items-center justify-between bg-slate-900/50">
      <div className="flex gap-4">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-50"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-50"
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="text-white">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}