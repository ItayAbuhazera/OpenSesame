import { SlideControls } from '../Navigation/SlideControls';
import { TitleSlide } from '../Slides/TitleSlide';
import { UnderstandingSlide } from '../Slides/UnderstandingSlide';
import { WhyImportantSlide } from '../Slides/WhyImportantSlide';
import { NvidiaCEOSlide } from '../Slides/NvidiaCEOSlide';
import { AttackMethodsSlide } from '../Slides/AttackMethodsSlide';
import { WhiteBoxSlide } from '../Slides/WhiteBoxSlide';
import { BlackBoxSlide } from '../Slides/BlackBoxSlide';
import { ComparisonSlide } from '../Slides/ComparisonSlide';
import { ClassificationQuestionSlide } from '../Slides/ClassificationQuestionSlide';
import { GAOverviewSlide } from '../Slides/GAOverviewSlide';
import { GAComponentsSlide } from '../Slides/GAcomponentSlide';
import { GAProcessSlide } from '../Slides/GAProcessSlide';
import { PopulationEncodingSlide } from '../Slides/PopulationEncodingSlide';
import { FitnessFunctionSlide } from '../Slides/FitnessFunctionSlide';
import { ResultsComparisonSlide } from '../Slides/ResultsComparisonSlide';
import { Card } from '@/components/ui/card';


export function PresentationLayout({ currentSlide, setCurrentSlide }) {
  const slides = [
    { component: TitleSlide },
    { component: UnderstandingSlide },
    { component: WhyImportantSlide },
    { component: NvidiaCEOSlide },
    { component: AttackMethodsSlide },
    { component: WhiteBoxSlide },
    { component: BlackBoxSlide },
    { component: ComparisonSlide },
    { component: ClassificationQuestionSlide },
    { component: GAOverviewSlide },
    { component: GAComponentsSlide },
    { component: GAProcessSlide },
    { component: PopulationEncodingSlide },
    { component: FitnessFunctionSlide },
    { component: ResultsComparisonSlide },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      {/* Current Slide */}
      <div className="flex-grow">
        {slides[currentSlide].component()}
      </div>
      
      {/* Navigation */}
      <div className="h-20 border-t border-slate-800 bg-slate-900/50">
        <SlideControls 
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          totalSlides={slides.length}
        />
      </div>
    </div>
  );
}