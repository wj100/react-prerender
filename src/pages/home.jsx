import ajax from '../request';
import {  useDispatch } from 'react-redux';
import { setProducts } from '../store/slices/productsSlice';
import Head from '../components/Head';
import Foot from '../components/Foot';
import '../assets/css/home.less';
import icon1 from '../assets/img/home/why-choose-icon-1.png';
import icon2 from '../assets/img/home/why-choose-icon-2.png';
import icon3 from '../assets/img/home/why-choose-icon-3.png';
import block1 from '../assets/img/home/home-block-1.png';
import block2 from '../assets/img/home/home-block-2.png';
import block3 from '../assets/img/home/home-block-3.png';
import weHave1 from '../assets/img/home/weHave-1.png';
import weHave2 from '../assets/img/home/weHave-2.png';
import weHave3 from '../assets/img/home/weHave-3.png';
import aircraft from '../assets/img/home/aircraft.png';
import netEase from '../assets/img/home/netEase.png';
const imgAlt = 'NetEase';
function Home() {
  return (
    <div className="w-full g-min-w">
      <Head />
          <div className="g-banner bg-home-banner w-full h-490px bg-cover bg-black-c">
            <div className="g-content mx-auto text-white">
              <p className="text-bold text-xxxl ">Sourcing, Building, and Delivering Excellence</p>
              <p className="text-xl  mt-3">Selected Supply Chain for Global Buyers</p>
              <p className="g-banner-desc mt-3 text-sm text-black-d">
                If you have a product vision, then we are the partner you need to bring it to life. Don’t spend time researching overseas factories, investigating pricing, or traveling thousands of miles to see manufacturing facilities – let us do the heavy lifting and ensure a good deal and a
                quality product every time.
              </p>
              <a href="#!" className="g-btn mt-22px">
                Schedule a meeting
              </a>
            </div>
          </div>
          <div className="g-why-choose  bg-black-b flex items-center justify-center">
            <div className="g-content flex flex-col items-center justify-center">
              <p className="text-bold text-xl text-white">Why Choose NetEase Selected Suppliers?</p>
              <p className="px-1 mt-5 text-lg text-center text-black-e w-935px">Our focus is on sourcing, building, and delivering excellence to our global buyer and reseller community. We will save you time and provide you with quality sustainable products and services you can trust.</p>
              <div className="g-why-choose-content flex justify-between">
                <div className="g-why-choose-content-icons text-lg text-white text-center ">
                  <img src={icon1} alt="icon" />
                  <p className="">More than 10000+ suppliers to choose from</p>
                </div>
                <div className="g-why-choose-content-icons text-lg text-white text-center">
                  <img src={icon2} alt="icon" />
                  <p className="">Choose one in 20 suppliers</p>
                </div>
                <div className="g-why-choose-content-icons text-lg text-white text-center">
                  <img src={icon3} alt="icon" />
                  <p className="">5 rounds of quality inspection for each product before launch</p>
                </div>
              </div>
            </div>
          </div>
          <div className="g-home-block  bg-white-a ">
            <div className="g-content flex justify-between">
              <img src={block1} alt={imgAlt} />
              <div className="flex flex-col justify-center">
                <p className="text-black-c text-xxl">Selected Suppliers</p>
                <p className="text-black-f g-home-block-desc">NetEase Selected Suppliers is a platform that carefully selects the top factories and suppliers in China, providing you with direct access to quality-assured products and a convenient one-stop shopping experience for buyers around the world. </p>
              </div>
            </div>
          </div>
          <div className="g-home-block   bg-blue-grey ">
            <div className="g-content flex justify-between">
              <div className="flex flex-col justify-center ">
                <p className="text-black-c text-xxl">Quality Control</p>
                <p className="text-black-f g-home-block-desc">
                  Every vendor we partner with has been investigated by our team and is someone we believe can do a quality job. Our leaders have vast experience in the manufacturing industry and have outlined a quality control process that covers every consideration for ensuring we deliver nothing
                  but your expectations.
                </p>
              </div>
              <img  src={block2} alt={imgAlt} />
            </div>
          </div>
          <div className="g-home-block  bg-white-a">
            <div className="g-content flex justify-between">
              <img src={block3} alt={imgAlt} />
              <div className="flex flex-col justify-center">
                <p className="text-balck-c text-xxl">Afforablility</p>
                <p className="text-black-f g-home-block-desc">
                  NetEase Selected Suppliers is committed to offering quality products at the most affordable prices. We work with factories and suppliers to negotiate the best possible prices so that our customers can save money without compromising on quality. Whether you’re small to medium sized,
                  global companies can now access the same resources as larger corporations, and if you're working with NetEase Select Suppliers then there's no better time than right now to get ahead of your competition!
                </p>
              </div>
            </div>
          </div>
          <div className="g-home-block   bg-blue-dark">
            <div className="g-content flex justify-between">
              <div className="flex flex-col justify-center ">
                <p className="text-xxl text-white">And more…</p>
                <p className="g-home-block-desc text-white">There are companies in the world that say they value sustainable initiatives, but they are all talk and no action. When we say it, we truly mean it, and we are looking for partners who believe in making a difference as well.</p>
                <p className="g-home-block-desc text-white mt-8">Our own organization has committed to ESG initiatives that combine our vision with action toward a more sustainable future. We are committed to making a positive impact on the health of our planet.</p>
              </div>
              <img className="" src={block2} alt={imgAlt} />
            </div>
          </div>
          <div className="g-home-weHave h-screen flex flex-col items-center justify-center">
            <p className="text-xxxl text-black-c">What we have</p>
            <div className="g-content mt-50px flex justify-between">
              <div className="g-home-weHave-box flex flex-col">
                <img src={weHave1} alt={imgAlt} />
                <div className="pl-10 pt-8">
                  <p className="text-white text-xl">Outdoor Furniture</p>
                  <p className="text-black-e text-base mt-3">
                    The use of new composite materials, <br />
                    so that you enjoy a comfortable natural
                    <br /> life
                  </p>
                  <a href="#!" className="g-btn g-btn-sm mt-5">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="g-home-weHave-box flex flex-col">
                <img src={weHave2} alt={imgAlt} />
                <div className="pl-10 pt-8">
                  <p className="text-white text-xl">SustainableFashion</p>
                  <p className="text-black-e text-base mt-3 break-word">
                    We provide sustainable fashion products
                    <br /> to create a better living environment for
                    <br /> our customers
                  </p>
                  <a href="#!" className="g-btn g-btn-sm mt-5">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="g-home-weHave-box flex flex-col">
                <img src={weHave3} alt={imgAlt} />
                <div className="pl-10 pt-8">
                  <p className="text-white text-xl">Toys & Hobbies</p>
                  <p className="text-black-e text-base mt-3">
                    Find anime collectibles featuring your
                    <br /> favorite characters right here at
                    <br /> EaseSupply now!{' '}
                  </p>
                  <a href="#!" className="g-btn g-btn-sm mt-5">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <img className="g-home-weHave-icon" src={aircraft} alt={imgAlt} width="31px" height="33px" />
            <p className="text-base text-bold text-center text-black-f">more products coming soon……</p>
          </div>
          <div className="g-home-about bg-black-b flex relative items-center">
            <div className="g-home-about-left h-full w-4/6 bg-blue"></div>
            <div className="g-content absolute left-0 right-0 m-auto flex justify-between items-center">
              <div className="g-home-about-text">
                <p className="text-xxl text-bold text-white">About Us</p>
                <p className="text-base text-white mt-5">
                  NetEase Selected Suppliers was founded by NetEase, Inc. (NASDAQ: NTES), a leading internet technology company in China with a respected global reputation that enables us to build quality relationships and provide top-tier service to our clients.
                </p>
                <a href="#!" className="g-btn g-btn-sm mt-10 g-btn-black">
                  Learn more
                </a>
              </div>
              <img src={netEase} alt={imgAlt} width="619px" height="396px" />
            </div>
          </div>
      <Foot />
    </div>
  );
}

export default Home;
