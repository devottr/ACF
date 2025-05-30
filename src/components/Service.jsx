import React from "react";
import { SecondaryBtn } from "./Btn";
import "./Service.scss";

const serviceData = [
  {
    text: "ACF",
    desc: "Reliable & credible fashion designer.",
  },
  {
    text: "IDENTITY",
    desc: "We create a unique and consistent image for your fashion needs.",
  },
  {
    text: "MARKETING",
    desc: "Engaging effectively on all plattforms.",
  },
  {
    text: "E-COMMERCE",
    desc: "Optimize sales and always meet delivery targets.",
  },
];

const Card = ({ title, desc }) => {
  return (
    <div className="ServiceCard">
      <h3>{title}</h3>
      <p>{desc}</p>
      <SecondaryBtn text={`ABOUT ${title}`} classText={"btn-s-45"} />
    </div>
  );
};

const Service = () => {
  return (
    <section className="service">
      <div className="container">
        {serviceData.map((elem, index) => (
          <Card key={index} title={elem.text} desc={elem.desc} />
        ))}
      </div>
    </section>
  );
};

export default Service;
