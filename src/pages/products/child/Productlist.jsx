import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Modal, Carousel, Pagination, Spin } from 'antd';
import { productsContext } from '../../../App';
import ajax from '../../../request';
import BreadMenu from '../../../components/BreadMenu';
const categoryMap = {
  '/products/fashion/list': 'sustainableFashion',
  '/products/outdoor/list': 'outdoorFurniture',
  '/products/toys/list': 'toysHobbies',
};
const ModalDetail = React.memo(props => {
  const { visble, onCancel, detail } = props;
  const { imageUrl, productName, desc } = detail;
  console.log('detail===>', detail, imageUrl);
  if (!imageUrl) return '';
  const contentStyle = {
    height: '160px',
    wifth: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const onChange = currentSlide => {
    console.log(currentSlide);
  };
  return (
    <Modal className="g-products-detail-modal" width={1008} open={visble} onCancel={onCancel} footer="">
      <div>
        <Carousel className="detail-modal-left" afterChange={onChange} autoplay={true} dots={{ className: 'detail-modal-left-loop-dots' }}>
          {Object.values(imageUrl).map((img, i) => (
            <div key={i} style={contentStyle}>
              <img src={img} alt="" />
            </div>
          ))}
        </Carousel>
        <div className="detail-modal-right">
          <p>{productName}</p>
          <p dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
      </div>
    </Modal>
  );
});
export default function ProductList() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(productsContext);
  const { pathname } = location;
  const { state } = location;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProducts, setCurrentProducts] = useState({});
  const [products, setProducts] = useState({ data: [] });
  const [currentPage, setCurrent] = useState(3);
  const [clickIndex, setClickIndex] = useState(state);
  const data = context && context[categoryMap[pathname]];
  const onChangePage = page => {
    console.log(page);
    setCurrent(page);
  };
  const getProducts = () => {
    ajax.getProducts().then(res => {
      setProducts(res);
    });
  };
  const handlerClickCategoryName = (index, childIndex) => {
    setClickIndex({ index, childIndex });
  };
  const handlerClickProduct = item => {
    //item里面有字段区分是去弹窗详情还是页面详情
    // setIsModalOpen(true);
    // setCurrentProducts(item);
    // console.log(pathname)
    navigate(`/products/${params.category}/details`, { state: { item } });
  };
  useEffect(() => {
    getProducts();
  }, []);
  if (!data)
    return (
      <div className="h-32 flex justify-center items-center">
        <Spin />
      </div>
    );
  return (
    <div>
      {isModalOpen && <ModalDetail visble={isModalOpen} onCancel={() => setIsModalOpen(false)} detail={currentProducts} />}
      <BreadMenu menu={[params.category, data.categoryName]} />
      <div className="g-products-list-wrap flex">
        <div className="g-products-tree pb-8 g-hidden-scrollbar">
          <h1 className="font-bold text-lg text-black-c pb-3">Categories</h1>
          {data &&
            data.childCategory.map((item, index, arr) => {
              if (item.childCategory) {
                return (
                  <div key={item.categoryName + index}>
                    <h2 className="font-bold text-black-c text-base mt-7 ">{item.categoryName}</h2>
                    {item.childCategory.map((childItem, childIndex, arr) => (
                      <p
                        onClick={() => handlerClickCategoryName(index, childIndex)}
                        className="text-sm text-black mt-3 hover:cursor-pointer"
                        key={childItem.categoryName + index}
                        style={{ color: index === clickIndex.index && childIndex === clickIndex.childIndex ? '#6575F8' : '' }}>
                        {childItem.categoryName}({item.total})
                      </p>
                    ))}
                  </div>
                );
              } else {
                return (
                  <p
                    onClick={() => handlerClickCategoryName(index)}
                    className="text-sm text-black mt-3 hover:cursor-pointer"
                    key={item.categoryName + index}
                    style={{ color: index === clickIndex.index ? '#6575F8' : '' }}>
                    {item.categoryName}({arr.length}) 
                  </p>
                );
              }
            })}
        </div>
        <div className="g-products-content w-full">
          <div className="g-products-list  h-auto pb-14">
            {products.data.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    handlerClickProduct(item);
                  }}
                  key={index}
                  className="g-products-list-item">
                  <img src={item.masterImage} alt="" />
                  <p className="g-products-list-item-title text-black-c truncate">{item.productName}</p>
                  <p className="g-products-list-item-desc text-white" style={{ opacity: item.productName.length >= 46 ? '1' : '0' }}>
                    {item.productName}
                  </p>
                  <div className="g-btn g-btn-lg">Send us an inquiry</div>
                </div>
              );
            })}
          </div>
          <Pagination className="g-products-list-pagination float-right" current={currentPage} onChange={onChangePage} total={50} />
        </div>
      </div>
    </div>
  );
}
