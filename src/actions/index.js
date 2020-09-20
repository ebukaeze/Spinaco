export const selectRoom = (room) =>{
    console.log("this room was selected", room.room_type);
    return {
        type: 'SELECT_ROOM',
        payload: room
    };

}
export default selectRoom;