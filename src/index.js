import React from "react";
import ReactDOM from "react-dom";
import FullWidtSlider from "./components/FullWidtSlider";

import "./styles.css";
const images = [
  {
    src: "/images/2.jpg",
    alt: ""
  },
  {
    src: "/images/1.jpg",
    alt: ""
  },
  {
    src: "/images/3.jpg",
    alt: ""
  },
  {
    src: "/images/4.jpg",
    alt: ""
  }
];

function App() {
  return <FullWidtSlider {...{ images }} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
