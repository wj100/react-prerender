import React from 'react'
import {getLocalStorage} from '../assets/js/utils'
export default function NotFound() {
    console.log(404, getLocalStorage('useInfo'))
  return (
    <div style={{textAlign:'center',fontSize:'30px',color:'#000'}}>
       404 Not Found
    </div>
  )
}
