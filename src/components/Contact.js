import React, { useState, useRef } from 'react';
import {BsArrowRight} from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {

  const [alert, setAlert] = useState({bool: false, color: '', text: ''});
  const mailIn = useRef(null);
  const messageIn = useRef(null);

  const showAlert = (bool = false, color= '', text='') => {
    setAlert({bool, color, text});

    setTimeout(() => {
      setAlert(false, '', '');
    }, 2000);
  }

  function sendEmail(e) {
    e.preventDefault();
    if(mailIn.current.value === '' && messageIn.current.value === ''){
      showAlert(true, '#fcd4da', 'Please, complete the form below');
      return false;
    } else {
      emailjs.sendForm('service_f50zxua', 'template_8jy3h3s', e.target, 'user_yvMGPemf5p53Ykr7f6RNo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

      showAlert(true, '#14ff5d85', 'Thanks for your message');
    
    }
  }

  return (
    <div className='contact'>
      <h1 className='flex'>Contact Me <BsArrowRight /></h1>
      <div className='contact-form'>
        <h2>Send me a message!</h2>
        <form className="the-form" onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="shit" className='half'></input>
          <input type='text' placeholder="Subject" name='subject' className='half'></input>
          <input type="email" placeholder="Email" name="email" ref={mailIn}></input>
          <textarea placeholder='Message' name="message" ref={messageIn} />

          <button type="submit" className='btn' value="Send">Send</button>
        </form>
      </div>
      <div className={`${alert.bool ? 'alert flex flex-center' : 'alert'}`}>
        <p style={{background: alert.color}}>{alert.text}</p>
      </div>
    </div>
  )
}

export default Contact
