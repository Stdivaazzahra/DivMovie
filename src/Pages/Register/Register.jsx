import React, { useState } from 'react';
import './Register.css';
import { CgCloseO } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { getUserRegist } from '../../App/Counter/loginSlice';

import './Register.css';

const Register = ({ openRes, onCloseRes }) => {
  const dispatch = useDispatch();

  console.log(dispatch);
  const dataValue = {
    name: '',
    email: '',
    password: '',
  };
  const [data, setData] = useState(dataValue);

  const handleDataInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(getUserRegist(data));
  };

  const [msg, setMsg] = useState('');


  if (!openRes) return null;

  return (
    <div className={`wrap_form_Res`}>
      <span className={`error ${msg && 'muncul'}`}>{msg} !!</span>
      <div className="item_form_Res">
        <h1> Register With Email And Password</h1>
        <CgCloseO onClick={() => onCloseRes(false)} className="icon_close text-2xl cursor-pointer" />
      </div>
      <hr />
      <div className="wrapper_form">
        <form onSubmit={handleRegister}>
          <div className="input_box">
            <input type="text" className="h-10 w-full" name="name" value={data.name} onChange={handleDataInput} placeholder="name" required />
            <FaRegUser className="icon_form" />
          </div>

          <div className="input_box">
            <input type="text" className="register__textBox h-10 w-full" name="email" value={data.email} onChange={handleDataInput} placeholder="E-mail Address" required />
            <AiOutlineMail className="icon_form" />
          </div>

          <div className="input_box">
            <input type="password" className="register__textBox h-10 w-full" name="password" value={data.password} onChange={handleDataInput} placeholder="Password" current-password="" required />
            <FiEyeOff className="icon_form" />
          </div>

          <button type="submit" className="button w-full h-10 bg-[#0c7b93] text-white">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
