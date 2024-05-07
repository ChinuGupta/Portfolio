import React from "react";
import "../App.css";


export default function MainComponent(props) {
  const { name, workOn } = props;
  return (
    <div className="side2">
      <div className="container contain">
        <img className="image" src="girl1.png" alt="" />
      </div>
      <div className="contain_name">
        <h2>
         {name}
        </h2>
        <h6>{workOn}</h6>
      </div>
      <div className="socialicons">
        <div className="icons">
          <i class="fa-brands fa-instagram setfont"></i>
        </div>
        <div className="icons">
          <i class="fa-brands fa-linkedin setfont"></i>
        </div>
        <div className="icons">
          <i class="fa-solid fa-envelope setfont"></i>
        </div>
      </div>
      <div class="download1">
        <a href="/" download="Chinu Gupta-Resume">
          <button class="download button">
            <i class="fa-solid fa-download"></i>&nbsp;Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}
