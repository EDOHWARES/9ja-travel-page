import React from 'react';
import {MdOutlineDriveFileRenameOutline} from "react-icons/md";
import AOS from 'aos';
import "aos/dist/aos.css";

const Hero = (props) => {

    React.useEffect(() => {
        AOS.init({duration: 3000})
    }, []);


  return (
    <div className='hero'>

        <div className='title' data-aos="fade-down">
            <p>Our Packages</p>
            <h1>Search Your <span>Holiday</span></h1>
        </div>

        <div className='box' data-aos="fade-right">
            <div className='cont'>
                <label htmlFor="destination">Search Your Destination</label>
                <input type="search" placeholder='Abuja' id='destination' />
            </div>
            <div className='cont'>
                <label htmlFor="date">Select Your Date</label>
                <input type="date" name="" id="date" />
            </div>
            <div className='cont'>
                <div className='price'>
                    <label htmlFor="maxPrice">Max Price</label>
                    <small><span><strike>N</strike></span>120,000</small>
                </div>
                <input type="range" name="" id="" />
            </div>

        </div>

        <div className='filter--btn'>
            <button onClick={props.showForm}>More Filter <MdOutlineDriveFileRenameOutline /></button>
        </div>
    </div>
  )
}

export default Hero
