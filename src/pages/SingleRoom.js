import React, { Component } from 'react';
import defaultBcg from '../Assets/images/defaultBcg.jpeg';
import Banner from '../components/layouts/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

class SingleRoom extends Component{
    constructor(props){
        super(props);
         this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        };
    }
    static contextType = RoomContext;
    //componentDidMount(){}
    render(){
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
       if(!room) {
           return ( 
           <div className="error">
               <h3>No such room could be found...</h3>
               <Link to="/rooms" className="btn-primary"> 
               Back to Rooms
               </Link>
           </div>

           );
        }
        console.log(room);
    const {
           name,
           description,
           capacity,
           size,
           price,
           extras,
           breakfast,
           pets, 
           images
 } = room;
 const [mainImg, ...defaultImages] = images;
     
        return(
            <>
       <StyledHero img={mainImg || this.state.defaultBcg}>
           <Banner title={`${name} room`}>
               <Link to="/rooms" className="btn-primary">
                   Back to Rooms</Link>
           </Banner>
       </StyledHero>
       <section className="single-room">
           <div className="single-bg">
        <div className="single-room-images">
            {defaultImages.map((items, index) =>{
             return <img key={index} src={items} alt={name}/>
            })}
        </div>
        <div className="single-room-info">
            <article class="desc">
                <h3>Room Details</h3>
                <p>{description}</p>
            
            <article className="info">
                <h3>Info</h3>
                <h6>Price: ${price}</h6>
                <h6>Size: {size} SQFT</h6>
                <h6>
                   max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                </h6>
                <h6>{pets? "Pets Alllowed" : "No Pets Allowed"}</h6>
                <h6>{breakfast && "Free breakfast included"}</h6>
            </article>
            </article>
            </div>
            </div>
       </section>
       <section className="room-extra">
           <h6>extras</h6>
           <ul className="extras">
               {extras.map((item, index) =>(
                   <li key={index}>- {item}</li>
               ))}
           </ul>
       </section>

       </>
        );
    }
}
export default SingleRoom;