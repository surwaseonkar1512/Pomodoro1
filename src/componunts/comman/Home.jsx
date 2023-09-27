import React from 'react';

const Home = () => {
  return (
    <div
      className="bg-cover bg-fixed bg-center bg-opacity-25 min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('https://play-lh.googleusercontent.com/CtSl4WLdcsiv6TiSavrwQZdqMoQoX4OtOsMgnViCntSfMRNt3DyMa0j6yle6di8ILkU=w526-h296-rw')`,
      }}
    >
      <div className="pt-16 pb-20 md:pt-32 md:pb-40 px-4 md:px-10 text-center text-white">
        <h1 className="text-4xl font-serif mb-4">Welcome to Pomodoro App!</h1>
        <p className="text-lg font-serif">
          "The Pomodoro Technique teaches you to work with time, instead of struggling against it." - Francesco Cirillo
        </p>
      </div>
    </div>
  );
};

export default Home;
