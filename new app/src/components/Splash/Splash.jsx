import React from 'react'
import './Splash.css'

import { Link } from 'react-router-dom'


export default function Splash() {
    return (
        <div className='background'>
        <div className="item1">
            <h1><span id="hello"></span>
            <br></br>
            <h3 id="welcome"> Nice to see you here!</h3></h1>
        
           <a href="./home"><img className='arrow' src="../next.png" alt="arrow" width={30} height={30}/></a>
             </div>
        </div>
      
    )
}