import React from "react";
import '../assets/CSS/tab.css'
export default function Tab(){
    return(
                <div>
                <div class="tradio-inputs">
        <label class="tradio">
            <input type="tradio" name="tradio" checked=""/>
            <span class="tname">HTML</span>
        </label>
        <label class="tradio">
            <input type="tradio" name="tradio"/>
            <span class="tname">React</span>
        </label>
            
        <label class="tradio">
            <input type="tradio" name="tradio"/>
            <span class="tname">Vue</span>
        </label>
        </div>
        </div>
    )
}