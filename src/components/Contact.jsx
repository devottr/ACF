import React from "react";
import CircleIcon from "./CircleIcon";
import "./Contact.scss";
import Marquee from "react-fast-marquee";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { SecondaryBtn } from "./Btn";
import { FiPhone } from "react-icons/fi"; // Import a phone icon, e.g., from react-icons/fi

const socialData = [
  {
    icon: <AiOutlineInstagram />,
    text: "Instagram",
    desc: "Follow us on Instagram.",
    link: "https://www.instagram.com/angels_clothing_flex?igsh=MWMwdGFwMDRzZTYxdw==",
  },
  {
    icon: <FaTiktok />,
    text: "Tiktok",
    desc: "Follow us on TikTok.",
    link: "https://vm.tiktok.com/ZMS2mKJXB",
  },
  {
    icon: <FiFacebook />,
    text: "Facebook",
    desc: "Follow us on Facebook.",
    link: "https://www.facebook.com/102378116207992",
  },
  {
    icon: <FaWhatsapp />,
    text: "WhatsApp",
    desc: "Contact us on WhatsApp.",
    link: "https://wa.me/+2347042102199",
  },
];

const Contact = () => {
  const phoneNumber = "+2347042102199"; // Store the phone number here

  return (
    <div className="Contact">
      <div className="container-1">
        <span>Contact</span>
        <div className="text">
          <h1>Let's bring your fashion ideas to life</h1>
          {/* Modified the "Get in touch" button */}
          <a href={`tel:${phoneNumber}`} className="btn-s phone-btn">
            Get in touch <FiPhone className="phone-icon" /> {/* Added the phone icon */}
            <CircleIcon />
          </a>
        </div>
      </div>

      <div className="container-2">
        <Marquee pauseOnHover gradient={false}>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
        </Marquee>
      </div>

      <div className="container-3">
        {socialData.map((elem, index) => (
          <div className="item" key={index}>
            <div className="upper">
              {elem.icon}
              <SecondaryBtn
                classText={"btn-s-45"}
                text={<h3>Contact</h3>} // Changed 'text={"Connect"}' to 'text={<h1>Contact</h1>}'
                onClick={() => window.open(elem.link, "_blank")}
              />
            </div>
            <div className="lower">
              <h3>{elem.text}</h3>
              <p>{elem.desc.slice(0, 180)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;