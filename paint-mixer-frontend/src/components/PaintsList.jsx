import React, { useState, Fragment } from 'react';
import { Paint, ThemePicker } from './index';


export default PaintsList;

// This should handle various data filtering

const sortOptions = {
    AlphabeticalAsc: false,
    AlphabeticalDesc: false
}

const sortFunctions = {
    AlphabeticalAsc: AlphabeticalAsc,
    AlphabeticalDesc: AlphabeticalDesc,
}

function PaintsList(props) {

    const { paintData, onPaintClick } = props;

    const [selectedFilters, updateFilters] = useState(sortOptions);
    const [searchRegex, updateSearchText] = useState(RegExp(''));




    const sortChanged = (e) => {

        const ascInput = document.getElementById('AlphabeticalAsc');
        const descInput = document.getElementById('AlphabeticalDesc');

        const updatedValues = {
            AlphabeticalAsc: ascInput.checked,
            AlphabeticalDesc: descInput.checked
        };

        updateFilters(prevState => { return { ...prevState, ...updatedValues } });
    }

    const searchTextChanged = (e) => {
        const text = e.target.value;
        const regex = RegExp(text, 'ig')

        updateSearchText(regex);
    }

    // `const filterChanged = (e) => {
    //     // TODO:
    // }`

    const requestedSort = Object.keys(selectedFilters).find(f => selectedFilters[f]);

    // when filters are added do those first, then sort the results

    let filteredData = paintData.filter(p => searchRegex.test(p.name));


    if (requestedSort) {
        filteredData = sortFunctions[requestedSort](filteredData);
    }


    return (
        <div>
            <div class="paint-controls">
                <input className="paint-search" type="text" name="SearchBar" id="SearchBar" placeholder="Search for a paint" onChange={searchTextChanged} />
                <ThemePicker />
            </div>

            <div className="filters">
                <span className={`filter-button ${selectedFilters.AlphabeticalAsc ? 'active' : ''}`}>
                    <input type="radio" name="AlphabeticalDirection" id="AlphabeticalAsc" onChange={sortChanged} />
                    <label htmlFor="AlphabeticalAsc">A to Z</label>
                </span>
                <span className={`filter-button ${selectedFilters.AlphabeticalDesc ? 'active' : ''}`}>
                    <input type="radio" name="AlphabeticalDirection" id="AlphabeticalDesc" onChange={sortChanged} />
                    <label htmlFor="AlphabeticalDesc">Z to A</label>
                </span>
            </div>
            
            <ul className="paint-list">
                {
                    filteredData.map((paint, i) => {
                        return <Paint key={`paint${i}`} paint={paint} onPaintClick={onPaintClick} />
                    })
                }
            </ul>
        </div>
    )
}

function AlphabeticalAsc(data) {
    return data.sort((a, b) => a.name > b.name);
}

function AlphabeticalDesc(data) {
    return data.sort((a, b) => a.name < b.name);
}

