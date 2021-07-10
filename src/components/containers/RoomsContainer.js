/* import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from '../layouts/Loading';
import { withRoomConsumer } from '../../context';

function RoomsContainer({context}){
   
 const {loading, sortedRooms, rooms } = context;

if(loading){
        return <Loading />
    }
        return (
            <>
         
           <RoomsFilter rooms ={rooms}/>
           <RoomsList rooms={sortedRooms}/>
    </>
        );
}
export default withRoomConsumer(RoomsContainer);
 */

 import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from '../layouts/Loading';
import { RoomConsumer } from '../../context';

export default function RoomsContainer() {
  return (
    <RoomConsumer>
        {value =>{
        
        const {loading, sortedRooms, rooms } = value;
    if(loading){
        return <Loading />
    }
        return(

    <div className="room-container">
         
           <RoomsFilter rooms ={rooms}/>
           <RoomsList rooms={sortedRooms}/>
    </div>
        );
    }}
    </RoomConsumer>
  );
}
 