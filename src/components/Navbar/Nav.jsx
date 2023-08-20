import React from 'react';
import "./nav.css";
import {MdTravelExplore} from "react-icons/md";
import {PiDotsNineBold} from "react-icons/pi";

const Nav = (props) => {

  const [dispNav, setDispNav] = React.useState(false)

  const showNav = () => {
    setDispNav((prevState) => {
      return !prevState;
    })
  }


  const checkPageLoad = () => {
    if (document.documentElement.clientWidth > 800) {
      setDispNav(true)
    }
  }

  React.useState(() => {
    window.onload = checkPageLoad()
  }, [])

  const checkSize = () => {
    if (document.documentElement.clientWidth > 800) {
      setDispNav(true)
    } else {
      setDispNav(false)
    }

    if (document.getElementById.clientWidth < 800) {
      setDispNav(false)
    }


  }

  window.addEventListener("resize", checkSize)

  return (
    <header>

      <div className='logo'>
        <h1><MdTravelExplore /> 9ja-Travel.</h1>
      </div>

      <nav style={{display: `${dispNav ? "flex" : "none"}`}}>
        <ul>
          <li>
            <a href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">
              Packages
            </a>
          </li>
          <li>
            <a href="#">
              Shop
            </a>
          </li>
          <li>
            <a href="#">
              About
            </a>
          </li>
          <li>
            <a href="#">
              Pages
            </a>
          </li>
          <li>
            <a href="#">
              News
            </a>
          </li>
          <li>
            <a href="#">
              Contacts
            </a>
          </li>
        </ul>
        <div>
          <button onClick={props.handleClick}>
            BOOK NOW
          </button>
        </div>
      </nav>

      <div className='hamburger' onClick={showNav}>
        <PiDotsNineBold />
      </div>
      
    </header>
  )
}

export default Nav
