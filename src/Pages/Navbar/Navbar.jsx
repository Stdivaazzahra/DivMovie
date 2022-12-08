import "./Navbar.css"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../Login/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { RiCloseCircleLine } from 'react-icons/ri';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [setIsOpenGlg] = useState(false);
    const credential = localStorage.getItem('credential');
    const navigate = useNavigate();
    const [menuClicked, setMenuClicked] = useState(false)

    const showNavbar = () => {
        setMenuClicked(!menuClicked)
    };

  return (
    <nav className="w-full">
        <div className="NavbarWrap z-[99999] fixed px-4 top-0 py-2 md:px-[80px] w-full bg-[#0d1d5f] text-[#ffffff]">
            <Link className="NavbarTitle " to="/">
                <h1>DivMovie</h1> 
            </Link>
            <div className={`navbarPage tansition-all duration-1000 ease-out z-10 p-2 md:p-0 flex flex-col bg-[#0d1d5f] md:flex-row absolute bottom-[-351%] ${menuClicked ? "right-0":"right-[-100vw]"} md:static`}>
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
                {credential ? (
                <div className="flex md:hidden w-full items-center justify-center flex-col p-3 md:p-0">
                    {/* <span className="name">{localStorage.getItem('name')}</span> */}
                    <img className="avatar" src="https://i.pinimg.com/originals/87/25/26/87252688f7652c9e5c777e0c735cf4fb.jpg" alt="avatar user" />
                    <span
                    onClick={() => {
                        localStorage.clear();
                        navigate('/');
                    }}
                    className="nameLog"
                    >
                        <BiLogOut/>
                    LogOut
                    </span>
                </div>
                ) : (
                <div className="w-full md:hidden flex items-center justify-center my-6">
                    <button onClick={() => setIsOpen(true)} className="login w-fit flex flex-row gap-[1rem]">
                        Login
                    <BiLogIn className="font-black text-[1.4rem]"/>
                    </button>
                    <GoogleOAuthProvider onClick={() => setIsOpenGlg(true)} />
                    
                   
                </div>
                )}
            </div>
            
            <div className='hidden md:flex'>
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
                    LogOut
                    </span>
                </>
                ) : (
                <>
                    <button onClick={() => setIsOpen(true)} className="login hidden md:flex ">
                        <BiLogIn className="font-black text-[1.4rem]"/>
                    </button>
                    <GoogleOAuthProvider onClick={() => setIsOpenGlg(true)} />
                    
                   
                </>
                )}
          </div>
          {/* <button className="mobileBtn" onClick={showNavbar}>
                <RiCloseCircleLine/>
            </button> */}

          {/* <div className="mobile">
            <div id="bar" className={this.state.clicked ? <BsMenuButtonWideFill/> : <RiCloseCircleLine/>}>
            </div>
          </div> */}

          <div className="mobile md:hidden flex items-center justify-center text-white ">
            {
                menuClicked ? ( <button className="login" onClick={showNavbar}>
                <RiCloseCircleLine/>
                    </button>): <button className="login" onClick={showNavbar}>
                        <BsMenuButtonWideFill/>
                    </button>
            }
            
           
          </div>


        {/* </nav> */}
        </div>

        <Login open={isOpen} onClose={setIsOpen} />
        {/* <Register openRes={isOpenRes} onCloseRes={setIsOpenRes} />     */}
      </nav>
  );
};

export default Navbar