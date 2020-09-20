import React, { Component } from 'react';
import Hero from "../components/layouts/Hero";
import Banner from "../components/layouts/Banner";
import { Link } from 'react-router-dom';

const Error = () =>{
        return(
         <Hero>
             <Banner title="404" subtitle="Page Not Found">
                 <Link to="/" className="btn-primary">Return Home</Link>
             </Banner>
         </Hero>
        )
    }

export default Error;