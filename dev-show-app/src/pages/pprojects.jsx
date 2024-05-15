import React from "react";
import '../assets/CSS/proejects.css'
import {useGlobalState,setGlobalState} from '../components/componet.js'
import graphml from '../assets/images/ML.png'
import gif from '../assets/images/ezgif.com-crop.gif'
import mariogif from '../assets/images/mario.gif'
import Iphone from "../components/iphone";
import react from "../assets/images/react_1183672.png"
import carving from '../assets/images/carving.gif'
import seam from '../assets/images/seam.png'
import back from '../assets/images/Background-Checks1.gif'
import Computer from "../components/computer";
import web from '../assets/images/scrap.png'
import Carousel from "../components/car";
import '../assets/CSS/tab.css'
import Tab from "../components/tab";
import {useEffect, useState} from 'react'
function PProject(){
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
        marginTop: windowWidth >= 1360 ? '100px' : '0px',
    };

    const desc ={
        padding:  windowWidth >= 1360 ? '5% 10% 5% 10%' : '5% 12% 5% 12%',
        marginLeft: windowWidth >= 1360 ? '60px' : '0px'
    }
    return(
        <div>
            <div className="pro">
            <div className="aboutmetext">
            <h1 className="AMT">Projects</h1>
            <div className="divider"></div>
            <div className="tog">
            <div class="tradio-inputs">
                <label class="tradio">
                    <input type="radio" name="radio" checked="true" onClick={Per}/>
                    <span class="tname">Personal</span>
                </label>
                <label class="tradio">
                    <input type="radio" name="radio" onClick={Wor}/>
                    <span class="tname">Professional</span>
                </label>
                </div>
            </div>
            
            </div>
            
            <div className="project1">
                <div className="pimage">
                    <div className="vertical-image"><img className='imagel' src={gif}/>
                    </div>
                    <div className="p1-image"></div>
                </div>
                <div className="text-hold">
                    <div className="description" style={desc}>
                    <h1 className="project-title">Perfect Snake</h1>
                    <div className="type">Machine Learning</div>
                    <div className="projxplaniation">
                       
                        <ul className="Projectbullet">
                            <p><b>Perfect Snake was my first toe into real machine learning waters. I learned how to:</b></p>
                            <li>
                            properly manage DNQ agents
                            </li>
                            <li>
                            create multiple randomly generated actions
                            </li>
                            <li>
                            incentivize a reward system
                            </li>
                        </ul>

                        <ul className="Projectbullet">
                        <p><b>Working with the PyTorch library, I:</b></p>
                            <li>
                            created my own agent class set to play the game 
                            </li>
                            <li>
                            used Q-learning to train behavior through each game
                            </li>
                            <li>
                            incentivize a reward system
                            </li>
                        </ul>

                        <ul className="Projectbullet">
                        <p><b>I also utilized the PyTorch library Q-trainer to:</b></p>
                            <li>
                            store and hold previous data committed to long and short term memory
                            </li>
                            <li>
                            present real-time analysis with Matplotlib
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="project1">
                <h1></h1>
                <div className="pimage c">
                    <div className="vertical-image a"><img className='imagel a' src={seam}/></div>
                    <div className="p1-image c"></div>
                </div>
                <div className="text-hold">
                    <div className="description" style={desc}>
                    <h1 className="project-title">Seam Carving</h1>
                    <div className="type">Software Engineering </div>
                    <div className="projxplaniation">
                    <ul className="Projectbullet">
                                <p><b>Seam carving was my first foray into Object Oriented Programming. I created a command line seam carver that:</b></p>
                                <li>
                                takes in designated width and height
                                </li>
                                <li>
                                removes pixel paths of least energy values until the image reaches desired size.
                                </li>
                                <li>
                                returns a carved image within that frame
                                </li>  
                        </ul>
                        <ul className="Projectbullet">
                            <p><b>The method I utilized:</b></p>
                            <li>
                            analyzed pixel variance between pixel layers 
                            </li>
                            <li>
                            calculated energy function
                            </li>
                            <li>
                            returned energy values of each pixel row
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="project1 b">
                <div className="pimaged" style={divStyle}>
                    <Computer image={web}/>
                </div>
                <div className="text-hold help">
                    <div className="description" style={desc}>
                    <h1 className="project-title">Web Scrapping</h1>
                    <div className="type">Data Science/Software-Engineering </div>
                    <div className="projxplaniation">
                        <ul className="Projectbullet">
                            <p><b>My first web scraping project utilized real world data samples to analyze profitability margins for chocolate production by:</b></p>
                            <li>
                            creating a Python web scraping software
                            </li>
                            <li>
                            reading nested HTML 
                            </li>
                            <li>
                            distributing HTML into Pandas DataFrames
                            </li>
                            <li>
                            identifying trends related to output yields and distribution costs
                            </li>
                        </ul>
                        <ul className="Projectbullet">
                            <p><b>I was able to offer further insight by:</b></p>
                            <li>
                            isolating key variables effecting profitability
                            </li>
                            <li>
                            narrowing a decision hierarchy for maximizing profitability based on location and total cost with logistics
                            </li>
                            <li>
                            demonstrating through Matplotlib the correlation between chocolate quality rating, location, and use of raw materials
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="sliderhold">
                <h1 className="project-title">More Personal Projects</h1>
            </div>
            <Carousel/>
        </div>
        </div>    
       
    )
}

export default PProject

/**<h1 className="sel"><button className="sel a b" onClick={Per}>Personal</button> | <button className="sel a c" onClick={Wor}>Work</button></h1> */