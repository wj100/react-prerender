import React, { useEffect, useState, useCallback, useMemo, useContext } from 'react';
import { Spin } from 'antd';
import { useLocation, useNavigate, Outlet, useOutletContext, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import arrow from '@/assets/img/category/arrow.png';
import arrowTrans from '@/assets/img/category/arrow.png';
import ajax from '../../../request';
import { productsContext } from '../../../App';
const categoryMap = {
  '/products/fashion': 'sustainableFashion',
  '/products/outdoor': 'outdoorFurniture',
  '/products/toys': 'toysHobbies',
};
export default function Category() {
  const params=useParams()
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(productsContext);
  const { pathname } = location;
  const data = context && context[categoryMap[pathname]];

  const goToList = (index, childIndex) => {
    navigate(`/products/${params.category}/list`, { state: { index, childIndex } });
  };
  if (!data) return <div className='h-32 flex justify-center items-center'><Spin /></div>;
  return (
    <div className="g-category-list-wrap">
      {data && data.categoryName === 'Sustainable Fashion' ? (
        <div className="g-category-list  g-content mx-auto flex justify-between flex-wrap">
          {data &&
            data.childCategory.map((item, index) => (
              <div onClick={() => goToList(index)} className={['g-category-list-item mb-6' /* index === 1 ? 'blur' : '' */].join(' ')} key={index} style={{ backgroundImage: `url(${item.images})` }}>
                <span className="g-category-list-item-title text-white text-lg"> {item.categoryName}</span>
                <div className="g-category-list-item-mask h-full w-full">
                  <span className="g-category-list-item-mask-title text-white text-lg"> {item.categoryName}</span>
                  <div className="g-category-list-item-blue bg-blue h-full">
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        data?.childCategory.map((child, i) => (
          <div key={i} className="g-category-list  g-content mx-auto flex justify-between flex-wrap">
            <div className="g-category-list-item mb-6 bg-blue g-category-list-first">
              <span>{child.categoryName}</span>
              <img src={arrowTrans} alt="" />
            </div>
            {child.childCategory.map((item, index) => (
              <div onClick={() => goToList(i, index)} className={['g-category-list-item mb-6' /* index === 1 ? 'blur' : '' */].join(' ')} key={index} style={{ backgroundImage: `url(${item.image})` }}>
                <span className="g-category-list-item-title text-white text-lg"> {item.categoryName}</span>
                <div className="g-category-list-item-mask h-full w-full">
                  <span className="g-category-list-item-mask-title text-white text-lg"> {item.categoryName}</span>
                  <div className="g-category-list-item-blue bg-black-b h-full">
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}
