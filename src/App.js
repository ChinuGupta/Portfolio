import "./App.css";
import "./index.css";
import React, { useState } from "react";
import Navbar from "./PortfolioComponent/Navbar";
import About from "./PortfolioComponent/About";
import Skills from "./PortfolioComponent/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./PortfolioComponent/Projects";
import Contact from "./PortfolioComponent/Contact";
import MainComponent from "./PortfolioComponent/MainComponent";

function App() {
  const [theme, setTheme] = useState("light");
  const fun = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    // <About/>

    <div className={`App ${theme === "light" ? "dark" : "light"}`}>
      <Router>
        <Navbar Title="Portfolio" theme={theme} functio={fun} />
        <Routes>
        <Route exact path="/" element={<MainComponent name="Chinu Gupta" workOn="Web Developer"/>} />
          <Route exact path="/about" element={<About theme={theme} />} />

          <Route exact path="/skills" element={<Skills theme={theme} />} />

          <Route exact path="/projects" element={<Projects  theme={theme}/>} />

          <Route exact path="/contact" element={<Contact theme={theme}/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
