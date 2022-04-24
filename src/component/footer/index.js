import React from "react";
import {
  EnvironmentFilled,
  MailFilled,
  PhoneFilled,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  SendOutlined,
} from "@ant-design/icons";
import award1 from "../../images/award1.jpeg";
import award2 from "../../images/award2.jpeg";
import companyLogo from "../../images/companyLogo.svg";

import "./footer.scss";
import TextInput from "../input";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerHeader">
        <div>
          <div className="contactIcon">
            <EnvironmentFilled />
          </div>
          <div>
            Corporate HQ
            <br />
            33rd Floor, Aspect Towers,
            <br />
            Business Bay, Dubai, UAE
          </div>
        </div>
        <div>
          <div className="contactIcon">
            <PhoneFilled />
          </div>
          <div>+971 4 4546001 / 4546002</div>
        </div>
        <div>
          <div className="contactIcon">
            <MailFilled />
          </div>
          <div>ch@asterdmhealthcare.com</div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerLeftContainer">
          <div>
            <div>About Us</div>
            <div>Our Journey</div>
            <div>Our Services</div>
            <div>Corporate Governance</div>
            <div>Leadership</div>
            <div>Board of Directors</div>
            <div>Quality Policy</div>
          </div>
          <div>
            <div>Global Network</div>
            <div>Investors</div>
            <div>Aster Volunteers</div>
            <div>Newsroom</div>
            <div>Health Library</div>
            <div>Resources</div>
            <div>Videos</div>
          </div>
        </div>
        <div className="footerCenterContainer">
          <div>Recent News</div>
          <div className="news">
            <img src={award1} alt="award" />
            <div>
              <div>
                March 12, 2022
                <br />
                Dr. Azad Moopen honoured with a Doctorate for Philanthrophy by
                Amity University, Dubai.
                <br />
              </div>
              <span>Read More</span>
            </div>
          </div>
            <div className="news newslastChild">
              <img src={award2} alt="award" />
              <div>
              <div>
                February 09, 2022
                <br />
                Evolving ESG Expectations Shape World's Most Sustainable
                Corporations Ranking for 2022
                <br />
              </div>
              <span>Read More</span>
            </div>
          </div>
        </div>
        <div className="footerRightContainer">
          <span className="rightContainerTitle">
            Subscribe to our Newsletter
          </span>
          <TextInput
            placeholder={"Enter your email here"}
            customClassName="footerInput"
            suffix={<SendOutlined />}
          />
          <span className="stayInformedStyle">Stay Informed</span>
          <div className="footerIconContainer">
          <div className="asterStyle">Aster Medical Journal</div>
          <div className="rightContainerIcons">
            <FacebookOutlined />
            <TwitterOutlined />
            <InstagramOutlined />
            <LinkedinOutlined />
            <YoutubeOutlined />
          </div>
          </div>
        </div>
      </div>
      <div className="designedBy">
        <div>
          <img src={companyLogo} alt="logoWithbackground" />
        </div>
        <div>
          @ 2021 Aster DM HealthCare. All rights reserved.
          <br />
          <span>{`Designed and Developed by <blue/ogic>`}</span>
        </div>
      </div>
    </div>
  );
}
