// import React, { useEffect, useState } from 'react';
// import { Outlet, useLocation,useParams } from 'react-router-dom';
// import ajax from '../../request'
// import mock from '../../assets/js/mock';
// const categoryMap = {
//   '/products/fashion': 'sustainableFashion',
//   '/products/outdoor': 'outdoorFurniture',
//   '/products/toys': 'toysHobbies',
// };
// export default function Main() {
//   const [data, setData] = useState({});
//   const location = useParams();
//   console.log(11,location)
//   const { pathname } = location;
//   return (
//     <div>
//       fsdfdsf
//     </div>
//   );
// }
import React from 'react';
import Head from '../../components/Head';
import Banner from '../../components/Banner';
import Foot from '../../components/Foot';
import { Outlet ,useParams,useNavigate} from 'react-router-dom';
import '../../assets/css/products.less'
export default function Index() {
const navigate=useNavigate()
const params=useParams()
const {category}=params
if(!['fashion','outdoor','toys'].includes(category)){
    navigate('/')
    return
}
  return (
    <div>
      <Head />
      <Banner category={category} />
      <Outlet />
      <Foot />
    </div>
  );
}
