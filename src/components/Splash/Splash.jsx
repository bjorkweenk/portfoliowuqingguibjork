import React from 'react'
import './Splash.css'

import { Link } from 'react-router-dom'


export default function Splash() {
    return (
        <div className='background'>
        <div className="item1">
            <div className="lines"> 
            <div className='line'> </div>
            <div className='line1'> </div>
            <div className='line2'> </div>
           
            <h1 id="hello"> HELLO </h1>
           <a href="./home"><img className='arrow' src="../next.png" alt="arrow" width={30} height={30}/></a>
             </div>
        </div>
        </div>
    )
}