import React from 'react'
import './About.css'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function About(){
    return(
        <div>
            <Navbar/>

           <div className='image-name'>
            <div className='image1'>
            <h2 id="name"> WU QINGGUI</h2>
           </div>
           <h2 id="name2"> BJORK WEENK</h2>
           <p id="intro"> Hi, Welcome! <br></br><br></br>
            Waking up with a little breeze, some sunshine and a cup of coffee in my hand. <br></br>
            I would say that would be my perfect start of the day. I dislike wet socks and if there is not a new challenge. <br></br><br></br> Walking in the mountain, inline skating in the park or sweating in the gym. All those activities will give me a smile. <br></br><br></br>
            Getting to know new people, new developing skills and new countries will make me enthusiastic. <br></br>
            and last but not least being surrounded by the people I love & doing a job that challenge me, is my key to happiness. 
            <br></br><br></br>
            Nice to meet you! <br></br>
            Kind regards, 
           </p>

           <div className='countries'> 
            <div className='square'> <video className='square' src="movie.MOV" controls></video></div>
            <div className='square'></div>
            <div className='square'></div>
           </div>
            </div> 
            <Footer/>
        </div>
    )
}