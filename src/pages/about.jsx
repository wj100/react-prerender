import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ageIncremented } from '../store/slices/userSlice';
function About() {
  const counter = useSelector(state => state.counter.value);
  const age = useSelector(state => state.user.age);
  const dispatch = useDispatch();

  const userAgeIncremented = () => {
    dispatch(ageIncremented(5));
  };
  return (
    <p className="meng">
      {age}-
      <span onClick={userAgeIncremented}>btn</span>
      <Outlet />
    </p>
  );
}

export default About;
