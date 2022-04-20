import React from "react";
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
  return (
    <div className="header">
      <img src={companyLogo} alt="logo" />
      <div className="labelContainer">
        {tabLabel.map((label) => (
          <span>{label}</span>
        ))}
      </div>
      <div className="headerIcon">
        <SearchOutlined />
        <SoundOutlined />
      </div>
    </div>
  );
}
