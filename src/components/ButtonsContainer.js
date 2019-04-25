import React from "react";
import Button from "./Button";

const ButtonsContainer = ({ buttons, changeCurrentSlide, currentSlide }) => {
  return (
    <div className="slider__buttons-container">
      {buttons.map(index => (
        <Button key={index} {...{ changeCurrentSlide, index, currentSlide }} />
      ))}
    </div>
  );
};

export default ButtonsContainer;
