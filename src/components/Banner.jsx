import React from 'react';
import fashionBg from '../assets/img/category/fashion-banner.png';
import outdoorBg from '../assets/img/category/outdoor-banner.png';
import toysBg from '../assets/img/category/toys-banner.png';
const propsMap = {
  fashion: {
    title: 'Sustainable Fashion',
    desc: 'We provide sustainable fashion categorys to create a better<br/> living environment for our customers',
    titleColor: '#000',
    descColor: '#666',
    bg: fashionBg,
  },
  outdoor: {
    title: 'Outdoor Living',
    desc: 'The use of new composite materials, so that you enjoy a<br/> comfortable natural life',
    titleColor: '#fff',
    descColor: '#fff',
    bg: outdoorBg,
  },
  toys: {
    title: 'Toys & Hobbies',
    desc: 'Find anime collectibles featuring your favorite<br/> characters right here at EaseSupply now!',
    titleColor: '#333',
    descColor: '#333',
    bg: toysBg,
  },
};
export default function Banner(props) {
  const { category } = props;
  const p = propsMap[category];
  return (
    <div className="g-category-banner w-full bg-cover" style={{ backgroundImage: `url(${p.bg})` }}>
      <div className="g-content mx-auto">
        <p className="text-bold text-xxl text-black" style={{ color: p.titleColor }}>
          {p.title}
        </p>
        <p className="g-category-banner-desc mt-3 text-base" style={{ color: p.descColor }} dangerouslySetInnerHTML={{ __html: p.desc }}></p>
      </div>
    </div>
  );
}
