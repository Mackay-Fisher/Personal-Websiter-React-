import React from "react";
import {Tilt} from 'react-tilt'
import '../assets/CSS/contact.css'
import {motion, animate, transform, stagger, frame, cubicBezier, useScroll} from "framer-motion"
import ML from '../assets/images/coding_4616734.png'
import WEB from '../assets/images/app-development_7991055.png'
import SOFT from '../assets/images/computer_2105023.png'
import {setGlobalState, useGlobalState} from '../components/componet'
import Footer from "../components/footer";
import emailjs from 'emailjs-com';
function Contact(){
    const [N] =useGlobalState('name');
    const [E] =useGlobalState('email');
    const [M] =useGlobalState('message');
    const getname = (e) =>{
        setGlobalState('name',e.target.value);
    }
    const getemail = (e) =>{
        setGlobalState('email',e.target.value);
    }
    const getmessage = (e) =>{
        setGlobalState('message',e.target.value);
    }
    
    const submit = (e) =>{
        e.preventDefault();
        if(N==='' || E==='' || M===''){
            console.log('must fill out whole form')
        }else{
        var templateParams = {
            to_name: 'Mackay Fisher',
            from_name: N,
            email: E,
            message: M,
        };
         
        emailjs.send('service_wqpbbhv', 'template_s6fttwq', templateParams, 'TNrG42-0pJFOaXN4P')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });

        setGlobalState('name','');
        setGlobalState('email','')
        setGlobalState('message','')
    }
}
    return(
        <div>
            <div className="contact">
                <div className="aboutmetext abc">
                    <h1 className="AMT">Contact</h1>
                    <div className="divider"></div>
                    <p className="aboutintro">Feel free to contact me by filling out this form</p>
                </div>
                <form className="form">
                    <div className="enter">
                        <p>Name</p>
                        <input required type="text" placeholder="Enter Your Name" className="inp" value={N} onChange={getname}/>
                    </div>

                    <div className="enter">
                        <p>Email</p>
                        <input required type="text" placeholder="Enter Your Email" className="inp" value={E} onChange={getemail}/>
                    </div>

                    <div className="enter c">
                        <p>Message</p>
                        <textarea required cols="30" rows="10" class="inp" placeholder="Enter Your Message" name="message" id="message" spellCheck="true" value={M} onChange={getmessage}></textarea>
                    </div>
                    <div className="bx">
                    <button className="but" onClick={submit}>
                        <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svga">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                            </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

/**
 * style={{mixBlendMode: "normal", textAnchor ="none", fontSize="none",  fontWeight="none", fontFamily="none", strokeDashoffset="0", strokeDasharray="", strokeMiterlimit="10", strokeLinejoin="miter", strokeLinecap="butt", strokeWidth="1", stroke="none", fillRule="nonzero"}}
 */