import React from "react";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import { SecondaryBtn } from "./Btn";
import "./Brands.scss";

const data = [
  {
    text: "Formal",
    tag: "ACF",
    img: i1,
  },
  {
    text: "Breezy",
    tag: "ACF",
    img: i2,
  },
  {
    text: "Linen",
    tag: "ACF",
    img: i3,
  },
  {
    text: "Extensive fabric",
    tag: "ACF",
    img: i4,
  },
  {
    text: "Ponte",
    tag: "ACF",
    img: i5,
  },
  {
    text: "Frock",
    tag: "ACF",
    img: i6,
  },
];

const Brands = () => {
  return (
    <div className="brands">
      <div className="main-text">
        <h2>Previous Tasks </h2>
        <SecondaryBtn text={"see all"} classText="btn-s-45" />
      </div>
      <div className="container">
        {data.map((elem, index) => (
          <div
            className="item"
            key={index}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.714)),url(${elem.img})`,
            }}
          >
            <div className="lower-text">
              <h1>{elem.text}</h1>
              <div className="lower-text-btns">
                <SecondaryBtn text="Discover project" classText={"btn-s-45"} />
                <span className="brandTag">{elem.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;