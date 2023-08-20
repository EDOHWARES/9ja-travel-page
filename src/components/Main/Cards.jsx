import React from 'react';
import Card from './Card';

import img1 from "/src/assets/Kajuru, The Nigerian Castle by Damilola Arogundade - The Ufuoma.jpeg";
import img2 from "/src/assets/9aec0HxQ.jpeg";
import img3 from "/src/assets/IJ4BDN8V.jpeg";
import img4 from "/src/assets/Nigeria wallpaper by Musbee1 - Download on ZEDGE™ d952.jpeg";
import img6 from "/src/assets/xxxx.jpeg";
import img7 from "/src/assets/yyy.jpg";
import img8 from "/src/assets/pexels-godisable-jacob-893967.jpg";
import img9 from "/src/assets/Pretty little Nigerian girl ).jpeg"

const Cards = (props) => {
  return (
    <div className='cards'>
        <Card 
        id="1"
        img={img1}
        location="Kajuru"
        country="Nigeria"
        benefit="Cultural Relax"
        price="99,000"
        details="Kajuru (Adara: Ajure) is a local government area in southern Kaduna State, Nigeria. Its also headquarters is in the town of Kajuru. "
        showForm={props.showForm}
        />

        <Card 
        id=""
        img={img2}
        location="PortHarcourt"
        country="Nigeria"
        benefit="Eyesight Ent.."
        price="280,900"
        details="Port Harcourt is the capital and largest city in Rivers State, Nigeria. It is the fifth most populous city in Nigeria after Lagos, Kano, Ibadan and Benin."
        showForm={props.showForm}
        />

        <Card 
        id="1"
        img={img8}
        location="Mainland, Lagos"
        country="Nigeria"
        benefit="Tour Farther"
        price="450,000"
        details="Lagos Mainland Local Government is a local government area in the Lagos Division of Lagos State, Nigeria. It is located in central Lagos and has its ..."
        showForm={props.showForm}
        />


        <Card 
        id=""
        img={img7}
        location="Abuja Airport"
        country="Nigeria"
        benefit="Homely Flight"
        price="440,500"
        details="Abuja Airport is located 40 km from Abuja city centre. - Nnamdi Azikiwe Airport is the main international airport serving Abuja, ..."
        showForm={props.showForm}
        />

        <Card 
        id="1"
        img={img4}
        location="Lagos Park"
        country="Nigeria"
        benefit="Speedy Calmness"
        price="200,000"
        details="These places are best for nature & parks in Lagos: Lekki Conservation Centre · Tarkwa Bay Beach · Freedom Park Lagos · LUFASI Nature Park · Elegushi Beach · "
        showForm={props.showForm}
        />

        <Card 
        id=""
        img={img6}
        location="Anambra Metropolis"
        country="Nigeria"
        benefit="Tech Views"
        price="180,230"
        details="Awka (Igbo: Ọka) is the capital city of Anambra State, Nigeria. The city was declared ... Awka] is the largest Pentecostal Church in the metropolis hosting ..."
        showForm={props.showForm}
        />

        <Card 
        id="1"
        img={img9}
        location="Esan Central"
        country="Nigeria"
        benefit="Cultural Ent.."
        price="310,000"
        details="Esan Central Local Government Area is a Local Government Area of Edo State, Nigeria. Its administrative headquarters is located in the town of Irrua.
        "
        showForm={props.showForm}
        />

        <Card 
        id=""
        img={img3}
        location="Uromi Junction"
        country="Nigeria"
        benefit="Like Teleport"
        price="100,000"
        details="Realtime driving directions to Uromi Junction Bus Stop, Agbor, based on live traffic updates and road conditions – from Waze fellow drivers."
        showForm={props.showForm}
        />
     
    </div>
  )
}

export default Cards
