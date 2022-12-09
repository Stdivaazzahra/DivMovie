import "./Navbar.css"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../Login/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BiLogIn, BiLogOut, BiMenu } from 'react-icons/bi';
// import { BsMenuButtonWideFill } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';

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
        <div className="NavbarWrap z-[99999] fixed px-4 top-0 py-2 md:px-[80px] bg-[#0d1d5f] text-[#ffffff] flex flex-row justify-between w-full font-extrabold shadowNavbar">
            <Link className="NavbarTitle fontRubik trnsitionAll text-[1.8rem] text-white hover:text-[#22cbc0] hover:shadow1" to="/">
                <h1>DivMovie</h1> 
            </Link>
            <div className={`navbarPage trnsitionAll z-10 p-2 md:p-0 flex flex-col justify-between w-[20rem] text-white shadowH2 bg-[#0d1d5f] md:flex-row absolute bottom-[-398%] ${menuClicked ? "right-0":"right-[-100vw]"} md:static`}>
                <Link to="/AllMovies">
                    <h2 className='AllMovie fontCabin text-[1.1rem] mt-[0.5rem] trnsitionAll text-white hover:text-[#22cbc0] hover:shadowNavbarText'>
                    Discover
                    </h2>
                </Link>
                <Link to="/UpComing">
                <h2 className='UpComing fontCabin text-[1.1rem] mt-[0.5rem] trnsitionAll text-white hover:text-[#22cbc0] hover:shadowNavbarText'>
                    UpComing
                    </h2> 
                </Link>
                <Link to="/Tv">
                <h2 className='Tv fontCabin text-[1.1rem] mt-[0.5rem] trnsitionAll text-white hover:text-[#22cbc0] hover:shadowNavbarText'>
                    Tv Shows
                    </h2> 
                </Link>
                {credential ? (
                <div className="flex md:hidden w-full items-center justify-center flex-col p-3 md:p-0">
                    {/* <span className="name">{localStorage.getItem('name')}</span> */}
                    <img 
                        className="avatar w-[50px] h-[50px] rounded-full object-cover mx-[1rem]" 
                        src="https://i.pinimg.com/originals/87/25/26/87252688f7652c9e5c777e0c735cf4fb.jpg" alt="avatar user" />
                    <span
                    onClick={() => {
                        localStorage.clear();
                        navigate('/');
                    }}
                    className="nameLog w-fit mt-[0.5rem] md:mt-0 flex flex-row gap-[1rem] h-[40px] text-white bg-[#22cbc0] rounded-xl px-[10px] font-semibold cursor-pointer items-center fontCabin trnsitionAll borderButton2 shadowNavbar2 hover:borderItems hover:bg-transparent"
                    >
                        LogOut
                        <BiLogOut className="font-black text-[1.4rem]"/>
                    </span>
                </div>
                ) : (
                <div className="w-full md:hidden flex items-center justify-center my-6">
                    <button 
                        onClick={() => setIsOpen(true)} 
                        className="login w-fit flex flex-row gap-[1rem] h-[40px] text-white bg-[#22cbc0] rounded-xl px-[10px] font-semibold cursor-pointer items-center fontCabin trnsitionAll borderButton2 shadowNavbar2 hover:borderItems hover:bg-transparent">
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
                    <span className="name flex items-center justify-center text-white trnsitionAll fontCabin shadowH2 uppercase ">
                        {localStorage.getItem('name')}
                    </span>
                    <img 
                        className="avatar w-[50px] h-[50px] rounded-full object-cover mx-[1rem]" 
                        src="https://i.pinimg.com/originals/87/25/26/87252688f7652c9e5c777e0c735cf4fb.jpg" alt="avatar user" />
                    <span
                    onClick={() => {
                        localStorage.clear();
                        navigate('/');
                    }}
                    className="nameLog flex items-center justify-center text-white shadowH2 trnsitionAll cursor-pointer fontCabin hover:shadowNavbarText uppercase hover:text-[#22cbc0]"
                    >
                    LogOut
                    </span>
                </>
                ) : (
                <>
                    <button 
                        onClick={() => setIsOpen(true)} 
                        className="login hidden md:flex h-[40px] text-white bg-[#22cbc0] rounded-xl px-[10px] font-semibold cursor-pointer  items-center flex-row-reverse fontCabin trnsitionAll borderButton2 shadowNavbar2 hover:borderItems hover:bg-transparent">
                        <BiLogIn className="font-black text-[1.4rem]"/>
                    </button>
                    <GoogleOAuthProvider onClick={() => setIsOpenGlg(true)} />
                </>
                )}
            </div>

            <div className="mobile md:hidden flex items-center justify-center text-white ">
            {
                menuClicked ? 
                (
                    <button 
                        className="login h-[40px] text-white bg-[#22cbc0] rounded-xl px-[10px] font-semibold cursor-pointer flex items-center flex-row-reverse fontCabin trnsitionAll borderButton2 shadowNavbar2 hover:borderItems hover:bg-transparent" 
                        onClick={showNavbar}>
                        <RiCloseFill className="font-black text-[1.4rem]"/>
                    </button>
                ) : 
                    <button 
                        className="login h-[40px] text-white bg-[#22cbc0] rounded-xl px-[10px] font-semibold cursor-pointer flex items-center flex-row-reverse fontCabin trnsitionAll borderButton2 shadowNavbar2 hover:borderItems hover:bg-transparent" 
                        onClick={showNavbar}>
                        <BiMenu className="font-black text-[1.4rem]"/>
                    </button>
            }
            </div>
        </div>

        <Login open={isOpen} onClose={setIsOpen} />
    </nav>
  );
};

export default Navbar