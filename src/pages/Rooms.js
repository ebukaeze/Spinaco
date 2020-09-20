import React, { Component } from 'react';
import Hero from "../components/layouts/Hero";
import Banner from "../components/layouts/Banner";
import { Link } from 'react-router-dom';
import RoomList from '../components/containers/rooms-list'

class Rooms extends Component{
    render(){
        return(
            <div>
         <Hero hero="roomsHero">
             <Banner title="Our Rooms">
                 <Link to="/" className="btn-primary">
                     Return Home
                 </Link>
             </Banner>
         </Hero>
         <RoomList />
        </div>
        );
    }
}
export default Rooms;