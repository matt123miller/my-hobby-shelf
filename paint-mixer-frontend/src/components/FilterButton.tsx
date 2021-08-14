import { ChangeEventHandler } from 'react';

type FilterButtonProps = {
  isActive: boolean;
  title: string;
  filterKey: string;
  sortChanged: ChangeEventHandler<HTMLInputElement>;
};

function FilterButton({
  filterKey,
  title,
  isActive,
  sortChanged,
}: FilterButtonProps) {
  return (
    <button type="button" className={`filter-button ${isActive && 'active'}`}>
      <input
        type="radio"
        name="SortGroup"
        id={filterKey}
        onChange={sortChanged}
      />
      <label htmlFor={filterKey}>{title}</label>
    </button>
  );
}

export default FilterButton;
