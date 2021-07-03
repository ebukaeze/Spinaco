import React from 'react';
import loadingGif from "../../Assets/images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="container">
    <div className="loading">
      <h4>rooms data loading....</h4>
      <img src={loadingGif} alt="" />
    </div>
    </div>
  );
};

export default Loading;