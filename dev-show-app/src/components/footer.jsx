import React from 'react'
import '../assets/CSS/footer.css'
import icon from '../assets/images/vector_284280.png'
export default function Footer(){
    return(
        <div className='footer'>
            <div className='iconhold'>
            <img src={icon} className='footericon'/>
            <p> Mackay Fisher</p>
            </div>
            <div className='flexbottom'>
                <div className='tagline'>
                <p>A software engineer and full stack | machine learning developer focused on products that elevate the human experience</p>
                </div>
                <div className='socs'>
                    <div className='ss'>
                    <p>Socials</p>
                    <p>Contact Me</p>
                    </div>
                </div>
                <div className='misalenous'>
                <p>View More</p>
                </div>
            </div>
            
        </div>
    )
}