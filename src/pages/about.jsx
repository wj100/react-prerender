import { Outlet } from 'react-router-dom';
function About() {
  return (
    <p>
      about
      <Outlet />
    </p>
  );
}

export default About;
