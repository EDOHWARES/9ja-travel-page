import React from 'react';
import {BsFillPersonCheckFill} from "react-icons/bs";
import {BsTelephoneFill} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md";
import {MdCancel} from "react-icons/md";

import "./form.css";



const Form = (props) => {
  return props.showForm ? (
    <form className='signForm'>
        <div className='cancel' onClick={props.hideForm}><MdCancel /></div>
        <div className='cont'>

        <h1>Fill in the Form</h1>
        <div className='name div'>
            <div className='icon'>
            <BsFillPersonCheckFill />
            </div>
            <input type="text" placeholder='Name' required />
        </div>

        <div className='phone--mobile div'>
            <div className='icon'>
            <BsTelephoneFill />
            </div>
            <input type="number" name="" id="" required placeholder='Phone number' />
        </div>

        <div className='address div'>
            <div className='icon'>
                <MdLocationOn />
            </div>
            <input type="text" placeholder='Address' required />
        </div>
        <div className='location div'>

            <select id="country-state" name="country-state" required>
                <option value="">Select state</option>
                <option value="AB">Abia State</option>
                <option value="AD">Adamawa State</option>
                <option value="AK">Akwa Ibom State</option>
                <option value="AN">Anambra State</option>
                <option value="BA">Bauchi State</option>
                <option value="BY">Bayelsa State</option>
                <option value="BE">Benue State</option>
                <option value="BO">Borno State</option>
                <option value="CR">Cross River State</option>
                <option value="DE">Delta State</option>
                <option value="EB">Ebonyi State</option>
                <option value="ED">Edo State</option>
                <option value="EK">Ekiti State</option>
                <option value="EN">Enugu State</option>
                <option value="FC">Federal Capital Territory</option>
                <option value="GO">Gombe State</option>
                <option value="IM">Imo State</option>
                <option value="JI">Jigawa State</option>
                <option value="KD">Kaduna State</option>
                <option value="KN">Kano State</option>
                <option value="KT">Katsina State</option>
                <option value="KE">Kebbi State</option>
                <option value="KO">Kogi State</option>
                <option value="KW">Kwara State</option>
                <option value="LA">Lagos</option>
                <option value="NA">Nasarawa State</option>
                <option value="NI">Niger State</option>
                <option value="OG">Ogun State</option>
                <option value="ON">Ondo State</option>
                <option value="OS">Osun State</option>
                <option value="OY">Oyo State</option>
                <option value="PL">Plateau State</option>
                <option value="SO">Sokoto State</option>
                <option value="TA">Taraba State</option>
                <option value="YO">Yobe State</option>
                <option value="ZA">Zamfara State</option>
            </select>
        </div>
        <div className='btns div'>
            <button>Submit</button>
        </div>
      
    </div>
    </form>
  ) : null
}

export default Form
