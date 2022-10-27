import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { incremented } from '../store/slices/counterSlice';
function About() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const userAgeIncremented = () => {
    dispatch(incremented(5));
  };
  console.log(value,54354)
  return (
    <p className="meng">
      {value}-
      <span onClick={userAgeIncremented}>btn</span>
      <Outlet />
    </p>
  );
}

export default About;
