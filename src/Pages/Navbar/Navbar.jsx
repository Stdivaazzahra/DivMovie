import "./Navbar.css"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../Login/Login';
import Register from '../Register/Register';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [isOpenRes, setIsOpenRes] = useState(false);
  const [setIsOpenGlg] = useState(false);
  const credential = localStorage.getItem('credential');
  const navigate = useNavigate();

  return (
    <div>
        <div className="NavbarWrap fixed z-50 overflow-hidden w-full bg-[#206695] text-[#ffffff]">
            <Link className="NavbarTitle" to="/">
                <h1>DivMovie</h1> 
            </Link>
            <div className="navbarPage">
                <Link className='AllMovie' to="/AllMovies">
                    <h2>
                    Discover
                    </h2>
                </Link>
                <Link className='UpComing' to="/UpComing">
                <h2>
                    UpComing
                    </h2> 
                </Link>
                <Link className='Tv' to="/Tv">
                <h2>
                    Tv Shows
                    </h2> 
                </Link>
            </div>
            
            <div className='LRBtn'>
                {credential ? (
                <>
                    <span className="name">{localStorage.getItem('name')}</span>
                    <img className="avatar" src="https://i.pinimg.com/originals/87/25/26/87252688f7652c9e5c777e0c735cf4fb.jpg" alt="avatar user" />
                    <span
                    onClick={() => {
                        localStorage.clear();
                        navigate('/');
                    }}
                    className="nameLog"
                    >
                    LOGOUT
                    </span>
                </>
                ) : credential ? (
                <>
                    <span className="name"> {localStorage.getItem('given_name')} </span>
                    <img className="avatar" src="https://i.pinimg.com/originals/87/25/26/87252688f7652c9e5c777e0c735cf4fb.jpg" alt="avatar user" />
                    <span
                    onClick={() => {
                        localStorage.clear();
                        navigate('/');
                    }}
                    className="nameLog"
                    >
                    LOGOUT
                    </span>
                </>
                ) : (
                <>
                    <button onClick={() => setIsOpen(true)} className="login">
                    Login
                    </button>
                    <GoogleOAuthProvider onClick={() => setIsOpenGlg(true)} />
                    <button onClick={() => setIsOpenRes(true)} className="register">
                    Register
                    </button>
                </>
                )}
          </div>
        </div>

        <Login open={isOpen} onClose={setIsOpen} />
        <Register openRes={isOpenRes} onCloseRes={setIsOpenRes} />    
      </div>
  );
};

export default Navbar