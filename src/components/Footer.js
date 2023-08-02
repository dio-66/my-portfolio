import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a href="https://github.com/dio-66">
            <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/dio-umali-jr89793/">
            <LinkedInIcon />
            </a>
        </div>
        <p> &copy; 2023 About ME</p>
    </div>
  )
}

export default Footer