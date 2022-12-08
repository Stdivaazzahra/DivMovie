import React from 'react'
import { GiMapleLeaf } from 'react-icons/gi';
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <div className="footer_wrap m-0 p-0 h-[2rem] bg-[#081548]">
            <div className="footer_item flex justify-center items-center flex-wrap">
                <GiMapleLeaf className="footer_icon text-white relative"/>
                <h1 className='mt-[0.3rem] text-white text-[1.1rem] px-[0.3rem]'>
                  StDivaa
                </h1>
                <GiMapleLeaf className="footer_icon text-white relative"/>
            </div>
        </div>
    </div>
  )
}

export default Footer