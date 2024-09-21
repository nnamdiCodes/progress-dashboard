import React from 'react'
import './Nav.css'
import { PiSlidersFill } from 'react-icons/pi'
import { IoQrCodeOutline, IoPersonOutline } from 'react-icons/io5'
import { SlGraph } from 'react-icons/sl'

const Nav = () => {
  return (
    <nav className="nav">
        <div className='nav__progressIcon'>
            <h3>P</h3>
            <div className='nav__dot'></div>
        </div>
        <div className='PiSlidersFill'>
            <PiSlidersFill className='nav__icon'/>
        </div>
        <div className='nav__qrCodeOutline'>
            <IoQrCodeOutline className='nav__qrCode'/>
        </div>
        <div className='IoPersonOutline'>
            <IoPersonOutline className='nav__icon'/>
        </div>
        <div className='SlGraph'>
            <SlGraph className='nav__icon'/>
        </div>
    </nav>
  )
}

export default Nav