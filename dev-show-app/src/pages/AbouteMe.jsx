import React from "react";
import {Tilt} from 'react-tilt'
import '../assets/CSS/Track.css'
import '../assets/CSS/about.css'
import {motion, animate, transform, stagger, frame, cubicBezier, useScroll} from "framer-motion"
import ML from '../assets/images/coding_4616734.png'
import WEB from '../assets/images/app-development_7991055.png'
import SOFT from '../assets/images/computer_2105023.png'
import {useEffect,useState} from 'react'
import { Link, Element } from 'react-scroll';
import {useGlobalState,setGlobalState} from '../components/componet.js'
import cloud from '../assets/images/cloud-computing_671242.png'
import SQL from '../assets/images/database_6840465.png'
import Cyber from '../assets/images/cyber-security_2092757.png'
import webscrap from '../assets/images/promotion_2376376.png'
import Ret from '../assets/images/science_5369947.png'
import API from '../assets/images/framework_4727212.png' 
function AboutMe(){
    const [isHovereda, setIsHovereda] = useState(false);

    const handleMouseEntera = () => {
        setIsHovereda(true);
    }

    const handleMouseLeavea = () => {
        setIsHovereda(false);
    }

    const [isHoveredb, setIsHoveredb] = useState(false);

    const handleMouseEnterb = () => {
        setIsHoveredb(true);
    }

    const handleMouseLeaveb = () => {
        setIsHoveredb(false);
    }

    const [isHoveredc, setIsHoveredc] = useState(false);

    const handleMouseEnterc = () => {
        setIsHoveredc(true);
    }

    const handleMouseLeavec = () => {
        setIsHoveredc(false);
    }

    const [isHoveredd, setIsHoveredd] = useState(false);

    const handleMouseEnterd = () => {
        setIsHoveredd(true);
    }

    const handleMouseLeaved = () => {
        setIsHoveredd(false);
    }

    const [isHoverede, setIsHoverede] = useState(false);

    const handleMouseEntere = () => {
        setIsHoverede(true);
    }

    const handleMouseLeavee = () => {
        setIsHoverede(false);
    }

    const [isHoveredf, setIsHoveredf] = useState(false);

    const handleMouseEnterf = () => {
        setIsHoveredf(true);
    }

    const handleMouseLeavef = () => {
        setIsHoveredf(false);
    }


    const [skillholdWidth, setSkillholdWidth] = useState(null);
    const [skills] = useGlobalState('skills')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const divStyle = {
        minWidth: windowWidth <= 1000 ? '800px' : '450px',
    };

    const Skills = () =>{
        setGlobalState('skills',!skills)
    }
    useEffect(() => {
      const skillhold = document.querySelector('.skillhold');
      const hiddenb = document.querySelector('.hiddenb');
      const hiddenc = document.querySelector('.hiddenc');
      const skilla = document.querySelector('.skill.a');
      const skillb = document.querySelector('.skill.b');
      const skillc = document.querySelector('.skill.c');
  
      if (skillhold) {
        const width = skillhold.getBoundingClientRect().width;
        hiddenb.style.left = `-${width/3.3}px`; // Set left property of hiddenb
        hiddenc.style.left = `-${width/1.63}px`;
        skilla.style.width = `${width-width/8}px`
        skillb.style.width = `${width-width/8}px`
        skillc.style.width = `${width-width/8}px`
        setSkillholdWidth(width);
      } else {
        console.error('Element with class "skillhold" not found.');
      }
  
      // Optional: If you want to update the width on window resize
      function handleResize() {
        if (skillhold) {
          const width = skillhold.getBoundingClientRect().width;
          hiddenb.style.left = `-${width/3.3}px`; // Set left property of hiddenb
            hiddenc.style.left = `-${width/1.63}px`;
            skilla.style.width = `${width-width/8}px`
            skillb.style.width = `${width-width/8}px`
            skillc.style.width = `${width-width/8}px`
          setSkillholdWidth(width);
        }
      }
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  
    }, [Skills]);

    
    return(
        <div>
            <div className="about">
                <div className="aboutmetext">
                    <h1 className="AMT">About Me</h1>
                    <div className="divider"></div>
                </div>
                <div className="aboutmebar">
                    <div className="title" style={divStyle}>
                        <motion.div>
                            <h1 className="header">Get to know me!</h1>
                            <p className="in a"> 👋 Hey there! I'm a dedicated software developer with a passion for code and personal growth. Currently, I'm a junior at Texas A&M taking advantage of a full scholarship, pursuing dual majors in <b>Computer Science</b> and <b>Applied Mathematics</b> with a 4.0 GPA.</p>
                        </motion.div>
                        <motion.div>
                        <p className="in a">My professional and personal projects have been an innovation playground for me. <b>Machine Learning</b> and <b>Natural Language Processing</b> fascinate me. Drawing on a solid foundation of math and an unyielding pursuit of optimization, I work to simplify the complex and transform raw data into insight. I've also honed skills in modern frameworks, navigated the world of <b>REST API</b> calls, and followed my curiosity into <b>mobile applications</b> to build bridges between user experience and technical excellence.</p>
                        </motion.div>
                        <motion.div>
                        <p className="in a">Not everything is about personal development – I also believe in collective growth. I'm on the lookout for opportunities to collaborate, learn, and evolve alongside fellow enthusiasts, feeding a healthy cycle of personal and collective growth.</p>
                        </motion.div>
                        <motion.div>
                        <p className="in a">So whether you’re here to explore my projects, share insights, or discuss potential collaborations, I'm excited to connect with you. <b>Feel free to reach out –</b> cheers to progress, passion, and perpetual learning! </p>
                        <button className='con a' onClick={Skills}>{skills? 'Skills' : 'Certificates'} </button>
                        </motion.div>
                    </div>
                    {skills?                     <div className="certificates">
                        <h1 className="header a">Certificates/Courses</h1>
                        <div className="skillholda">
                        <div className="tilta"onMouseEnter={handleMouseEntera} 
                        onMouseLeave={handleMouseLeavea}>
                        <Tilt>
                        <div className="sab">
                        {isHovereda ? <div className="certa">
                            <h1>AWS</h1>
                            <h2>Cloud Practitioner</h2>
                            <p>Foundational, high-level understanding of AWS Cloud, services, structure and terminology</p>
                        </div> : <div className="certhold"><img src={cloud} className='sbimage a'/><h1>Cloud</h1>
                        </div>}
                        </div>
                        </Tilt>
                        </div>
                        <div className="tilta"onMouseEnter={handleMouseEnterb} 
                        onMouseLeave={handleMouseLeaveb}>
                        <Tilt>
                        <div className="sab">
                        {isHoveredb ? <div className="certa">
                        <h1>Code Academy</h1>
                            <h2>SQL</h2>
                            <p>Foundational knowledge of general queries, aggregate functions and multiple table analysis</p>
                        </div> : <div className="certhold"><img src={SQL} className='sbimage a'/><h1>Database</h1>
                        </div>}
                        </div>
                        </Tilt>
                        </div>
                        <div className="tilta"onMouseEnter={handleMouseEnterc} 
                        onMouseLeave={handleMouseLeavec}>
                        <Tilt>
                        <div className="sab">
                        {isHoveredc ? <div className="certa">
                        <h1>Code Academy</h1>
                            <h2>Cyber Security</h2>
                            <p>Gained fundamental information in pen testing techniques, malware and application|network attacks</p>
                        </div> : <div className="certhold"><img src={Cyber} className='sbimage a'/><h1>Cyber Security</h1>
                        </div>}
                        </div>
                        </Tilt>
                        </div>
                        <div className="tilta"onMouseEnter={handleMouseEnterd} 
                        onMouseLeave={handleMouseLeaved}>
                        <Tilt>
                        <div className="sab">
                        {isHoveredd ? <div className="certa">
                        <h1>Code Academy</h1>
                            <h2>Web Scraping</h2>
                            <p>Further utilization of python beautiful soup library to parse html elements and present data</p>
                        </div> : <div className="certhold"><img src={webscrap} className='sbimage a'/><h1>Data Science</h1>
                        </div>}
                        </div>
                        </Tilt>
                        </div>
                        <div className="tiltb" onMouseEnter={handleMouseEntere} 
                        onMouseLeave={handleMouseLeavee}>
                            <Tilt>
                            <div className="sab">
                            {isHoverede ? <div className="certa">
                            <h1>Scrimba</h1>
                            <h2>React</h2>
                            <p>Practical knowledge of components, router, hooks, redux and data streams through API as well as fixed sets</p>
                            </div> : <div className="certhold"><img src={Ret} className='sbimage a'/><h1>Front End</h1>
                        </div>}
                            </div>
                            </Tilt>
                        </div>
                        <div className="tiltc"onMouseEnter={handleMouseEnterf} 
                        onMouseLeave={handleMouseLeavef}>
                        <Tilt>
                        <div className="sab">
                        {isHoveredf ? <div className="certa">
                        <h1>Code Academy</h1>
                            <h2>REST API</h2>
                            <p>Portfolio project managing a restaurant using REST API calls in express.js check it out in projects tab</p>
                        </div> : <div className="certhold"><img src={API} className='sbimage a'/>
                        <h1>Back End</h1>
                        </div>}
                        </div>
                        </Tilt>                            
                        </div>
                        </div>
                    </div>:<div className="skills">
                        <h1 className="header a">My Skills</h1>
                        <div className="skillhold">
                        <div className="tilta">
                        <Tilt>
                        <div className="sa">
                        <div className="certhold a"><img src={WEB} className='sbimage a'/><h1>Web|App Development</h1>
                        </div>
                        </div>
                        </Tilt>
                        <div className="hiddena">
                        <div className="hidetitle">
                        <h1 className="header b">Web|App Development</h1>
                                </div>
                                <div className="skill a">
                                    <div className="skp">Javascript</div>
                                    <div className="skp">HTML</div>
                                    <div className="skp">Tailwind/CSS</div>
                                    <div className="skp">SASS</div>
                                    <div className="skp">React</div>
                                    <div className="skp">React Native</div>
                                    <div className="skp">Node.js</div>
                                    <div className="skp">Next.js</div>
                                    <div className="skp">Three.js</div>
                                    <div className="skp">Express</div>
                                    <div className="skp">MongoDB</div>
                                    <div className="skp">Firebase</div>
                                    <div className="skp">Google Cloud</div>
                                </div>
                            </div>
                        </div>
                        <div className="tiltb">
                            <Tilt>
                            <div className="sb">
                            <div className="certhold a"><img src={ML} className='sbimage a'/><h1>Machine Learning</h1>
                        </div>
                            </div>
                            </Tilt>
                            <div className="hiddenb">
                                <div className="hidetitle">
                                    <h1 className="header b">Machine Learning</h1>
                                </div>
                                    <div className="skill b">
                                        <div className="skp">Tensor Flow</div>
                                        <div className="skp">Pytorch</div>
                                        <div className="skp">Media Pipe</div>
                                        <div className="skp">Open CV</div>
                                        <div className="skp">Open Ai Gym</div>
                                        <div className="skp">Web Scrapping</div>
                                        <div className="skp">TF DNQ Agent</div>
                                        <div className="skp">NLP Tokenizing</div>
                                        <div className="skp">Stable Baseline</div>
                                        <div className="skp">Metric Space Analysis</div>
                                    </div>
                            </div>
                        </div>
                        <div className="tiltc">
                        <Tilt>
                        <div className="sc">
                        <div className="certhold a"><img src={SOFT} className='sbimage a'/><h1>Software Engineering</h1>
                        </div>
                        </div>
                        </Tilt>
                            <div className="hiddenc">
                            <div className="hidetitle">
                                <h1 className="header b">Software Engineering</h1>
                                </div>
                            <div className="skill c">
                            <div className="skp">Objective C</div>
                                <div className="skp">C++</div>
                                <div className="skp">Git</div>
                                <div className="skp">Python</div>
                                <div className="skp">Java</div>
                                <div className="skp">SQL</div>
                                <div className="skp">Assembly</div>
                                <div className="skp">Dynamic Programming</div>
                                <div className="skp">Object Oriented Programming</div>
                                <div className="skp">Data Structure & Algorithms</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default AboutMe

/**
 * <motion.div initial={{width:0, opacity: 1, left:'50vw'}}
                                animate={{width: '90vw', opacity: 1, left:'5vw'}}
                                transition={{ ease: 'easeIn', duration: 7}}className="timeline">
                </motion.div>
                <div className="section1">
                    <motion.div initial={{height:0, opacity: 0}}
                                animate={{height: '25vh', opacity: 1}}
                                transition={{ ease: 'easeOut', duration: 1.8, delay: 5.1}}
                                className="intro1">
                        <motion.div initial={{height:0, opacity: 0}}
                                animate={{height: '25vh', opacity: 1}}
                                transition={{ ease: 'easeOut', duration: 1.5, delay: 6.1}}>
                        <p className="intro">I'm a student attending Texas A&M University, majoring in both applied math and computer science. I aspire to continually challenge my mindset and pursue the passion and creativity they insight.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div initial={{height:0, opacity: 0}}
                                animate={{height: '6vh', opacity: 1}}
                                transition={{ ease: 'easeOut', duration: .7, delay: 6.9}} className="introl1"></motion.div>
                </div>

                <div className="section2">
                    <div className="intro2">
                    
                    </div>
                    <div className="introl2"></div>
                    <div className="introl22"></div>
                </div>

                <div className="section3">
                    <div className="intro3">
                    <p className="intro">I started my development journey in Fullstack Web Development before diversifying to mobile applications and continue to express my creativity through design.</p>
                    </div>
                    <div className="introl3"></div>
                    <div className="introl32"></div>
                </div>

                <div className="section4">
                    <div className="intro4"></div>
                    <div className="introl4"></div>
                    <div className="introl42"></div>
                </div>

                <div className="section6">
                    <div className="intro6"></div>
                    <div className="introl6"></div>
                    <div className="introl62"></div>
                </div>

                <div className="section5">
                    <div className="intro5"></div>
                    <div className="introl5"></div>
                    <div className="introl52"></div>
                </div>
 */