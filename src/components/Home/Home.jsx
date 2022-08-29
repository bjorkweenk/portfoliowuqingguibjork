import React from 'react'
import './Home.css'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <>
            <Navbar/>
            <div id="Home">
                <div className='Name1'>
                    <h1> WU <br></br> QINGGUI </h1>
                    <hr className='hr'/>
                </div>
                <div class="image">
                    <img class="flower" src="../flower.png" height={350} width={350} />
                    <img class="flower1" src="../flower.png" height={220} width={220} />
                    <img class="flower4" src="../flower.png" height={200} width={200} />
                    <img class="flower4" src="../flower.png" height={180} width={180} />
                    <img class="flower5" src="../flower.png" height={150} width={150} />
                    <img class="flower6" src="../flower.png" height={250} width={250} />
                    </div>
                <div className='Name' >
                    <h1> BJORK WEENK </h1> 
                    <hr/>
                    <br></br>
                    <p className='intro-name'> "After working in the hospitality sector, I have decided to explore the wonderful world called Web Development. I am loving it!"</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}