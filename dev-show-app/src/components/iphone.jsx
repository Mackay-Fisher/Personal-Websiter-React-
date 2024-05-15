import React from "react";
import '../assets/CSS/iphone.css'
import phoneimage from '../assets/images/phonework.png'
export default function Iphone(){
    return( <div>
        <div class="iphone-x">
            <img className="phone-image" src={phoneimage}/>
        <i>Speaker</i>
        <b>Camera</b>
    
        </div>
    </div>
    )
}