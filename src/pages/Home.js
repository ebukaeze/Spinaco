import React from 'react';
import Hero from '../components/layouts/Hero';
import Banner from '../components/layouts/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/services';
import FeaturedRooms from '../components/layouts/featuredRooms';
import {SliderData} from '../components/SliderData';



class Home extends React.Component{
    render(){
    return(
 <>
    <Hero slides={SliderData}>
       
    </Hero>
    <Services />
    <FeaturedRooms />
</>

    );
 }
}
export default Home;