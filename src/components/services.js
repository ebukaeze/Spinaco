import React from'react';
import Title from './title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';


 class Services extends React.Component{
     state={
     services:[
         {
             icon:<FaCocktail />,
             title: "Delicious Cocktail",
             info: "Having fun on a sunny day without any limitation, enjoy endless adventure"
         },

         {
            icon:<FaHiking />,
            title: "endless hiking",
            info: "Having fun on a sunny day without any limitation, enjoy endless adventure"
        },

        {
            icon:<FaBeer />,
            title: "Free Beer",
            info: "Having fun on a sunny day without any limitation, enjoy endless adventure"
        },

        {
            icon:<FaShuttleVan />,
            title: "Free transportation",
            info: "Having fun on a sunny day without any limitation, enjoy endless adventure"
        }
      
     ]
     }
    render(){
    return(
    
         <section className="services">
         <Title title="services"></Title>
         <div className="services-center">
             {this.state.services.map((item, index)=> {
              return <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
              </article>
             })}
         </div>
         </section>
    );
 }
}
export default Services;