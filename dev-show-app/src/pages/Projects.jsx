import React from "react";
import { useState } from "react";
import '../assets/CSS/proejects.css'
import PProject from "./pprojects";
import WProject from "./wprojects";
import {useGlobalState,setGlobalState} from '../components/componet.js'
function Project(){
    const[work] = useGlobalState('work');
    return(
        <div>
            {work ? <WProject/>: <PProject/>}
        </div>
       
    )
}

export default Project

