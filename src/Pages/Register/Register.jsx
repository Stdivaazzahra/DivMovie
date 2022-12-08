import React, { useState } from 'react';
// import './Register.css';
// import { CgCloseO } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { getUserRegist } from '../../App/Counter/loginSlice';
import bckRe from './image/regist.png';

// import './Register.css';

const Register = () => {
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


  return (
      <div className='w-full h-screen overflow-hidden flex-1 flex'>
        <div className='w-[50%] flex-[0.8]  h-full flex  overflow-hidden'>
          <img className='w-full h-auto object-contain' src={bckRe} alt="BackgroundRes" />
        </div>

          <div className="w-[40%] flex-[0.2] h-full p-[2rem] bg-[#e9e8e8] flex flex-col justify-center items-center overflow-hidden m-0">
            <span className={`absolute top-12 left-[-100vh] ${msg && 'muncul'}`}>{msg} !!</span>

            <div className="w-full h-full flex justify-center flex-col">
            <div className="flex flex-row flex-wrap justify-start font-semibold text-xl uppercase">
              <h1> Register With Email And Password</h1>
              {/* <CgCloseO onClick={() => onCloseRes(false)} className="icon_close text-2xl cursor-pointer" /> */}
            </div>
            <hr />
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

      </div>
  );
};

export default Register;
