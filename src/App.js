// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./componunts/comman/Navbar";
import Home from "./componunts/comman/Home";

import Pomodor from "./componunts/comman/Pomodro";
import Signup from "./componunts/home/auth/Signup";
import Login from "./componunts/home/auth/Login";

function App() {
  return (
    <AuthContextProvider classname="bg-black">
    <Navbar/>
    <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Pomodor/>} />
    </Routes>
    </AuthContextProvider>
      
    
  );
}

export default App;
