import React, { Component } from 'react';
import Hero from "../components/layouts/Hero";
import Banner from "../components/layouts/Banner";
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/containers/RoomsContainer'; 


const Rooms = () => {

        return(
            <div>
         {/* <Hero /> */}
             {/* <Banner title="Our Rooms">
                 <Link to="/" className="btn-primary">
                     Return Home
                 </Link>
             </Banner> */}
        <RoomsContainer />
        </div>
        );
    
}
export default Rooms;