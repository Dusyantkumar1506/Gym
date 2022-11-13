import React from "react";
import AboutImg from "../assets/test.jpg";
import "../styles/About.scss";

const About = () => {
  return (
    <>
      <div className="about" style={{ backgroundImage: `url(${AboutImg})` }}>
        <div className="lefter">
          <h1>Dusyant Kumar</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nulla
            praesentium ab eius non voluptas possimus amet voluptates tempore
            esse, veritatis !
          </p>
          <button>Learn More</button>
        </div>
        <div className="righter">
          <h1>Play Psycho</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nulla
            praesentium ab eius non voluptas possimus amet voluptates tempore
            esse, veritatis nostrum,
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </>
  );
};

export default About;
