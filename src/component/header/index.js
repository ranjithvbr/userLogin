import React, { useEffect, useState } from "react";
import companyLogo from "../../images/companyLogo.svg";
import "./header.scss";
import { SearchOutlined, SoundOutlined } from "@ant-design/icons";

const tabLabel = [
  "About Us",
  "Global Network",
  "Excellence",
  "Innovation",
  "Aster Volunters",
  "Media Centeer",
  "Careers",
  "Contact Us",
];

export default function Header() {
  const [innerWidth, setInnerWidth] = useState();
  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="header">
        <img src={companyLogo} alt="logo" />
        {innerWidth > 767 && (
          <div className="labelContainer">
            {tabLabel.map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>
        )}
        <div className="headerIcon">
          <SearchOutlined />
          <SoundOutlined />
        </div>
      </div>
      {innerWidth < 768 && (
        <div className="labelContainer mobileTabContainer">
          {tabLabel.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      )}
    </div>
  );
}
