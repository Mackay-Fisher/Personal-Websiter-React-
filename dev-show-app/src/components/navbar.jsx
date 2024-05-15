import React from 'react'
import '../assets/CSS/navbar.css'
import Radio from './radio'
import logo from '../assets/images/logo.png'
function Navbar(){

    return(
        <div className='navbar'>
            <div className='navbar-inner'>
                <Radio/>
            </div>
        </div>
    )
}

export default Navbar