import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
      toast.success("Logout succesful")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex lg:flex-row flex-col items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-cyan-600 text-4xl font-bold cursor-pointer'>
        Pomodoro
        </h1>
      </Link>
      {user?.email ? (
        <div>
         
          <button
            onClick={handleLogout}
            className='bg-cyan-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-cyan-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
