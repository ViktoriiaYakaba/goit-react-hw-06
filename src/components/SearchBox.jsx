import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice';
import { selectNameFilter } from '../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input type="text" value={nameFilter} onChange={handleChange} placeholder="Search by name" />
  );
};

export default SearchBox;
