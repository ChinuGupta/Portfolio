import React, { useState } from "react";
import Footer from "./Footer";

export default function Contact(props) {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:9000/auth/contact/createUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            message: credentials.message,
          }),
          
        }
        
      );
   
      if (response.ok) {
        const json = await response.json();
        console.log(json);
      } else {
        console.error("Error: Unable to add data to the database.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="container  contact-div"
      style={{
        backgroundColor:
          props.theme === "light" ? "rgb(8 8 8 / 59%)" : "#ffffff8f",
        color: props.theme === "light" ? "white" : "black",
      }}
    >
      <h1>
        Contact<span className="gap"></span>
      </h1>
      <div
        className="main-contact container "
        style={{
          backgroundColor: props.theme === "light" ? "black" : "white",
          color: props.theme === "light" ? "white" : "black",
        }}
      >
        <p>
          <strong>
            I'm always open to discussing product design work or partnerships.
          </strong>
        </p>

        <form onSubmit={handelSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
               name="name"
              onChange={onChange}
              placeholder="Full Name"
              required
              style={{
                backgroundColor:
                  props.theme === "light" ? "rgb(8 8 8 / 59%)" : "#ffffff8f",
                color: props.theme === "light" ? "white" : "black",
              }}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
               name="email"
              placeholder="name@example.com"
              onChange={onChange}
              required
              style={{
                backgroundColor:
                  props.theme === "light" ? "rgb(8 8 8 / 59%)" : "#ffffff8f",
                color: props.theme === "light" ? "white" : "black",
              }}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              id="message"
              name="message"
              onChange={onChange}
              placeholder="Message"
              style={{
                backgroundColor:
                  props.theme === "light" ? "rgb( 7 7 7 / 59%)" : "#ffffff8f",
                color: props.theme === "light" ? "white" : "black",
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn"
            style={{
              color: props.theme === "light" ? "white" : "black",
            }}
          >
            Submit
          </button>
  
        </form>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
