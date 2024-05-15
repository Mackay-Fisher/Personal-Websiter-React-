import React from "react";
import '../assets/CSS/computer.css'

export default function Computer({image}){
    return(
        <div class="css-mb with-glare">
  <div class="mb-display-position">
    <div class="mb-display">
      <div class="mb-screen-position">
        <div class="mb-screen">
                <img src={image} />
        </div>
      </div>
    </div>
  </div>
  <div class="mb-body"></div>
  <div class="mb-bottom-cover"></div>
</div>
    )
}