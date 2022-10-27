import React from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
// import $ajax from '@/request'
// $ajax.loginStart()
import {Link,NavLink,useLocation} from 'react-router-dom'
import logo from '../assets/img/logo.png';
import dropDown from '../assets/img/drop-down.png';
export default function Head() {
    const location=useLocation()
    const {pathname}=location
    // console.log(11,pathname)
    const getNavColor=(path)=>{
        if(!path){
            return {}
        }
        if(pathname===path){
            return {color:'#5E79FF'}
        }else if(path==='/category'&&(pathname.includes('/category')||pathname.includes('/products'))){
            return {color:'#5E79FF'}
        }
    }
  return (
    <div  className="g-header  bg-black-a w-full text-base font-bold ">
      <div className="g-content h-full mx-auto flex items-center text-white ">
        <img  src={logo} alt="logo" height="24px" width="26.56px" />
        <span className="ml-5">Netease Selected Suppliers</span>
        <div  className="g-header-nav h-full m-0 flex items-center relative" >
          <span  style={(getNavColor('/'))}><Link to="/">Home</Link></span>
          <span className='g-header-nav-pro' style={(getNavColor('/category'))}>Products <CaretDownOutlined /></span>   
          {/* <span style={(getNavColor())}>Our Story</span> */}
          <span style={(getNavColor())}>Schedule a Meeting</span>
          <div  className="g-header-nav-menu-box absolute">
          <div  className="g-header-nav-menu bg-white flex flex-col text-sm text-black-c  font-normal ">
            <NavLink  to="/products/fashion" style={({ isActive }) => ({ color: isActive ? '' : '' })}>Sustainable Fashion</NavLink>
            <NavLink to="/products/outdoor" >Outdoor Furniture</NavLink>
            <NavLink to="/products/toys" >Toys & Hobbies</NavLink>
            <p className='g-header-nav-menu-foot mx-auto'>more products coming soon…</p>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
