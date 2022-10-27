import React, { useState } from 'react';
import { Badge, Descriptions } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { useLocation, useParams } from 'react-router-dom';
import BreadMenu from '../../../components/BreadMenu';
import arrowTop from '../../../assets/img/category/arrow-top.png';
import arrowBottom from '../../../assets/img/category/arrow-bottom.png';
export default function Details() {
  const params = useParams();
  const location = useLocation();
  const { state } = location;
  const data = state.item;
  const [currentImg, setCurrentImg] = useState(0);
//   const [imgsTop,setImgsTop]=useState(0)
  const handlerSwitchImg=(n)=>{
    console.log(n)
    if(n===-1&&currentImg===0){
        alert(currentImg)
        return
    }
    if(n===1&&currentImg>=Object.keys(data.imageUrl).length){
        alert(currentImg)
        return
    }
        setCurrentImg(currentImg+n)
  }
  return (
    <div>
      <BreadMenu menu={[params.category, data.productName]} />/
      <div className="g-content mx-auto mt-5">
        <div className="g-details-goods flex">
          <div className="g-details-goods-switch">
            <div className="g-details-goods-switch-icon" onClick={()=>handlerSwitchImg(-1)}>
              <img  src={arrowTop} alt="" />
            </div>
            <div className="g-details-goods-switch-imgs relative" style={{top:currentImg*-100+'px'}}>
              {Object.values(data.imageUrl)
                // .slice(0, 6)
                .map((img, i) => (
                  <img
                    key={i}
                    style={{ outline: currentImg === i ? '3px solid black' : 'none' }}
                    src={img}
                    alt=""
                    onClick={() => setCurrentImg(i)}></img>
                ))}
            </div>
            <div className="g-details-goods-switch-icon switch-next" onClick={()=>handlerSwitchImg(1)}>
              <img  src={arrowBottom} alt="" />
            </div>
          </div>
          <div className="g-details-goods-mainImg ml-10">
            <img className="w-full h-full" src={data.imageUrl[currentImg]} alt="" />
          </div>
          <div className="g-details-goods-text ml-12">
            <p className="text-xl text-black-c font-bold">{data.productName}</p>
            <div className="g-details-goods-attr text-base text-black-c">
              <p>
                <span>Item No.</span>
                <span>{data.itemNumber}</span>
              </p>
              <p>
                <span>Estimated FOB PriceEstimated FOB Price</span>
                <span>
                  {data.fob ? (
                    data.fob
                  ) : (
                    <a href="#!" style={{ color: '##6575F8' }}>
                      Get a quote&gt;
                    </a>
                  )}
                </span>
              </p>
              <p>
                <span>Core Specifications</span>
              </p>
              <div className="g-details-goods-attr-spec text-sm font-normal">
                {data.specification
                  .split('\n')
                  .slice(0, 6)
                  .map((item, index) => {
                    return (
                      <p key={index} className="flex justify-between">
                        <span>{item.split('|')[0]}</span>
                        <span style={{ color: '#999' }}>{item.split('|')[1]}</span>
                      </p>
                    );
                  })}
              </div>
            </div>
            <a href="#!" className="g-btn g-btn-xl">
              Send us an inquiry
            </a>
          </div>
        </div>
      </div>
      <div className="g-detalis-spec g-content mx-auto">
        <div className="g-detalis-spec-title w-full">Specifications</div>
        {data.specification.split('\nfactory_163_specification_category ').map((item,index) => {
          return (
            <div key={index} style={{ marginTop: '74px' }} className='flex flex-wrap relative g-details-table'>
              {item.split('\n').map((i,k,arr) => {
                if (i.indexOf('|') === 0) {
                  return <div key={k} className='text-lg text-black-c font-bold absolute -top-12 left-0'>{i.slice(1)}</div>;
                }
                return (
                //   <div className='flex' key={k} >
                    <p key={k} style={{width:'600px',height:'50px',background: '#F8F8F8',borderBottom:(k===arr.length-1||k===arr.length-1)?'none':'1px solid #E9E9E9'}} className='flex items-center'>
                      <span style={{ paddingLeft: '12px' }}  className='w-1/2 h-full flex items-center'> {i.split('|')[0]}</span>
                      <span style={{  paddingLeft: '12px' }} className='w-1/2  h-full flex items-center bg-white'> {i.split('|')[1]}</span>
                    </p>
                //   </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="g-content mx-auto">
            <div className="g-detalis-spec-title w-full mt-20">Description</div>
            <p className='g-detalis-desc text-black-f text-base pt-5 pb-32' >
                {
                    data.desc
                }
            </p>
      </div>
    </div>
  );
}
