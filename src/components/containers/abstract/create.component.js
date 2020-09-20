import React, { Component } from 'react'

export default class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state={
          roomType: '',
          imageName,
          imageData,
          roomPrice: 0,
          roomSize: 0,
          roomCapacity: 0,
          roomDescription: ''
        }
    }
    onChangeRoomType(e){
      this.setState({
        roomType: e.target.value
      });
    }

    onChangeRoomPrice(e){
      this.setState({
        roomPrice: e.target.value
      });
    }

    onChangeRoomSize(e){
      this.setState({
        roomSize: e.target.value
      });
    }
    onChangeRoomCapacity(e){
      this.setState({
        roomCapacity: e.target.value
      });
    }

    onChangeRoomDescription(e){
      this.setState({
        roomDescription: e.target.value
      });
    }

    onSubmit(e){
      e.preventDefault();
      
    }
  render() {
    return (
      <>
        
      </>
    )
  }
}
