import { Dispatch, SetStateAction } from 'react';
import Paint from './Paint';
import { PaintRecord } from '../types';

type ColourSuggestionProps = {
  chosenColour: PaintRecord;
  resetSelection: Dispatch<SetStateAction<PaintRecord>>;
};

export default function ColourSuggestion(props: ColourSuggestionProps) {
  const { chosenColour, resetSelection } = props;

  return (
    <ul className="paint-header mt-4 mb-8">
      <Paint key="chosen-paint" paint={chosenColour} onPaintClick={() => {}} />
    </ul>
  );
}
