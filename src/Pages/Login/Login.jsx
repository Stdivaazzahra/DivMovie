import React, { useState } from 'react';
import './Login.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { CgCloseO } from 'react-icons/cg';
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
    <div className="wrap_form">
      <div className="item_form">
        <h1> Log In to Your Account</h1>
        <CgCloseO onClick={() => onClose(false)} className="icon_close text-2xl cursor-pointer" />
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="input_box">
          <input className="h-10 w-full" name="email" value={data.email} type="email" onChange={handleDataInput} placeholder="Email Address" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,}$" required />
          <AiOutlineMail className="icon_form" />
        </div>

        <div className="input_box">
          <input className="h-10 w-full" name="password" value={data.password} type={(showIcon === false) ? 'password':'text'}  onChange={handleDataInput} placeholder="Password" required />
          {
            (showIcon === false) ?
              <FiEyeOff 
                className="icon_form"
                onClick={handleShowIcon} /> :
              <FiEye 
                className="icon_form"
                onClick={handleShowIcon} />
          }
        </div>

        <div className="googleBtn">

          <button type="submit" className="button w-1/2 h-10 bg-[#0c7b93] text-white mb-[1.5rem]">
            Login
          </button>
          
          <Link 
            to="/Regist"
            className="buttonCr w-2/5 h-8 text-[#0c7b93] mb-[1.5rem] font-extrabold"
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
