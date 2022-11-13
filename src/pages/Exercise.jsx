import React from "react";
import Exercisee from "../assets/exercise.jpg";
import "../styles/Exercise.scss";
import Card from "../components/Card";

const Exercise = () => {
  return (
    <div className="exercise" style={{ backgroundImage: `url(${Exercisee})` }}>
      <Card
        imgsrc="https://picsum.photos/200/200"
        title="Chest Workout"
        workout="Chest"
      />
      <Card
        imgsrc="https://picsum.photos/200/200"
        title="Back Workout"
        workout="Back"
      />
      <Card
        imgsrc="https://picsum.photos/200/200"
        title="Biceps Workout"
        workout="Biceps"
      />
      <Card
        imgsrc="https://picsum.photos/200/200"
        title="Triceps Workout"
        workout="Triceps"
      />
      <Card
        imgsrc="https://picsum.photos/200/200"
        title="Shoulder Workout"
        workout="Shoulder"
      />
      <Card
        imgsrc="https://picsum.photos/200/200"
        title="Legs Workout"
        workout="Legs"
      />
    </div>
  );
};

export default Exercise;
