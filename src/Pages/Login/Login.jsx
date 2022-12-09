import React, { useState } from 'react';
import './Login.css';
import { HiOutlineMail } from 'react-icons/hi';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getLogin, getLoginGoogle } from '../../App/Counter/loginSlice';

import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';

const Login = ({ open, onClose }) => {
  const [showIcon, setShowIcon] = useState(false)
  const dispatch = useDispatch();
  const dataValue = {
    email: '',
    password: '',
  };
  const [data, setData] = useState(dataValue);

  const handleDataInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleGoogle = () => {
    try {
      dispatch(getLoginGoogle());
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(getLogin(data));
      // console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowIcon = () => {
    setShowIcon(!showIcon)
  }

  if (!open) return null;
  return (
    <div className="wrap_form w-[80%] md:w-[30%] fontCabin bg-slate-100 flex flex-col justify-center items-center m-0 fixed top-[50%] p-[2rem] left-[50%] z-40 rounded-2xl">
      <div className="item_form w-[90%] hidden md:flex flex-row flex-wrap justify-between items-center pb-[1rem]">
        <h1 className='text-[1.2rem] font-extrabold'> 
          Log In to Your Account
        </h1>
        <RiCloseFill onClick={() => onClose(false)} className="icon_close text-[1.5rem] cursor-pointer font-extrabold text-slate-300 hover:text-[#0046bb] trnsitionAll" />
      </div>

      <div className="item_form w-[90%] flex md:hidden flex-row flex-wrap justify-between items-center pb-[1rem]">
        <h1 className='text-[1.2rem] font-extrabold'> 
          Login
        </h1>
        <RiCloseFill onClick={() => onClose(false)} className="icon_close text-[1.5rem] cursor-pointer font-extrabold text-slate-300 hover:text-[#0046bb] trnsitionAll" />
      </div>

      <hr className='flex flex-wrap w-full mb-[0.3rem]' />
      <form onSubmit={handleSubmit} className="m-0 w-full flex flex-col justify-between">
        <div className="input_box flex items-center trnsitionAll px-[1rem] rounded-xl my-[0.6rem] fontCabin text-[1rem] bg-gradient-to-r from-[#e5efff] to-[white] border-2  hover:border-[#0046bb] left-[23rem] top-[1.2rem]">
          <input className="h-10 w-full border-none text-black focus:outline-none focus:text-black bg-transparent"
            name="email" 
            value={data.email} 
            type="email" 
            onChange={handleDataInput} 
            placeholder="Email Address" 
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,}$" required />
          <HiOutlineMail className="icon_form left-[23rem] top-[1.2rem] text-[1.3rem] text-[#0046bb]"/>
        </div>

        <div className="input_box flex items-center trnsitionAll px-[1rem] rounded-xl my-[0.6rem] fontCabin text-[1rem] bg-gradient-to-r from-[#e5efff] to-[white] border-2  hover:border-[#0046bb] left-[23rem] top-[1.2rem]">
          <input 
            className="h-10 w-full border-none text-black focus:outline-none focus:text-black bg-transparent"
            name="password" 
            value={data.password} 
            type={(showIcon === false) ? 'password':'text'}  
            onChange={handleDataInput} 
            placeholder="Password" required />
          {
            (showIcon === false) ?
              <FiEyeOff 
                className="icon_form left-[23rem] top-[1.2rem] text-[1.3rem] cursor-pointer text-[#0046bb]"
                onClick={handleShowIcon} /> :
              <FiEye 
                className="icon_form left-[23rem] top-[1.2rem] text-[1.3rem] cursor-pointer text-[#0046bb]"
                onClick={handleShowIcon} />
          }
        </div>

        <div className="googleBtn flex flex-row justify-between items-center mb-[1rem]">

          <button 
            type="submit" 
            className="button flex self-center items-center justify-center text-white hover:text-[#22cbc0] text-[1rem] h-10 w-[45%] my-[0.8rem] px-[1rem] cursor-pointer rounded-xl fontCabin font-extrabold trnsitionAll borderButton2 shadowNavbar2 hover:borderItems bg-[#22cbc0] hover:bg-transparent">
            Login
          </button>
          
          <Link 
            to="/Regist"
            className="buttonCr flex self-center items-center justify-center text-white hover:text-[#5e39f0] text-[0.9rem] h-10 w-[45%] my-[0.8rem] px-[1rem] cursor-pointer rounded-xl fontCabin font-extrabold trnsitionAll borderButton shadowNavbar hover:borderItems2 bg-[#5e39f0] hover:bg-transparent"
            onClick={() => onClose(false)}
            // to="/Register"
            >
            Create Account
          </Link>

        </div>
          <GoogleButton onClick={handleGoogle} />
      </form>
    </div>
  );
};

export default Login;
