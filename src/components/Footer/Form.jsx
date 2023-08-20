import React from 'react';
import {BsSendCheck} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {

    React.useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    
  return (
    <form data-aos="flip-down">
      <h4 className='touch'>KEEP IN TOUCH</h4>
      <div>
        <label htmlFor="email">Travel with us</label>
        <input type="email" id='email' placeholder='Enter Email Address' />
        <button>SEND</button>
      </div>
    </form>
  )
}

export default Form
