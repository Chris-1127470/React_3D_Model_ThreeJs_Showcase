import React from 'react';
import './Home.css';
import './ScrollArrow.scss'

const Home = () => {
  return (
    <>
      <header
        className="
          bg-gradient-to-br
          from-gradient-very-light-red
          to-gradient-light-red
          bg-cover
          h-screen
          rounded-bl-[7rem]
          overflow-hidden
          relative
          grid">
        <div
          className="
            z-0
            relative
            flex
            items-center
            justify-between
            p-5
            lg:p-10
            self-start">

        </div>
        <div className="relative px-5 py-20 font-overpass">
          <h1 className="text-3xl lg:text-6xl text-white font-semibold text-center">
            Vehicle Showcase
          </h1>
          <p className="text-gray-200 lg:text-lg text-center my-5">
            An Array Of 3D Modelled Vehicles
          </p>
        </div>
      </header>
    </>
  );
};

export default Home;
