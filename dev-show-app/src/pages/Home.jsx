import React from "react";
import Navbar from "../components/navbar";
import '../assets/CSS/home.css'
import '../assets/CSS/about.css'
import brain1 from '../assets/images/brain2.png'
import {motion, animate, transform, stagger, frame, cubicBezier, useScroll} from "framer-motion"
import BouncingBall from "../components/bouncingball"; 
import AnimatedTextCharacter from "../components/animatedcharecter";
import AnimatedTextWord from "../components/animatedwor";
import Radio from "../components/radio";
import Scroll from "../components/scrollbar";
import headhshit from '../assets/images/headshot.png'
import programer from '../assets/images/Myproject.png'
import computer from '../assets/images/v1069-009.jpg'
import github from '../assets/images/icons/317712_code repository_github_repository_resource_icon.png'
import instagram from '../assets/images/icons/5279112_camera_instagram_social media_instagram logo_icon.png'
import email from '../assets/images/icons/4550857_email_gmail_mail_sending_yahoo_icon.png'
import Linkden from '../assets/images/icons/5279114_linkedin_network_social network_linkedin logo_icon.png'
import handshake from '../assets/images/icons/8665492_handshake_agreement_icon.png'
import AboutMe from "./AbouteMe";
import Project from "./Projects";
import Contact from "./Contact";
import Footer from "../components/footer";
import { Link, Element } from 'react-scroll';
import {useEffect,useState} from 'react'
import clicker from '../assets/images/pointer_178432.png'
import icon from '../assets/images/vector_284280.png'
import connect from '../assets/network_648321.png'
function Home(){
 const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 3.3
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }
      const { scrollYProgress } = useScroll();

      const [windowWidth, setWindowWidth] = useState(window.innerWidth);

      useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  
      const divStyle = {
          top: windowWidth >= 1000 ? '93vh' : '83vh',
      };


    return(
    <div>
        <div className="website">
        <Element name="home">
        <div className="home">
            <div className="imagehold">
                                <img src={computer} className='backimage'/>
            </div>
                                <motion.div className="homeherocontent"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{ ease: 'linear', duration: .7, delay: .5}}>
                                <h1 className="herohello">HEY, I'M MACKAY FISHER</h1>
                                </motion.div>
                                <motion.div className="herointro"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{ ease: 'linear', duration: .7, delay: .5}}>
                                <p> A software engineer and full stack | machine learning developer focused on products that elevate the human experience  </p>
                                </motion.div>
                               
                                <div className="socials">
                                <motion.div className="clickme" initial={{opacity:0}}
                                animate={{opacity:1}} transition={{ ease: 'linear', duration: .7, delay: 2}}>
                                <p>Connect</p>
                                <div className="dividera"></div>
                                </motion.div>
                                    <motion.div initial={{x:-70}} animate={{x:0}} transition={{ ease: 'linear', duration: .7, delay: .8}}>
                                    <a target="_blank" href="https://github.com/Mackay-Fisher">
                                    <img src={github} className='icon'/>
                                    </a>
                                    </motion.div>
                                    <motion.div initial={{x:-70}} animate={{x:0}} transition={{ ease: 'linear', duration: .7, delay: 1}}>
                                    <a target="_blank" href="https://www.linkedin.com/in/mackay-fisher-07b896257/">
                                    <img src={Linkden} className='icon'/>
                                    </a>
                                    </motion.div>
                                    <motion.div initial={{x:-70}} animate={{x:0}} transition={{ ease: 'linear', duration: .7, delay: 1.3}}>
                                    <a target="_blank" href="https://www.instagram.com/mackeyfisher/">
                                    <img src={instagram} className='icon'/>
                                    </a>
                                    </motion.div>
                                    <motion.div initial={{x:-70}} animate={{x:0}} transition={{ ease: 'linear', duration: .7, delay: 1.5}}>
                                    <a target="_blank" href='mailto:mackeyfisher@gmail.com'>
                                    <img src={email} className='icon a'/>
                                    </a>
                                    </motion.div>
                                    <motion.div initial={{x:-70}} animate={{x:0}} transition={{ ease: 'linear', duration: .7, delay: 1.7}}>
                                    <a target="_blank" href='https://app.joinhandshake.com/stu/users/47493769'> 
                                    <img src={handshake} className='icon'/>
                                    </a>
                                    </motion.div>
                                    <motion.div className="line"
                                initial={{height:'0px', rotate:'180deg'}}
                                animate={{ scale: 1, height: '200px'}}
                                transition={{ ease: 'linear', duration: 1.4, delay: 2.4}}></motion.div>
                                </div>
                                <motion.div class="icon-scroll" style={divStyle}
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{ ease: 'linear', duration: 1.2, delay: 3.5}}></motion.div>
                                
        </div>
        </Element>
        <Element name="about">
        <AboutMe/>
        </Element>
        <Element name="projects">
        <Project/>
        </Element>
        <Element name="contact">
        <Contact/>
        </Element>
        <div className="nav">
                        <Scroll/>         
                         <div className="radiobar">
                             <Radio/> 
                        </div>
                    </div>
        </div>
    </div>
    )
}

export default Home
