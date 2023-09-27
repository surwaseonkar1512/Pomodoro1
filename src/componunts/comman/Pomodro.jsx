import React, { useState, useEffect } from 'react';

const Pomodor = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            if (isBreak) {
              setIsBreak(false);
              setMinutes(25);
            } else {
              setIsBreak(true);
              setMinutes(5);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && (minutes !== 0 || seconds !== 0)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div
      className="bg-cover bg-center bg-blur-md min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLuko0adMi3OJ0rKxh4hT3O7uD96qMzNgvw&usqp=CAU')`,
      }}
    >
      <h1 className="text-5xl text-cyan-500 font-bold mb-4">Pomodoro Timer</h1>
      <div className="border-[5px] border-cyan-600 rounded-[14rem] p-9 text-5xl font-bold">
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="mt-4">
        <button
          className={`px-4 py-2 m-2 text-white rounded ${
            isActive ? 'bg-red-500' : 'bg-green-500'
          }`}
          onClick={toggleTimer}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          className="px-4 py-2 m-2 text-white bg-blue-500 rounded"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      {isBreak ? <p className="mt-4 text-xl">Take a 5-minute break!</p> : null}
    </div>
  );
};

export default Pomodor;
