import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../Assets/images/room-1.jpeg';
import PropTypes from "prop-types";
import { memo } from "react";

const Room = memo(({ room }) =>{
const { name, slug, images, price } = room;

return (
  <article className="room grid">
  <div className="img-container">
  <figure className="effect-moses wow fadeIn" data-wow-delay="0.1s">

    <img src={images[0] || defaultImg} alt="single room" />
    <figcaption>
      <h2>${price}</h2>
      <p>per night</p>
    </figcaption>
    </figure>
    <Link to={`/rooms/${slug}`} className="btn-primary room-link">
      features
    </Link>
  </div>
  <p className="room-info">{name}</p>
</article>
  );
});

Room.propTypes = {
    room: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired
    })
  };
  export default Room;
  
