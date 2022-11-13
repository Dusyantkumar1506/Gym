import React from "react";
import "../styles/Card.scss";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.imgsrc} alt="pic" className="card-img" />
        <div className="card-info">
          <div className="card-category"> {props.title} </div>
          <h3 className="card-title">{props.workout}</h3>
          <a href="#">
            <button className="btn"> Join Us </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
