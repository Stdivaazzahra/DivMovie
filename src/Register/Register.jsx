import React, { useState, useEffect  } from 'react';
import './Register.css';
import { CgCloseO } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { BsFillCameraFill } from 'react-icons/bs';
// import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUserRegist } from '../../App/Counter/loginSlice';

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import "./Register.css";

const Register = ({ openRes, onCloseRes }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    // if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user)
    onCloseRes(false) 
    navigate("/");
  }, [user, loading, navigate, onCloseRes]);
  
  // const API_ENDPOINT = `https://notflixtv.herokuapp.com/api/v1/users`;
  const dispatch = useDispatch();
  const [preview, setDatapreview] = useState(null);
  const [image, setDataImage] = useState(null);
  const [msg, setMsg] = useState('');

  // const [data, setData] = useState({
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   password: '',
  //   password_confirmation: '',
  // });

  if (!openRes) return null;
  // const handleDataInput = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // console.log(image);


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(getUserRegist({
  //     first_name: data.first_name,
  //     last_name: data.last_name,
  //     displayName: data.name,
  //     image: image,
  //     email: data.email,
  //     password: data.password,
  //     password_confirmation: data.password_confirmation,
  //   })
  //   );
  // };
  

  // const dataSend = (e) => {
  //   e.preventDefault();
  //   const user = {
  //     first_name: data.first_name,
  //     last_name: data.last_name,
  //     image: image,
  //     email: data.email,
  //     password: data.password,
  //     password_confirmation: data.password_confirmation,
  //   };
  //   axios
  //     .post(API_ENDPOINT, user)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };
  
  if (msg) {
    setTimeout(() => {
      setMsg('');
    }, 10000);
  }
  return (
    <div className={`wrap_form_Res`}>
      <span className={`error ${msg && 'muncul'}`}>{msg} !!</span>
      <div className="item_form_Res">
        <h1> Register With Email And Password</h1>
        <CgCloseO onClick={() => onCloseRes(false)} className="icon_close text-2xl cursor-pointer" />
      </div>
      <hr />
      <div className="wrapper_form">
        <form onSubmit={(e) => register(e)}>

          {/* <div className="input_box">
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name" 
                required />
                <FaRegUser className="icon_form" />
          </div> */}

          <div className="input_box">
            <input type="text"
                className="register__textBox h-10 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address" 
                required />
                <AiOutlineMail className="icon_form" />
          </div>

          <div className="input_box">
            <input  type="password"
                className="register__textBox h-10 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                required />
                <FiEyeOff className="icon_form" />
          </div>

          <button type="submit" className="button w-full h-10 bg-[#b50e0e] text-white">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
