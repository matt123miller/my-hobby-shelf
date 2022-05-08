import Paint from './Paint';
import { PaintRecord } from '../types';
import {
  findComplimentaryColour,
  findMostSimilarPaintToColour,
  findLeastSimilarPaintToColour,
  convertToSrgb,
} from '../utils/ColourFunctions';

type ColourSuggestionProps = {
  chosenPaint: PaintRecord;
  resetSelection: () => void;
};

export default function ColourSuggestion(props: ColourSuggestionProps) {
  const { chosenPaint, resetSelection } = props;
  const oppositeColour = findComplimentaryColour(chosenPaint.colourjs);
  const oppositeRgb = convertToSrgb(oppositeColour);

  // @ts-ignore
  const oppositePaint: PaintRecord = {
    name: 'Opposite Hue',
    hexCode: oppositeRgb,
  };

  return (
    <>
      <div className="flex justify-end">
        <button type="button" onClick={() => resetSelection()}>
          Reset
        </button>
      </div>

      <ul className="paint-header mt-4 mb-8">
        <Paint key="chosen-paint" paint={chosenPaint} onPaintClick={() => {}} />
        <Paint
          key="opposite-paint"
          paint={oppositePaint}
          onPaintClick={() => {}}
        />
      </ul>
    </>
  );
}
