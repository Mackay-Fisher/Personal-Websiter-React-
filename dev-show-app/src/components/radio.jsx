import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link, Element } from 'react-scroll';
import {motion, animate, transform, stagger, frame, cubicBezier, useScroll} from "framer-motion"
function Radio(props){
    return(
        <div class="radio-inputs">
        <motion.div initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{ ease: 'linear', duration: .8, delay: 2.4}}>
                                    <label class="radio">
            <span class="name"><Link to="home" smooth={true} duration={500}>HOME</Link></span>
        </label>
        </motion.div>
        
        <motion.div initial={{opacity:0, x:-200}}
                                animate={{opacity:1, x:0}}
                                transition={{ ease: 'linear', duration: .8, delay: 1.7}}>
        <label class="radio">
            <span class="name"><Link to="about" smooth={true} duration={500}>ABOUT ME</Link></span>
        </label>
        </motion.div>

        <motion.div initial={{opacity:0, x:-200}}
                                animate={{opacity:1, x:0}}
                                transition={{ ease: 'linear', duration: .8, delay: 1.1}}>
        <label class="radio">
            <span class="name"><Link to="projects" smooth={true} duration={500}>PROJECTS</Link></span>
        </label>
        </motion.div>

        <motion.div initial={{opacity:0, x:-200}}
                                animate={{opacity:1, x:0}}
                                transition={{ ease: 'linear', duration: .8, delay: .5}}>
        <label class="radio">
            <span class="name"><Link to="contact" smooth={true} duration={500}>CONTACT</Link></span>
        </label>
        </motion.div>
        </div>
    )
}


export default Radio


/*  */