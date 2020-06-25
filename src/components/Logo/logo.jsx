import React from 'react'
import icon from './../../assets/logoIcon.svg'
import './logo.css'

function Logo() {
    return (
        <div className='logo'>
            <div className="logoHover"></div>
            <div className="firstText">
                Todo
            </div>

            <div className="secondText">
                ET
            </div>
            <img src={icon} alt="icon" className="icon"/>
        </div>
    )
}

export default Logo
