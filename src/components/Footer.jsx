import React from "react";
import "../styles/Footer.scss";

import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item">
        <InstagramIcon /> <GitHubIcon /> <TwitterIcon /> <LinkedInIcon />
      </div>
      <p> © 2022 fitzzy.com</p>
    </div>
  );
};

export default Footer;
