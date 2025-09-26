import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[linear-gradient(340deg,rgba(10,10,10,1)_70%,rgba(20,20,20,1)_100%)] relative flex">
      <a href="#about" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"><img src="./assets/img/scroll.png" className="size-36 hover:translate-y-2 smooth-transition" alt="" /></a>
      <div className="w-1/2 h-full pl-60 pr-30">
        <h1 className="capitalize text-5xl pt-40 leading-normal tracking-wide font-semibold font-heading text-white">
          choose your favorite coffee and enjoy
          <span className="text-yellow-500">.</span>
        </h1>
        <p className="w-full pt-5 text-primary">
          Buy the best and delicious coffees.
        </p>
        <div className="w-full h-[1px] bg-gray-200/80 my-10"></div>
        <div className="w-full flex">
          <div className="w-1/2">
            <h1 className="text-secondary md:text-4xl font-bold font-heading pb-10">120K</h1>
            <h2 className="text-xl capitalize font-semibold text-white">testimonials</h2>
            <p className="text-base pt-4 text-primary">Testimonials from various customers who trust us.</p>
          </div>
          <div className="w-1/2 pl-4">
            <h1 className="text-secondary md:text-4xl font-bold font-heading pb-10">340+</h1>
            <h2 className="text-xl capitalize font-semibold text-white">exclusive product</h2>
            <p className="text-base pt-4 text-primary">Premium preparation with quality ingredients</p>
          </div>
        </div>
      </div>
      <img
        src="./assets/img/home.png"
        className="w-1/2 h-full object-cover object-center "
        alt=""
      />
    </div>
  );
};

export default Hero;
