import React from 'react';
import "./footer.css";
import Form from './Form';
import Foot from './Foot';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer>
      <div className='container'>

      <Form />
      <Foot />
      <Copyright />

      </div>
    </footer>
  )
}

export default Footer
