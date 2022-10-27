import React,{useEffect, useState} from 'react';
import './App.less';
import { useRoutes } from 'react-router-dom';
import data from './router';
import ajax from './request'
export const productsContext = React.createContext(null);

function Router() {
  return useRoutes(data);
}
function App() {
    const [data,setData]=useState(null)
    useEffect(()=>{
        ajax.getCategory().then(res=>{
           setData(res)
        })
},[])
  return (
    <productsContext.Provider value={data}>
      <Router />
    </productsContext.Provider>
  );
}

export default App;
