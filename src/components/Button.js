import React from "react";

const Button = ({ changeCurrentSlide, index, currentSlide }) => {
  const bindIndex = index => {
    return () => changeCurrentSlide(index);
  };

  const buttonClass = `slider__button ${
    index === currentSlide ? "slider__button--active" : ""
  }`;

  return <button className={buttonClass} onClick={bindIndex(index)} />;
};

export default Button;
