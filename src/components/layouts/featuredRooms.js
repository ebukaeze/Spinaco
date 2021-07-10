import React, { Component } from 'react';
import Room from './Room';
import Loading from './Loading';
import {RoomContext} from '../../context';
import Title from '../title';
 class FeaturedRooms extends Component {
    static contextType = RoomContext;
  render() {
   let {loading, featuredRooms: rooms} = this.context;
    rooms = rooms.map(room =>{
    return <Room key={room.id} room={room} />
  });
    
      
    return (
      
      <section className="featured-room">
          <Title title={"Featured Rooms"} />
      <div className="featured-rooms-center">
          
          {loading ? <Loading /> : rooms}
          </div>
      </section>
     
    )
  }
}

export default FeaturedRooms;