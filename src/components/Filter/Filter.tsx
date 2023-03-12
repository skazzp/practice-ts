import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterSelector } from '../../redux/filter/filterSelector';
import { addFilter } from '../../redux/filter/filterSlice';

// interface IProps {
//   setFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   filterState: string;
// }

const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const setFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(addFilter(value));
  };

  return (
    <label htmlFor="filter">
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={setFilter} />
    </label>
  );
};

export default Filter;
