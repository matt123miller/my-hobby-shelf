import { useState, Fragment } from 'react';
import Color from 'colorjs.io';

import { PaintData, PaintRecord } from '../types';
import sortFunctions from '../utils/SortFunctions';
import {
  findMostSimilarPaintToColour,
  findLeastSimilarPaintToColour,
} from '../utils/ColourFunctions';
import Paint from './Paint';
import FilterButton from './FilterButton';
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
    const colourjs = new Color(e.target.value);
    const closestPaint = findMostSimilarPaintToColour(colourjs);
    console.log(
      `Selected ${e.target.value}, closest paint is ${closestPaint.name}.`
    );
    setPaint(closestPaint);
  };

  let filteredData = paintData;

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
