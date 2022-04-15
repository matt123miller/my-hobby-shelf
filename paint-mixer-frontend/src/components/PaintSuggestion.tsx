import Paint from './Paint';
import { PaintRecord } from '../types';
import RGB, { createComplimentaryRGB } from '../utils/RGB';
import { findClosestPaintByHex } from '../utils/ColourFunctions';

type ColourSuggestionProps = {
  chosenColour: PaintRecord;
  resetSelection: () => void;
};

export default function ColourSuggestion(props: ColourSuggestionProps) {
  const { chosenColour, resetSelection } = props;

  const ComplimentaryPaint = findClosestPaintByHex(new RGB(1, 1, 1));

  return (
    <>
      <div className="flex justify-end">
        <button type="button" onClick={() => resetSelection()}>
          Reset
        </button>
      </div>
      <ul className="paint-header mt-4 mb-8">
        <Paint
          key="chosen-paint"
          paint={chosenColour}
          onPaintClick={() => {}}
        />
        {ComplimentaryPaint}
      </ul>
    </>
  );
}
