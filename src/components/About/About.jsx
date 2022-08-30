import React from 'react'
import './About.css'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function About() {
    return (
        <div>
            <Navbar />

            <div className='image-name'>
                <div className='image1'>
                    <h2 id="name" > WU QINGGUI</h2>
                </div>
                <h2 id="name2"> BJORK WEENK</h2>


                <p id="intro"> Hi, Welcome! <br></br><br></br>
                    Waking up with a little breeze, some sunshine and a cup of coffee in my hand. <br></br>
                    I would say that would be my perfect start of the day. I dislike if there is not a new challenge and wet socks <br></br><br></br> Walking in the mountain, inline skating in the park or sweating in the gym. All those activities will give me a smile. <br></br><br></br>
                    Getting to know new people, developing new skills and exploring new countries will make me enthusiastic. <br></br>
                    and last but not least being surrounded by the people I love & doing a job that challenges me, is my key to happiness.
                    <br></br><br></br>
                    Nice to meet you! <br></br>
                    Kind regards,
                </p>
            </div>
            <div id="world"><img src="../worldmap2.png" width={900} height={600}></img>
                <div class="Netherlands">
                    <div class="NL">
                        I grew up in the Netherlands and I have lived in Amsterdam, Nijmegen, Zaandam, Eindhoven and Tilburg.
                        <video className='img-inn' src="nl.mp4" width={320} height={320} controls muted controlsList="nodownload"></video></div>
                 
                </div>

                <div class="Spain">
                    <div class="ES">  In 2018, I had a 5-week holiday, decided to travel to Spain.. started in Valencia and stayed for the full 5 weeks. 2 Months later I decided to have a one way ticket. The adventure began and still now , I live in this beautiful city.
                    <video className='img-inn' src="vlc.mp4" width={320} height={320} controls muted controlsList="nodownload"></video></div>
                </div>

                <div class="China">
                    <div class="CH">
                        In 1994 I was born in China and a couple years later I've been lucky enough to be adopted by the most amazing family.
                        <video className='img-inn' src="movie.MOV" width={320} height={320} controls muted controlsList="nodownload"></video>
                    </div>
                </div>
            </div>

            <div id="airplane"><a href="./work"> <img id='airplane' src="./airplane.png" width={220} height={220}></img> </a></div>

            <p className='intro-work'>
                " After working in the hospitality sector, I have decided to explore the wonderful world called Web Development. I am loving it!
                During Covid19 and being stuck at my house, I started following different webinars. When I followed the free webinar of SheCodes, I was sold. From that moment I knew I wanted to continue with my journey of coding."
                <br></br>
                <br></br> <i class="fa-solid fa-arrow-left-long"></i> Click on the grey spots on the world map to get to know me better.</p>




            <Footer />
        </div>
    )
}