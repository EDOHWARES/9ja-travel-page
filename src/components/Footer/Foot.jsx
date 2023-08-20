import React from 'react';
import {BsTwitter} from "react-icons/bs";
import {BsYoutube} from "react-icons/bs";
import {BsGoogle} from "react-icons/bs";
import {SiGeeksforgeeks} from "react-icons/si";
import {TbMathGreater} from "react-icons/tb";
import {MdTravelExplore} from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const Foot = () => {

    React.useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    
  return (
    <div className='foot' data-aos="flip-up">

        <div className='cont'>
            <div className='pt--1'>
                <h2><MdTravelExplore /> 9ja-Travel.</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni pariatur, quam voluptates, odio quis repellat vero eligendi debitis, omnis voluptatibus sapiente earum ipsa. In obcaecati animi asperiores aliquam natus ut?
                </p>
                <ul>
                    <li><BsTwitter /></li>
                    <li><BsYoutube /></li>
                    <li><BsGoogle /></li>
                    <li><SiGeeksforgeeks /></li>
                </ul>
            </div>
            <div className='foot--nav'>
                <h3>OUR AGENCIES</h3>
                <ul>
                    <li>
                        <TbMathGreater />
                        Services
                    </li>

                    <li>
                        <TbMathGreater />
                        Insurance
                    </li>


                    <li>
                        <TbMathGreater />
                        Agency
                    </li>


                    <li>
                        <TbMathGreater />
                        Tourism
                    </li>


                    <li>
                        <TbMathGreater />
                        Payment
                    </li>


                </ul>
            </div>
            <div className='foot--nav'>
                <h3>
                    PARTNERS
                </h3>
                <ul>
                    <li>
                        <TbMathGreater />
                        Services
                    </li>

                    <li>
                        <TbMathGreater />
                        Insurance
                    </li>


                    <li>
                        <TbMathGreater />
                        Agency
                    </li>


                    <li>
                        <TbMathGreater />
                        Tourism
                    </li>


                    <li>
                        <TbMathGreater />
                        Payment
                    </li>


                </ul>
            </div>
            <div className='foot--nav'>
                <h3>LAST MINUTES</h3>
                <ul>
                    <li>
                        <TbMathGreater />
                        Services
                    </li>

                    <li>
                        <TbMathGreater />
                        Insurance
                    </li>


                    <li>
                        <TbMathGreater />
                        Agency
                    </li>


                    <li>
                        <TbMathGreater />
                        Tourism
                    </li>


                    <li>
                        <TbMathGreater />
                        Payment
                    </li>


                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Foot
