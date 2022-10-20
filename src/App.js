// import "tailwindcss/tailwind.css"
import './App.less';
import {useRoutes} from "react-router-dom";
import data from './router'
function App() {
  return useRoutes(data)
}

export default App;