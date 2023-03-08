import React from 'react';

interface IProps {
  setFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterState: string;
}

const Filter = ({ setFilter, filterState }: IProps) => {
  return (
    <label htmlFor="filter">
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={filterState} onChange={setFilter} />
    </label>
  );
};

export default Filter;
