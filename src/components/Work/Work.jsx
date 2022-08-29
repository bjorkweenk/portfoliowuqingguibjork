import React from 'react'
import './Work.css'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import AOS from 'aos'

export default function Work(){
   
  AOS.init();

    return(
        <>
            <Navbar/>
            <div className='background1'>
            <div className="item" data-aos="flip-down">
               <div className='line1'></div>
               <div className='line2'></div>
            </div>


            <div class="item" data-aos="flip-down">9</div>
            <div class="item" data-aos="flip-down">9</div>
            <div class="item" data-aos="flip-down">9</div>
            <div class="item" data-aos="flip-down">9</div>
            <div class="item" data-aos="flip-down">9</div>
            <div class="item" data-aos="flip-down">9</div>
            <div class="item" data-aos="flip-down">9</div>
            </div>
            <Footer/>
        </>
    )
}