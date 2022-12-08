import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUserRegist } from '../../App/Counter/loginSlice';
// import { Icon, IconBase, icons } from 'react-icon';
import { HiOutlineMail } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import bgR from './image/BgR-3.png'

const Regist = () => {
  const [icon, setIcon] = useState(false)
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

  const handleIcon = () => {
    setIcon(!icon)
  }

  const [msg, setMsg] = useState('');

  return (
    <div>
        <div className='w-full md:h-screen flex items-center flex-col md:flex-row-reverse'>
            <div className='w-full md:w-[50%]'>
              <img src={bgR} alt="Background Regist" />
            </div>
            <div className='bg-white w-full md:w-[50%]'>
            <span className={`absolute top-12 left-[-100vh] ${msg && 'muncul'}`}>{msg} !!</span>
              <div className='mx-[1rem] mt-[2rem] md:mx-[8rem] md:mt-[3rem]'>
                <h1 className='fontCabin font-bold shadowText text-[1.5rem]'>
                Register With Email And Password
                </h1>
                <hr className='my-[0.6rem]' />

                <form onSubmit={handleRegister}>
                  <div className="fontCabin flex flex-row items-center border-2 rounded-[5rem] my-[0.6rem] px-[1rem] bg-gradient-to-r from-[#e5efff] to-[white] hover:border-[#0046bb] transitionAll">
                    <input 
                      className="h-10 w-full bg-transparent" 
                      type="text" 
                      name="name" 
                      value={data.name} 
                      onChange={handleDataInput} 
                      placeholder="name" 
                      required />
                    <BiUser className="text-[1.2rem] text-[#0046bb]" />
                  </div>

                  <div className="fontCabin flex flex-row items-center border-2 rounded-[5rem] my-[0.6rem] px-[1rem] bg-gradient-to-r from-[#e5efff] to-[white] hover:border-[#0046bb] transitionAll">
                    <input 
                      type="text" 
                      className="h-10 w-full bg-transparent" 
                      name="email" 
                      value={data.email} 
                      onChange={handleDataInput} 
                      placeholder="E-mail Address" 
                      required />
                    <HiOutlineMail className="text-[1.2rem] text-[#0046bb]" />
                  </div>

                  <div className="fontCabin flex flex-row items-center border-2 rounded-[5rem] my-[0.6rem] px-[1rem] bg-gradient-to-r from-[#e5efff] to-[white] hover:border-[#0046bb] transitionAll">
                    <input 
                      type={(icon === false) ? 'password':'text'} 
                      className="h-10 w-full bg-transparent" 
                      name="password" 
                      value={data.password} 
                      onChange={handleDataInput} 
                      placeholder="Password" 
                      current-password="" 
                      required />
                    {
                      (icon === false) ?
                      <FiEyeOff 
                        className="text-[1.2rem] text-[#0046bb]"
                        onClick={handleIcon} /> :
                      <FiEye 
                        className="text-[1.2rem] text-[#0046bb]"
                        onClick={handleIcon} />
                    }
                  </div>

                  <button type="submit" className="fontCabin w-full h-10 hover:text-[#0046bb] font-bold bg-[#488cfd] hover:bg-transparent border-solid border-2 border-[#488cfd] hover:border-[#0046bb] rounded-[5rem] text-white transitionAll my-[0.6rem]">
                      Register Now
                  </button>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Regist