import React from "react";
import "../styles/Home.scss";
import { Link } from "react-router-dom";
import BannerImage from "../assets/mainbg.jpg";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>
          Every day is a <br />
          <span> choice... </span>
        </h1>
        <h3>EAT, SLEEP, GYM, AND REAPEAT .</h3>
        <Link to="/exercise">
          <button> JOIN US </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
