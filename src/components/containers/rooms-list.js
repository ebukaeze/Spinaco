import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import selectRoom from '../../actions';

class RoomList extends React.Component{
    createRoomList(){
        return this.props.rooms.map((room, index)=> {
            return(
            <li key={index}>{room.room_type}</li>
            );
        })
    }
    render(){
        return(
       <div class="container-fluid">
         <ul>
         {this.createRoomList()}
         </ul>
       </div>
        );
    }
  
}
function mapStateToProps(state){
    return {
        rooms: state.rooms
    };
}


export default connect(mapStateToProps)(RoomList);