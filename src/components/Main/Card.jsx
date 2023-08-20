import React from 'react';
import {GrLocation} from "react-icons/gr";
import {TbListDetails} from "react-icons/tb";

import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
    React.useEffect(() => {
        AOS.init({duration: 2000})
    }, []);

    const [number, setNumber] = React.useState(1)

    const increaseNo = () => {
        setNumber((prevState)=> {
            return prevState + 1;
        })
    }

    
  return (
    <div className='card' data-aos="zoom-in">

        <img src={props.img} alt="" />
        <div className='loc--geo'>
            <h2 className='loc'>{props.location}</h2>
            <p className='geo'>
                <span style={{marginRight: ".5rem"}}>
                    <GrLocation />
                </span>
                <span>
                    {props.country}
                </span>
            </p>
        </div>
        <div className='ben--pric'>
            <div>
                <p className='ben'>
                    {props.benefit}
                </p>
                <button onClick={increaseNo} className={`${!props.id ? "b" : "btn"}`}>+{number}</button>
            </div>
            <b className='pric'><strike>N</strike><span className='thePrice'>{props.price}</span></b>
        </div>
        <div className='details--btn'>
            <p className='details'>
                {props.details}
            </p>
            <button className={`${props.id ? "b" : ""}`} onClick={props.showForm}>
                Details
                <TbListDetails />
            </button>
        </div>
      
    </div>
  )
}

export default Card
