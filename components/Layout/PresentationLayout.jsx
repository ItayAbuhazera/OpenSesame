'use-client';

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
import { EmbeddingFunctionSlide } from '../Slides/EmbeddingFunctionSlide';

// --------------------------------------
// New slides you have/will create:
import { SelectionSlide } from '../Slides/SelectionSlide';
import { CrossoverMutationSlide } from '../Slides/CrossoverMutationSlide';
import { ElitismSlide } from '../Slides/ElitismSlide';
import { AssemblingSlide } from '../Slides/AssemblingSlide';
import { ResultsSlide } from '../Slides/ResultsSlide';
import { ResultsComparisonSlide } from '../Slides/ResultsComparisonSlide';
import { DiscussionSlide } from '../Slides/DiscussionSlide';
import { FutureWorkSlide } from '../Slides/FutureWorkSlide';
import { ConclusionSlide } from '../Slides/ConclusionSlide';
import { ExperimentResults1, ExperimentResults2 } from '../Slides/ResultsSlides';


export function PresentationLayout({ currentSlide, setCurrentSlide }) {
  const slides = [
    // Existing slides
    { component: TitleSlide },
    { component: UnderstandingSlide },
    { component: WhyImportantSlide },
    { component: NvidiaCEOSlide },
    { component: AttackMethodsSlide },
    { component: WhiteBoxSlide },
    { component: BlackBoxSlide },
    { component: ComparisonSlide },
    { component: GAOverviewSlide },
    { component: GAComponentsSlide },
    { component: GAProcessSlide },
    { component: ClassificationQuestionSlide },
    { component: PopulationEncodingSlide },
    { component: FitnessFunctionSlide },
    { component: EmbeddingFunctionSlide },

    // --------------------------------------
    // NEW SLIDES inserted right after FitnessFunctionSlide
    { component: SelectionSlide },
    { component: CrossoverMutationSlide },
    { component: ElitismSlide },
    { component: AssemblingSlide },
    { component: ResultsSlide },
    { component: ExperimentResults1 },
    { component: ExperimentResults2 },
    { component: ResultsComparisonSlide },
    { component: DiscussionSlide },
    { component: FutureWorkSlide },
    { component: ConclusionSlide },
    // --------------------------------------
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

export default PresentationLayout;
