import Head from '../components/Head'
import '../assets/css/home.less';
function Home() {
  return (
    <div className='w-full'>
        <Head/>
        <div className="g-banner bg-home-banner w-full h-490px bg-cover bg-black-c"></div>
        <div className="g-why-choose h-screen  bg-black-c"></div>
        <div className="g-quality-ontrol g-quality-ontrol h-screen bg-black-a"></div>
    </div>
  );
}

export default Home;
