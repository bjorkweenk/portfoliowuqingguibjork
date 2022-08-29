import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ofzbj27", 
      "template_96ndrxk", 
      form.current, 
      "v0ZQ5u8snXik8SYfR")
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <>
    <Navbar/>
<div id="body-contact">
<div className='image-name'>
                <div className='image11'>
                    <h2 id="name1" > LET'S CONNECT</h2>
                </div>
                <h2 id="name21"> CONTACT </h2>

    </div>
  
    <form ref={form} onSubmit={sendEmail}>
    <h2 className='coffee'> COFFEE ? </h2>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='name' />
      <label>Email</label>
      <input type="email" name="user_email" placeholder='e-mail'/>
      <label>Message</label>
      <textarea name="message" placeholder='Coffee?' width={200} heigth= {200} />
      <input type="submit" value="Send" />
    </form>
    </div>

    
    <Footer/>

    </>
  );
};