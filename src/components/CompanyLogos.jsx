import React from "react";
import "./CompanyLogos.scss";

const companyLogo = [
  "https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376f58c89d8156db0448_client-logo-2.svg",
  "https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376fc5cd4969c0713d1f_client-logo-3.svg",
  "https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376fa91d3d48a1d77d6d_client-logo-6.svg",
];

const CompanyLogos = () => {
  return (
    <div className="companylogos">
      <div className="container">
        {companyLogo.map((elem, index) => (
          <img src={elem} alt={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
