import React from "react";
import "./_loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <img
        className="loader--image"
        src="https://media2.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif"
        alt="Loading"
      ></img>
      <p className="loader--text">
        Viajando por el ciberespacio<span>....</span>
      </p>
    </div>
  );
};

export default Loader;
