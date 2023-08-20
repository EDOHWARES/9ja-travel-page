import React from 'react';
import "./main.css";
import Hero from './Hero';
import Cards from './Cards';
import AOS from "aos";
import "aos/dist/aos.css";


const Main = (props) => {

  React.useEffect(() => {
    AOS.init({duration: 1000})
  }, [])
  return (
    <main>
      <Hero showForm={props.showForm} />
      <h1 className='most--visited' data-aos="fade-right">Most Visited <span>Destinations</span></h1>
      <Cards showForm={props.showForm} />
      
    </main>
  )
}

export default Main
