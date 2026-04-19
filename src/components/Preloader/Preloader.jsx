import React from "react";
import "../blocks/preloader.css";

function Preloader({ isLoading }) {
  return (
    
    isLoading && (
      <div className="circle-preloader">
        <i className="circle-preloader__circle"></i>
      </div>
    )
  );
}

export default Preloader;