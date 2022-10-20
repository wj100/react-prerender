import React from 'react';
// import $ajax from '@/request'
// $ajax.loginStart()
import dropDown from '../assets/img/drop-down.png';
export default function Head() {
  return (
    <div  className="g-header h-50px bg-black-a w-full text-base font-bold ">
      <div className="g-content h-full mx-auto flex items-center text-white ">
        <span className="ml-5">Netease Selected Suppliers</span>
        <div  className="g-header-nav h-full m-0 flex items-center relative" >
          <span className=" text-blue">Home</span>
          <span>3333 <img src={dropDown} alt="" /></span>   
          <span>2222</span>
          <span>1111</span>
          <div  className="g-header-nav-menu bg-blue flex flex-col text-sm text-black-c absolute font-normal hidden">
            <span className='bg-nav-icon-1'>1111</span>
            <span className='bg-nav-icon-2'>2222</span>
            <span className='bg-nav-icon-3'>3333</span>
          </div>
        </div>
      </div>
    </div>
  );
}
