import React from "react";
import "../App.css";
import Footer from "./Footer";
export default function About(props) {
  return (
<>
   
 <div className="container main-block"  style={{
   backgroundColor:
   props.theme === 'light' ? "rgb(8 8 8 / 59%)" : "#ffffff8f"
 }}
 >  
 <h1 className=" about-block" >About Me<span className="gap"></span></h1>
      <div className="container second-block">
    <div className=" about-image"><img className="about-image-css" src="girl1.png" alt="" /></div>

    <div className="about-detail"><h1>Who am i?</h1>
     <br />
     <p style={{fontSize:"25px"}}>
     I'm Creative Director and UI/UX Designer from Sydney, Australia,working in web
     development and print media. I enjoy turning complex problems 
     into simple,
     beautiful and intuitive designs.
     <br/>
     My aim is to bring across your message and identity in the most creative way. I
     created web design for many famous brand companies.
     </p>
     </div>
    </div>
    <div><Footer/></div>
  
    </div>
   
    </> 
  );
}
