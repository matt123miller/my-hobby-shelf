import { Dispatch, SetStateAction } from 'react';
import Paint from './Paint';
import { PaintRecord } from '../types';
import RGB from '../utils/RGB';
import { findClosestPaintByHex } from '../utils/ColourFunctions';

type ColourSuggestionProps = {
  chosenColour: PaintRecord;
  resetSelection: Dispatch<SetStateAction<PaintRecord>>;
};

export default function ColourSuggestion(props: ColourSuggestionProps) {
  const { chosenColour, resetSelection } = props;

  const complimentaryRgb = RGB.findComplimentaryRGB(chosenColour.rgb);

  const ComplimentaryPaint = findClosestPaintByHex(complimentaryRgb);

  return (
    <div className="paint-header mt-4 mb-8">
      <Paint
        key="chosen-paint"
        isList={false}
        paint={chosenColour}
        onPaintClick={() => {}}
      />
      {ComplimentaryPaint}
    </div>
  );
}
