import React from "react";
import ButtonsContainer from "./ButtonsContainer";
import useSlider from "../hooks/useSlider";
import SliderArea from "./SliderArea";

const FullWidtSlider = ({ images }) => {
  const { buttons, changeCurrentSlide, currentSlide } = useSlider(images);

  return (
    <div className="slider">
      <SliderArea {...{ images, currentSlide }} />
      <ButtonsContainer {...{ changeCurrentSlide, buttons, currentSlide }} />
    </div>
  );
};

export default FullWidtSlider;
