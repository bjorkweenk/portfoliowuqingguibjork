import React from 'react';
import './Footer.css'



const Footer = () => {
    return (
        <>
            <footer>
            <img className="logo-img" src='../logobw.png' width={50} height={50}></img><br></br>
             <span> All rights Bjork Weenk © </span>
            <div className="list">
                <ul>
                    <li className="icon-list"> <a href="https://github.com/bjorkweenk" target="_blank"> <i class="fa-brands fa-github-square fa-xl"></i></a></li>
                    <li className="icon-list"> <a href="./contact"><i class="fa-solid fa-at fa-xl"></i></a></li>
                    <li className="icon-list"> <a href="https://www.linkedin.com/in/wuqingguibjork/" target="_blank"> <i class="fa-brands fa-linkedin fa-xl"></i></a></li> 
                </ul>
            </div>
          
            </footer>
        </>
    );
};

export default Footer;