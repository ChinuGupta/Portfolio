import React from "react";
import Footer from "./Footer";
export default function Skills(props) {
  return (
    <div className="container Skill" style={{
      backgroundColor:
      props.theme === 'light' ? "rgb(8 8 8 / 59%)" : "#ffffff8f",
      color:props.theme === 'light'?"white":"black"
    }}>
      <div class="Development-skills">
        <h1 style={{ marginBottom:"30px",marginTop:"30px"}}>Development Skills<span className="gap"></span></h1>
        <h4>HTML</h4>
      <div className=" progress">
        <div
          className="progress-bar bg-success progress-bar-animated progress-bar-striped"
          role="progressbar"
          style={{ width: "50%" }}
          aria-valuenow="25"
          aria-valuemin="10"
          aria-valuemax="100"
        ></div>
      </div>
      <h4>CSS</h4>
      <div className="progress">
        <div
          className="progress-bar bg-info  progress-bar-animated progress-bar-striped"
          role="progressbar"
          style={{ width: "50%" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <h4>JavaScript</h4>
      <div className="progress">
        <div
          className="progress-bar bg-warning  progress-bar-animated progress-bar-striped"
          role="progressbar"
          style={{ width: "45%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <h4>MERN</h4>
      <div className="progress">
        <div
          className="progress-bar bg-danger  progress-bar-animated progress-bar-striped"
          role="progressbar"
          style={{ width: "70%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
{/* <div className="gap_skill"></div> */}

    <div className="programmming-skills">
    <h1 style={{ marginBottom:"30px",marginTop:"60px"}}>Programmming Skills<span className="gap"></span></h1>
    <h4>C</h4>
      <div className=" progress">
        <div
          className="progress-bar bg-success  progress-bar-animated progress-bar-striped"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="10"
          aria-valuemax="100"
        ></div>
      </div>
      <h4>C++</h4>
      <div className="progress">
        <div
          className="progress-bar bg-black  progress-bar-animated progress-bar-striped"
          role="progressbar"
          style={{ width: "80%" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <h4>JAVA</h4>
      <div className="progress">
    
        <div
          className="progress-bar bg-warning  progress-bar-animated progress-bar-striped"
          role="progressbar"
          style={{ width: "75%" }}
          aria-valuenow="75"
          aria-valuemin=""
          aria-valuemax="100"
        ></div>
      </div>
      <h4>Python</h4>
      <div className="progress">
        <div
          className="progress-bar bg-danger  progress-bar-animated progress-bar-striped"
          role="progressbar"
          style={{ width: "60%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
   </div>
   </div>
   <div><Footer/></div>
   </div>
  
  );
}
