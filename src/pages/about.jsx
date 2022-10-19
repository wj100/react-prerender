import { Outlet } from 'react-router-dom';
function About() {
  return (
    <p className='meng'>
      about
      <Outlet />
    </p>
  );
}

export default About;
