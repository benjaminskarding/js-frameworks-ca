import React from "react";

const DecorativeCornersBig = () => {
  return (
    <>
      <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black transform rotate-90 transition-colors duration-500 group-hover:bg-white"></div>
      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-black transform rotate-180 transition-colors duration-500 group-hover:bg-white"></div>
      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-black transform rotate-0 transition-colors duration-500 group-hover:bg-white"></div>
      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-black transform -rotate-90 transition-colors duration-500 group-hover:bg-white"></div>
    </>
  );
};

export default DecorativeCornersBig;
