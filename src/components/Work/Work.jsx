import React from 'react'
import './Work.css'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import ScrollArrow from '../ScrollArrow/ScrollArrow'
import AOS from 'aos'

export default function Work() {

    AOS.init();

    return (
        <>
            <Navbar />
            <div className='background1'>
                <div className="item" data-aos="flip-down">
                    <div className='line1'>
                    </div>
                    <div className='line2-course'>
                        <h3 className='project'> Skills <span className='outline'> 2022</span></h3>
                    </div>
                    <div className='line2-a'>
                        <h5 className='title-a'> 2020 - SheCodes Introduction course Coding <br></br> 2022 - Iron hack Bootcamp Full stack Web Development <br></br> 2022 - Brainnest Course Front End Development </h5>
                    </div>
                    <div className='line3'></div>
                    <div className='line-4'></div>
                    <div className='line-5'></div>
                    <div className='line-6'></div>

                    <div className='line-7'>
                        <h2 className='link1'> Languages </h2>
                        <br></br>
                        <i class="fa-brands fa-react"></i>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-figma"></i>
                        <br></br>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-bootstrap"></i>
                        <i class="fa-brands fa-node-js"></i>
                        <i class="fa-solid fa-database"></i>
                        <div class="fa-brands1">
                            <div class="more">
                                <div class="more1"><ul>
                                    <li className='txt'> Microsoft</li>
                                    <li className='txt'>Indesign</li>
                                    <li className='txt'>Photoshop</li>
                                    <li className='txt'>I term</li>
                                    <li className='txt'> Tailwind</li>
                                    <li className='txt'> Heroku </li>
                                </ul>

                                </div>
                            </div>
                        </div>

                        <a className='link' href="https://www.shecodes.io/certificates/da991d573f819fba26319f53cff651b5" target="_blank"> <h2 className='link'> SheCodes </h2>
                        </a>
                        <a className='link' href="https://www.credential.net/fc6cabae-5d34-4a98-8a51-3cd7dc68447e#gs.a5k1tw" target="_blank"><h2 className='link'> Ironhack </h2></a>
                        <h2 className='link'> Brainnest </h2>
                    </div>

                    <div className='line-8'></div>
                    <div className='line-9'></div>
                </div>

                {/*ironhack*/}
                <div className="item" data-aos="flip-down">
                    <h1 className='link1'> Iron Hack <span className='outline1'> 2022 </span></h1>
                </div>

                {/* Susy Game */}
                <div className="item" data-aos="flip-down">
                    <div className='line1'>
                    </div>
                    <div className='line2-susy'>
                        <h3 className='project'> Susy</h3>
                    </div>
                    <div className='line2-a'>
                        <h5 className='title-a'>My first ever game in Javascript with canvas & express. Susy is a healthy girl who needs to catch the apples to score some point.. if she eats the hamburger she is game over.</h5>
                    </div>
                    <div className='line3'></div>
                    <div className='line-4'></div>
                    <div className='line-5'></div>
                    <div className='line-6'></div>

                    <div className='line-7'>
                        <h2 className='link1'> Languages </h2>
                        <br></br>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-html5"></i>
                        <h2 className='link'> Responsive : Desktop </h2>
                        <a className='link' href="https://bjorkweenk.github.io/GAME01/" target="_blank"><h2 className='link'> Live Demo</h2></a>
                        <a className='link' href="https://github.com/bjorkweenk/GAME01" target="_blank"><h2 className='link'> Github</h2></a>
                    </div>

                    <div className='line-8'></div>
                    <div className='line-9'></div>
                </div>

                {/* foodhunters */}
                <div className="item" data-aos="flip-down">
                    <div className='line1'>
                    </div>
                    <div className='line2-fh'>
                        <h3 className='project'> Food Hunters</h3>
                    </div>
                    <div className='line2-a'>
                        <h5 className='title-a'> FOODHUNTERS is an app where you can follow you're friends favorite recipes.</h5>
                    </div>
                    <div className='line3'></div>
                    <div className='line-4'></div>
                    <div className='line-5'></div>
                    <div className='line-6'></div>

                    <div className='line-7'>
                        <h2 className='link1'> Languages </h2>
                        <br></br>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-react"></i>
                        <i class="fa-solid fa-database"></i>
                        <h2 className='link'> Responsive : Mobile </h2>
                        <a className='link' href="https://ironhackfoodhunters.herokuapp.com/" target="_blank"><h2 className='link'> Live Demo</h2></a>
                        <a className='link' href="https://github.com/IronhackFoodHunters/foodhunters/tree/Bjork" target="_blank"><h2 className='link'> Github</h2></a>
                    </div>

                    <div className='line-8'></div>
                    <div className='line-9'></div>
                </div>

                {/* Sharelicious */}
                <div className="item" data-aos="flip-down">
                    <div className='line1'>
                    </div>
                    <div className='line2-sh'>
                        <h3 className='project'> Sharelicious</h3>
                    </div>
                    <div className='line2-a'>
                        <h5 className='title-a'> During the #Hackshow our team (Luisa Ojeda, Samy Ali Sánchez & Pablo Dellacassa) won the best app.
                            Our app is based on food recommendation through a social network. Sharelicious!!

                            I was responsible for the design of the application. App is responsive for mobile (only)</h5>
                    </div>
                    <div className='line3'></div>
                    <div className='line-4'></div>
                    <div className='line-5'></div>
                    <div className='line-6'></div>

                    <div className='line-7'>
                        <h2 className='link1'> Languages </h2>
                        <br></br>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-react"></i>
                        <i class="fa-solid fa-database"></i>
                        <h2 className='link'> Responsive : Mobile </h2>
                        <a className='link' href="https://ironhack-sharelicious-client.herokuapp.com/" target="_blank"><h2 className='link'> Live Demo</h2></a>
                        <a className='link' href="https://github.com/bjorkweenk/Project3-client-Bjork" target="_blank"><h2 className='link'> Github</h2></a>
                    </div>

                    <div className='line-8'></div>
                    <div className='line-9'></div>
                </div>
                {/*Brainnest*/}
                <div className="item" data-aos="flip-down">
                    <h1 className='link1'> Brainnest <span className='outline1'> 2022 </span></h1>
                </div>

                {/* Brainnest */}
                <div className="item" data-aos="flip-down">
                    <div className='line1'>
                    </div>
                    <div className='line2-brn'>
                        <h3 className='project'> Brainnest</h3>
                    </div>
                    <div className='line2-a'>
                        <h5 className='title-a'> First week Assignment</h5>
                    </div>
                    <div className='line3'></div>
                    <div className='line-4'></div>
                    <div className='line-5'></div>
                    <div className='line-6'></div>

                    <div className='line-7'>
                        <h2 className='link1'> Languages </h2>
                        <br></br>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-html5"></i>
                        <h2 className='link'> Responsive : Desktop </h2>
                        <a className='link' href="https://github.com/bjorkweenk/brainnestweek1/settings/pages/" target="_blank"><h2 className='link'> Live Demo</h2></a>
                        <a className='link' href="https://github.com/bjorkweenk/brainnestweek1" target="_blank"><h2 className='link'> Github</h2></a>
                    </div>

                    <div className='line-8'></div>
                    <div className='line-9'></div>
                </div>

                {/* Brainnest week 2*/}
                <div className="item" data-aos="flip-down">
                    <div className='line1'>
                    </div>
                    <div className='line2-brn1'>
                        <h3 className='project'> Brainnest</h3>
                    </div>
                    <div className='line2-a'>
                        <h5 className='title-a'> First week Assignment</h5>
                    </div>
                    <div className='line3'></div>
                    <div className='line-4'></div>
                    <div className='line-5'></div>
                    <div className='line-6'></div>

                    <div className='line-7'>
                        <h2 className='link1'> Languages </h2>
                        <br></br>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-html5"></i>
                        <h2 className='link'> Responsive : Desktop </h2>
                        <a className='link' href="https://bjorkweenk.github.io/brainnestweek2/" target="_blank"><h2 className='link'> Live Demo</h2></a>
                        <a className='link' href="https://github.com/bjorkweenk/brainnestweek2" target="_blank"><h2 className='link'> Github</h2></a>
                    </div>

                    <div className='line-8'></div>
                    <div className='line-9'></div>
                </div>

                 {/*Portfolio */}
                 <div className="item" data-aos="flip-down">
                  <h1 className='link1'> Wu Qinggui Bjork  <span className='outline1'> 2022 </span></h1>   
                </div>

                {/* portfolio */}
                <div className="item" data-aos="flip-down">
                    <div className='line1'>
                    </div>
                    <div className='line2-portfolio'>
                        <h3 className='project'> Portfolio</h3>
                    </div>
                    <div className='line2-a'>
                        <h5 className='title-a'> My projects from Ironhack, Brainnest and my personal projects. </h5>
                    </div>
                    <div className='line3'></div>
                    <div className='line-4'></div>
                    <div className='line-5'></div>
                    <div className='line-6'></div>

                    <div className='line-7'>
                        <h2 className='link1'> Languages </h2>
                        <br></br>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-react"></i>
                        <h2 className='link'> Responsive : Dekstop </h2>
                        <a className='link' href="https://wuqingguibjork.herokuapp.com/" target="_blank"><h2 className='link'> Live Demo</h2></a>
                        <a className='link' href="https://github.com/bjorkweenk/portfoliowuqingguibjork" target="_blank"><h2 className='link'> Github</h2></a>
                    </div>

                    <div className='line-8'></div>
                    <div className='line-9'></div>
                </div>

                 {/*screenshots */}
                 <div className="item" data-aos="flip-down">
                  <h1 className='link1'> Screenshots <span className='outline1'> 2020 </span></h1>   
                </div>

                {/* mountain climbers*/}
                <div className="item" data-aos="flip-down">
                    <div className='line1'>
                    </div>
                    <div className='line2-mc'>
                        <h3 className='project'> Screenshot </h3>
                    </div>
                    <div className='line2-a'>
                        <h5 className='title-a'> One of my first webpages </h5>
                    </div>
                    <div className='line3'></div>
                    <div className='line-4'></div>
                    <div className='line-5'></div>
                    <div className='line-6'></div>

                    <div className='line-7'>
                        <h2 className='link1'> Languages </h2>
                        <br></br>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-html5"></i>
                        <h2 className='link'> Responsive : Screenshot </h2>
                    </div>

                    <div className='line-8'></div>
                    <div className='line-9'></div>
                </div>

                    {/* Sports*/}
                    <div className="item" data-aos="flip-down">
                    <div className='line1'>
                    </div>
                    <div className='line2-sports'>
                        <h3 className='project'> Screenshot </h3>
                    </div>
                    <div className='line2-a'>
                        <h5 className='title-a'> One of my first webpages </h5>
                    </div>
                    <div className='line3'></div>
                    <div className='line-4'></div>
                    <div className='line-5'></div>
                    <div className='line-6'></div>

                    <div className='line-7'>
                        <h2 className='link1'> Languages </h2>
                        <br></br>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-html5"></i>
                        <h2 className='link'> Responsive : Screenshot </h2>
                    </div>

                    <div className='line-8'></div>
                    <div className='line-9'></div>
                </div>

                 {/* Menu */}
                 <div className="item" data-aos="flip-down">
                  <h1 className='link1'> De Waagh  <span className='outline1'> 2015 </span></h1>   
                </div>

                {/* De Waagh */}
                <div className="item" data-aos="flip-down">
                    <div className='line1'>
                    </div>
                    <div className='line2-waagh'>
                        <h3 className='project'> De Waagh </h3>
                    </div>
                    <div className='line2-a'>
                        <h5 className='title-a'> I created a menu for De Waagh a restaurant in the Netherlands. </h5>
                    </div>
                    <div className='line3'></div>
                    <div className='line-4'></div>
                    <div className='line-5'></div>
                    <div className='line-6'></div>

                    <div className='line-7'>

                        <h2 className='link1'>PDF </h2>
                        <p> Click here for the PDF <a href="./waagh.pdf" target="_blank">example</a>.</p>
                        <br></br>
                        <h2 className='link'> Languages </h2>
                        <p> Indesign</p>
                        <br></br>

                        <br></br>
                    </div>

                    <div className='line-8'></div>
                    <div className='line-9'></div>
                </div>

                 {/*Sint Lucas*/}
                 <div className="item" data-aos="flip-down">
                  <h1 className='link1'> Sint Lucas <span className='outline1'> 2011-2015 </span></h1>   
                </div>

                {/* Sint Lucas */}
                <div className="item" data-aos="flip-down">
                    <div className='line1'>
                    </div>
                    <div className='line2-sintlucas'>
                        <h3 className='project'> Sint Lucas </h3>
                    </div>
                    <div className='line2-a'>
                        <h5 className='title-a'> From 2011-2015 I studied at Sint Lucas, Boxtel. </h5>
                    </div>
                    <div className='line3'></div>
                    <div className='line-4'></div>
                    <div className='line-5'></div>
                    <div className='line-6'></div>

                    <div className='line-7'>

                        <h2 className='link1'>PDF </h2>
                        <p> Click here for the PDF <a href="./sintlucas.pdf" target="_blank">example</a>.</p>
                        <br></br>
                        <h2 className='link'> Languages </h2>
                        <p> Indesign</p>
                        <br></br>

                        <br></br>
                    </div>

                    <div className='line-8'></div>
                    <div className='line-9'></div>
                </div>





            </div>
            <Footer />
        </>
    )
}