import { useState, Fragment } from 'react';
import Color from 'colorjs.io';

import { PaintData, PaintRecord } from '../types';
import sortFunctions from '../utils/SortFunctions';
import {
  findComplimentaryColour,
  findMostSimilarPaintToColour,
} from '../utils/ColourFunctions';
import Paint from './Paint';
import PaintSuggestion from './PaintSuggestion';

// This should handle various data filtering

const sortOptions = {
  AlphabeticalAsc: true,
  AlphabeticalDesc: false,
  DarkToLight: false,
  LightToDark: false,
};

export default function PaintsList(props: { paintData: PaintData }) {
  const { paintData } = props;

  // Some good custom hook candidates here
  // See this article from Kent C Dodds on how I could type that
  // https://kentcdodds.com/blog/wrapping-react-use-state-with-type-script
  const [chosenPaint, setPaint] = useState<PaintRecord>();
  const [selectedSorts, updateSort] = useState(sortOptions);
  const [searchRegex, updateSearchText] = useState(RegExp(''));

  const sortChanged = () => {
    // @ts-ignore
    const isChecked = (id: string) => document.getElementById(id)?.checked;
    const updatedValues = {
      AlphabeticalAsc: isChecked('AlphabeticalAsc'),
      AlphabeticalDesc: isChecked('AlphabeticalDesc'),
      DarkToLight: isChecked('DarkToLight'),
      LightToDark: isChecked('LightToDark'),
    };

    updateSort((prevState) => ({ ...prevState, ...updatedValues }));
  };

  const searchTextChanged = (e) => {
    const text = e.target.value;
    const regex = RegExp(text, 'ig');
    updateSearchText(regex);
  };

  const requestedSort = Object.keys(selectedSorts).find(
    (f) => selectedSorts[f]
  );

  const paintSelected = (p: PaintRecord) => {
    setPaint(p);
  };

  const colourInputChanged = (e) => {
    // const colourjs = new Color(e.target.value);
    // const closestPaint = findMostSimilarPaintToColour(colourjs);
    // setPaint(closestPaint);
  };

  let filteredData = paintData; // .slice(0, 6);

  // This is apparently an empty regex object, in FF.
  // Search should come first, constrains data for further steps;
  if (searchRegex.source !== '(?:)') {
    filteredData = filteredData.filter((p) => searchRegex.test(p.name));
  }

  // when filters are added do those before sort
  if (requestedSort) {
    filteredData = sortFunctions[requestedSort](filteredData);
  }

  return (
    <>
      <div>
        <details>
          <summary>Info</summary>
          <div>
            <p>
              This tool will help suggest a colour with a complimentary hue to
              whatever you select. That is, a colour with a hue on the opposite
              side of the colour wheel. Remember that saturation is how
              "powerful" a specific hue is. For more information about colour
              theory in miniature paint there is a
              <a href="https://www.youtube.com/playlist?list=PLcdsbwBroEmBfSAKcqpwBKIrYyepHtHN9">
                series of videos from Vince Vinturella
              </a>
              that deep dives each colour and a
              <a href="https://www.youtube.com/watch?v=Pn4iFd7Heck">
                video from Dana Howl
              </a>
              discussing colour in CMYK terms.
            </p>
            <p>
              Colours at the extremes of value such as pure white or black and
              extremely pale or dark versions of colours will struggle to
              propose a reasonable opposite colour. This is because they have
              either a very small or non-existent hue.
            </p>
          </div>
        </details>
      </div>
      <div className="my-8 flex justify-center">
        <input
          className="rounded-lg border-2 px-2"
          type="text"
          name="SearchBar"
          id="SearchBar"
          placeholder="Search for a paint"
          onChange={searchTextChanged}
        />

        {/* <div className='filters mt-4'>
          <FilterButton
            title='A to Z'
            filterKey='AlphabeticalAsc'
            isActive={selectedSorts.AlphabeticalAsc}
            sortChanged={sortChanged}
          />
          <FilterButton
            title='Z to A'
            filterKey='AlphabeticalDesc'
            isActive={selectedSorts.AlphabeticalDesc}
            sortChanged={sortChanged}
          />
          <FilterButton
            title='Light to Dark'
            filterKey='LightToDark'
            isActive={selectedSorts.LightToDark}
            sortChanged={sortChanged}
          />
          <FilterButton
            title='Dark to Light'
            filterKey='DarkToLight'
            isActive={selectedSorts.DarkToLight}
            sortChanged={sortChanged}
          />
        </div> */}
      </div>

      {/* 
        Make a colour input for selecting a colour 
        It still needs styling or replacing with a third party package
      */}
      <input
        type="color"
        name="colour-picker"
        id="colour-picker"
        onChange={colourInputChanged}
      />
      {chosenPaint && (
        <PaintSuggestion
          chosenPaint={chosenPaint}
          resetSelection={() => setPaint(undefined)}
        />
      )}

      <hr />

      <ul className="paint-list mt-4 mb-8">
        {filteredData.map((paint, i) => (
          <Paint key={`paint${i}`} paint={paint} onPaintClick={paintSelected} />
        ))}
      </ul>
    </>
  );
}
