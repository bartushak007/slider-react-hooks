import { useState, useEffect } from "react";

const useSlider = images => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        currentSlide < images.length - 1
          ? setCurrentSlide(currentSlide + 1)
          : setCurrentSlide(0),
      2000
    );

    return () => clearInterval(interval);
  });

  const changeCurrentSlide = slide => {
    setCurrentSlide(slide);
  };

  const getButtonsIndex = () => {
    return images.map((elem, i) => i);
  };

  const buttons = getButtonsIndex();

  return {
    currentSlide,
    buttons,
    changeCurrentSlide
  };
};

export default useSlider;
