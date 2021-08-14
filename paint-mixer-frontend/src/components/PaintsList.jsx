import React, { useState, Fragment } from 'react';
import { Paint, ThemePicker } from './index';

// This should handle various data filtering

const sortOptions = {
  AlphabeticalAsc: false,
  AlphabeticalDesc: false,
  DarkToLight: false,
  LightToDark: false,
};

const sortFunctions = {
  AlphabeticalAsc,
  AlphabeticalDesc,
  DarkToLight,
  LightToDark,
};

export default function PaintsList(props) {
  const { paintData, onPaintClick } = props;

  const [selectedFilters, updateFilters] = useState(sortOptions);
  const [searchRegex, updateSearchText] = useState(RegExp(''));

  const isChecked = (id) => {
    console.log(id);
    return document.getElementById(id)?.checked;
  };

  const sortChanged = (e) => {
    const updatedValues = {
      AlphabeticalAsc: isChecked('AlphabeticalAsc'),
      AlphabeticalDesc: isChecked('AlphabeticalDesc'),
      DarkToLight: isChecked('DarkToLight'),
      LightToDark: isChecked('LightToDark'),
    };

    updateFilters((prevState) => ({ ...prevState, ...updatedValues }));
  };

  const searchTextChanged = (e) => {
    const text = e.target.value;
    const regex = RegExp(text, 'ig');

    updateSearchText(regex);
  };

  const requestedSort = Object.keys(selectedFilters).find(
    (f) => selectedFilters[f]
  );

  // when filters are added do those first, then sort the results

  let filteredData = paintData.filter((p) => searchRegex.test(p.name));

  if (requestedSort) {
    filteredData = sortFunctions[requestedSort](filteredData);
  }

  return (
    <div>
      <div className="paint-controls">
        <input
          className="paint-search"
          type="text"
          name="SearchBar"
          id="SearchBar"
          placeholder="Search for a paint"
          onChange={searchTextChanged}
        />
        <ThemePicker />
      </div>

      <div className="filters">
        <span
          className={`filter-button ${
            selectedFilters.AlphabeticalAsc ? 'active' : ''
          }`}
        >
          <input
            type="radio"
            name="SortGroup"
            id="AlphabeticalAsc"
            onChange={sortChanged}
          />
          <label htmlFor="AlphabeticalAsc">A to Z</label>
        </span>
        <span
          className={`filter-button ${
            selectedFilters.AlphabeticalDesc ? 'active' : ''
          }`}
        >
          <input
            type="radio"
            name="SortGroup"
            id="AlphabeticalDesc"
            onChange={sortChanged}
          />
          <label htmlFor="AlphabeticalDesc">Z to A</label>
        </span>
        <span
          className={`filter-button ${
            selectedFilters.LightToDark ? 'active' : ''
          }`}
        >
          <input
            type="radio"
            name="SortGroup"
            id="LightToDark"
            onChange={sortChanged}
          />
          <label htmlFor="LightToDark">Light to Dark</label>
        </span>
        <span
          className={`filter-button ${
            selectedFilters.DarkToLight ? 'active' : ''
          }`}
        >
          <input
            type="radio"
            name="SortGroup"
            id="DarkToLight"
            onChange={sortChanged}
          />
          <label htmlFor="DarkToLight">Dark to Light</label>
        </span>
      </div>

      <ul className="paint-list">
        {filteredData.map((paint, i) => (
          <li>
            <Paint
              key={`paint${i}`}
              paint={paint}
              onPaintClick={onPaintClick}
            />
          </li>
        ))}
        )}
      </ul>
    </div>
  );
}

function AlphabeticalAsc(data) {
  return data.sort((a, b) => a.name > b.name);
}

function AlphabeticalDesc(data) {
  return data.sort((a, b) => a.name < b.name);
}

function DarkToLight(data) {
  return data.sort((a, b) => a.hexCode > b.hexCode);
}

function LightToDark(data) {
  return data.sort((a, b) => a.hexCode < b.hexCode);
}
