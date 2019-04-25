import React from "react";
import Image from "./Image";

const SliderArea = ({ images, currentSlide }) => {
  return (
    <>
      <div className="slider-area">
        <div
          className="slider-area__container"
          style={{ transform: `translateX(${-100 * currentSlide}%)` }}
        >
          {images.map(({ alt, src }) => (
            <Image {...{ alt, src }} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderArea;
