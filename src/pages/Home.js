import React from 'react';
import Hero from '../components/layouts/Hero';
import Banner from '../components/layouts/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/services';
import Footer from  '../components/layouts/footer'


class Home extends React.Component{
    render(){
    return(
 <>
    <Hero>
        <Banner title="Luxurious Home" subtitle="deluxe room starting at $199">
       <Link to="/rooms" className="btn-primary">Our Rooms</Link>
        </Banner>
    </Hero>
    <Services />
    <Footer />
</>

    );
 }
}
export default Home;