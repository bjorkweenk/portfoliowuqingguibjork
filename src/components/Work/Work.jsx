import React from 'react'
import './Work.css'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import ScrollArrow from '../ScrollArrow/ScrollArrow'
import AOS from 'aos'

export default function Work(){
   
  AOS.init();

    return(
        <>
            <Navbar/>
            <div className='background1'>
            <div className="item" data-aos="flip-down">
               <div className='line1'>
               </div>
               <div className='line2'>
              <h3 className='project'>PROJECT <span className='outline'>01</span></h3> 
               </div>
               <div className='line2-a'>
              <h5 className='title-a'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero facere, sit adipisci ex animi vel eaque minima laborum, quae molestiae assumenda placeat eveniet dignissimos culpa, in totam illum unde sed?</h5> 
               </div>
            <div className='line3'></div>
            <div className='line-4'></div>
            <div className='line-5'></div>
            <div className='line-6'></div>

            <div className='line-7'>
                <h2> Languages </h2>
                <h2> Live Demo </h2>
                <h2> Github</h2>
            </div>

            <div className='line-8'></div>
            <div className='line-9'></div>
            </div>

           </div>
            <Footer/>
        </>
    )
}