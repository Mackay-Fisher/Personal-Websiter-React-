import React from "react";
import '../assets/CSS/proejects.css'
import {useGlobalState,setGlobalState} from '../components/componet.js'
import Iphone from "../components/iphone";
import phoneimage from '../assets/images/phonework.png'
import webimage from '../assets/images/webwork.png'
import Computer from "../components/computer";
import web from '../assets/images/scrap.png'
import Carousel from "../components/car";
import server from '../assets/images/data-center_2888736.png'
import form from '../assets/images/form.png'
import mail from '../assets/images/mail.png'
import selfsignup from '../assets/images/self-sign-up.png'
import {useEffect,useState} from 'react'
function WProject(){
    const[set] = useGlobalState('work');
    const Tch = () =>{
        setGlobalState('work',!set)
    }
    const Per = () =>{
        setGlobalState('work',false)
    }
    const Wor = () =>{
        setGlobalState('work',true)
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const divStyle = {
        top: windowWidth >= 1360 ? '250px' : '100px',
    };

    const desc ={
        padding:  windowWidth >= 1360 ? '5% 8% 5% 8%' : '5% 12% 5% 12%'
    }

    
    return(
        <div>
            <div className="pro w">
            <div className="aboutmetext">
                    <h1 className="AMT">Projects</h1>
                    <div className="divider"></div>
                    <div className="tog">
            <div class="tradio-inputs">
                <label class="tradio">
                    <input type="radio" name="radio"  onClick={Per}/>
                    <span class="tname">Personal</span>
                </label>
                <label class="tradio">
                    <input type="radio" name="radio" checked="true" onClick={Wor}/>
                    <span class="tname">Professional</span>
                </label>
                </div>
            </div>
                    </div>     
            <div className="project1" >
            <div className="pimageb phone">
                    <div className="flexhold">
                    <div className="computer">
                    <Computer image={webimage}/>
                    </div>
                    <div className="phonehold">
                    <Iphone/>
                    </div>
                    </div>
                    
                </div>
                <div className="text-hold phone">
                    <div className="description" style={desc}>
                    <h1 className="project-title">ROI Calculator</h1>
                    <div className="type">Full Stack Responsive Design</div>
                    <div className="projxplaniation">
                    <ul className="Projectbullet">
                            <p><b>Working for a funded tech start-up, I had the opportunity to work on intensive projects early on. I took lead on the ROI calculator to:</b></p>
                            <li>
                            create a web app that collected customer inputs to help them calculate their return on investment in real-time
                            </li>
                            <li>
                            build automations to send follow up emails and marketing material
                            </li>
                        </ul>
                        <ul className="Projectbullet">
                            <p><b>I accomplished this by:</b></p>
                            <li>
                            working with the Firebase database backend 
                            </li>
                            <li>
                            managing cloud function to carry real-time input database tracking as well as email automation
                            </li>
                            <li>
                            identifying key performance metrics for customers to track their customers’ spend with them
                            </li>
                            <li>
                            highlighting data-driven opportunities for customers to increase their profits using our product
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

            <div className="project1">
                <div className="pimageb phonea">
                    <div className="flexholda" style={divStyle}>
                    <div className="computera">
                    <Computer image={selfsignup}/>
                    </div>
                    <div className="serverhold">
                    <img src={server} className="server"/>
                    </div>
                    </div>
                    
                </div>
                <div className="text-hold phone">
                    <div className="description" style={desc}>
                    <h1 className="project-title">Free Trial Tool</h1>
                    <div className="type">Fullstack Design</div>
                    <div className="projxplaniation">
                    <ul className="Projectbullet">
                            <p><b>I also had the opportunity to lead Self Sign Up, similar to a free trial of our product. I seized the latitude offered to me to design and implement a solution by:</b></p>
                            <li>
                            creating a way to generate temporary instance programmatically to demonstrate the effectiveness of our company’s CMS through the Firebase Rest API resources
                            </li>
                            <li>
                            working with collages to integrate native software within the instance
                            </li>
                            <li>
                            demonstrating realtime rending through CDN services
                            </li>
                            <li>
                            layering integrations to drive sales
                            </li>
                        </ul>
                        <ul className="Projectbullet">
                            <p><b>Working with Google authentication and Firebase cloud functions to:</b></p>
                            <li>
                            generate credentials and access points 
                            </li>
                            <li>
                            deliver end-to-end security for users when accessing our temporary sites
                            </li>
                            <li>
                            automate package delivery 
                            </li>
                            <li>
                            enable trial periods
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
       
    )
}

export default WProject