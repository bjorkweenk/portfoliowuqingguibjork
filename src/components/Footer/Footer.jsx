import React from 'react';
import './Footer.css'

import ScrollArrow from '../ScrollArrow/ScrollArrow';



const Footer = () => {
    return (
        <>
            <footer>
                    <div className="img">
                       <a href="./home"> <img className="logo-img" src='../logobw.png' width={50} height={50}></img></a>
                        <span className="rights"> All rights Bjork Weenk © </span>
                    </div>
                    <div className="list">
                        <ul>
                            <li className="icon-list"> <a href="https://github.com/bjorkweenk" target="_blank"> <i class="fa-brands fa-github-square fa-xl"></i></a></li>
                            <li className="icon-list"> <a href="./contact"><i class="fa-solid fa-at fa-xl"></i></a></li>
                            <li className="icon-list"> <a href="https://www.linkedin.com/in/wuqingguibjork/" target="_blank"> <i class="fa-brands fa-linkedin fa-xl"></i></a></li> 
  
                        </ul>
                      <div className='scroll'> <ScrollArrow/></div> 
                    </div>
                                          
            
            </footer>
        </>
    );
};

export default Footer;