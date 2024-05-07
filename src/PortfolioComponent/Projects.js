import React from "react";
import Footer from "./Footer";

export default function Projects(props) {
  return (
    <div
      className=" container Projects-main-Container"
      style={{
        backgroundColor:
          props.theme === "light" ? "rgb(8 8 8 / 59%)" : "#ffffff8f",
        color: props.theme === "light" ? "white" : "black",
      }}
    >
      <h1>
        Projects<span className="gap"></span>
      </h1>

      <div className="row ">
        <div className="col-lg-4">
          <div className="card  mx-3 my-3">
            <img src="Portfolio.jpeg" className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{
                backgroundColor: props.theme === "light" ? "black" : "white",
                color: props.theme === "light" ? "white" : "black",
              }}
            >
              <h5 className="card-title">Portfolio</h5>
              <p className="card-text">
                A MERN (MongoDB, Express, React, Node.js) portfolio website is a
                dynamic and visually appealing platform designed to showcase my
                work, skills, and achievements.
              </p>
              <a href="/" className="btn btn-info">
                Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card  mx-3 my-3">
            <img src="TextUtils.png" className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{
                backgroundColor: props.theme === "light" ? "black" : "white",
                color: props.theme === "light" ? "white" : "black",
              }}
            >
              <h5 className="card-title">TextUtils</h5>
              <p className="card-text">
                TextUtils is a versatile text manipulation and analysis web
                application. This handy tool allows users to perform a wide
                range of text-related tasks, including text cleaning,
                formatting, and analysis. Users can convert text to uppercase or
                lowercase, remove extra spaces, count characters and words, and
                even analyze the sentiment of a given text. TextUtils simplifies
                common text operations and provides a clean and user-friendly
                interface, making it an indispensable resource for writers,
                students, and anyone working with textual data.
              </p>
              <a href="/" className="btn btn-info">
                Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card  mx-3 my-3">
            <img src="NewsWorld.png" className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{
                backgroundColor: props.theme === "light" ? "black" : "white",
                color: props.theme === "light" ? "white" : "black",
              }}
            >
              <h5 className="card-title">NewsWorld</h5>
              <p className="card-text">
                Built using class-based components, the app utilizes the News
                API to fetch and display news articles, breaking news, and
                updates in a structured and user-friendly format. Users can
                explore a wide range of news categories, read detailed articles,
                and stay informed about current events.
              </p>
              <a href="/" className="btn btn-info">
                Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 ">
          <div className="card mx-3 my-3">
            <img src="TO-DO LIST.png" className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{
                backgroundColor: props.theme === "light" ? "black" : "white",
                color: props.theme === "light" ? "white" : "black",
              }}
            >
              <h5 className="card-title">To-Do List</h5>
              <p className="card-text">
                The To-Do List Application is a simple yet powerful web tool
                created using HTML, CSS, and JavaScript, with the added
                functionality of local storage. It provides an efficient way to
                manage tasks, set priorities, and stay organized. Users can
                easily add, edit, and remove tasks in a clean and intuitive
                interface.
              </p>
              <a href="/" className="btn btn-info">
                Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card  mx-3 my-3">
            <img src="fight.png" className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{
                backgroundColor: props.theme === "light" ? "black" : "white",
                color: props.theme === "light" ? "white" : "black",
              }}
            >
              <h5 className="card-title">Fight Partner</h5>
              <p className="card-text">
                It presents a visually engaging and user-friendly interface that
                showcases a lineup of potential fighters, each possessing their
                own distinct traits and abilities.
              </p>
              <a href="/" className="btn btn-info">
                Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card  mx-3 my-3">
            <img src="people counter.png" className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{
                backgroundColor: props.theme === "light" ? "black" : "white",
                color: props.theme === "light" ? "white" : "black",
              }}
            >
              <h5 className="card-title">People Counter</h5>
              <p className="card-text">
                The People Counter Web App, constructed with HTML, CSS, and
                JavaScript, efficiently counts individuals entering or exiting a
                designated area, facilitating crowd management and occupancy
                tracking.
              </p>
              <a href="/" className="btn btn-info">
                Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card  mx-3 my-3">
            <img src="blackjack.png" className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{
                backgroundColor: props.theme === "light" ? "black" : "white",
                color: props.theme === "light" ? "white" : "black",
              }}
            >
              <h5 className="card-title">Blackjack</h5>
              <p className="card-text">
                The Blackjack Game is an engaging and interactive web
                application developed using HTML, CSS, and JavaScript. This
                classic card game brings the thrill of the casino to your web
                browser, allowing players to enjoy the challenge of beating the
                dealer in a game of strategy and luck. With a visually appealing
                design and user-friendly interface, the game offers an immersive
                gaming experience.
              </p>
              <a href="/" className="btn btn-info">
                Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card  mx-3 my-3">
            <img
              src="resturant.png"
              className="card-img-top"
              alt="..."
              style={{ height: "250px" }}
            />
            <div
              className="card-body"
              style={{
                backgroundColor: props.theme === "light" ? "black" : "white",
                color: props.theme === "light" ? "white" : "black",
              }}
            >
              <h5 className="card-title">Resturant Websight</h5>
              <p className="card-text">
                The Restaurant Website is a beautifully crafted and
                user-friendly online platform developed using HTML, CSS, and
                JavaScript. It serves as a virtual gateway to a dining
                experience, allowing visitors to explore the restaurant's menu,
                ambiance, and services. With a visually appealing design and
                interactive features, the website provides an immersive preview
                of what the restaurant has to offer.
              </p>
              <a href="/" className="btn btn-info">
                Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card  mx-3 my-3">
            <img src="..." className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{
                backgroundColor: props.theme === "light" ? "black" : "white",
                color: props.theme === "light" ? "white" : "black",
              }}
            >
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-info">
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
