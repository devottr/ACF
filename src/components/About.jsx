import React, { useState } from "react";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import "./About.scss";
import CircleIcon from "./CircleIcon";

const data = [
  {
    id: 1,
    img: i7, // Using i7 here
    text: "Our Vision",
    desc: "To be a leading brand in customized and personalized clothing, recognized for quality, creativity, and customer satisfaction. We aim to empower individuals to express their unique style through our innovative designs.",
  },
  {
    id: 2,
    img: i8, // Using i8 here
    text: "Our Mission",
    desc: "To provide high-quality, customizable, and personalized clothing solutions that meet the diverse needs of our customers. We are committed to exceptional craftsmanship, timely delivery, and excellent customer service.",
  },
  {
    id: 3,
    img: i7, // You can use i7 or i8 again, or add more images
    text: "Our Values",
    desc: "Creativity, Quality, Customer Focus, Innovation, and Integrity are at the core of everything we do. We believe in fostering a culture of continuous improvement and building lasting relationships with our clients.",
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="About">
      <div className="container">
        <div className="image">
          <img src={i8} alt="about image" />
        </div>
        <div className="text">
          <span>ABout</span>
          <div className="text-details">
            <h1>BRINGING FASHION IDEAS TO LIFE</h1>
            <p>At angel clothing flex we don't only customize, we also personalize.</p>
          </div>
        </div>
      </div>
      <div className="container container-2">
        <div className="col-1">
          {data.map((elem, idx) => ( // Changed index to idx to avoid confusion with state index
            <div
              className="item"
              key={idx} // Changed index to idx
              onMouseMove={() => setIndex(idx)} // Changed index to idx
            >
              <div className="text-2">
                <h3>{elem.text}</h3>
                <p>{elem.desc.slice(0, 180)}</p>
              </div>
              <CircleIcon />
            </div>
          ))}
        </div>
        <div className="col-2">
          <img src={data[index].img} alt={data[index].text} />
        </div>
      </div>
    </div>
  );
};

export default About;