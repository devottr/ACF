import React from "react";
import "./Hero.scss";
import { SecondaryBtn } from "./Btn";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="text">
          <h1>
            Fashion <br />& Design 
          </h1>
          <div className="text-desc">
            <p>
              Bringing Your Fashion Ideas & Unique Identity to Life.
            </p>
            <SecondaryBtn text={"Learn more"} classText="btn-s-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
