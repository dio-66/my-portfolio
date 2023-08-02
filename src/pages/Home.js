import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Umali</h2>
        <div className="prompt"> 
          <p>
          Recent BS in Computer Science graduate with strong programming skills and a passion for applying technology to various domains. Collaborative team player with excellent problem-solving and communication abilities. Eager to contribute to cutting-edge projects that combine computer science with scientific objectives.
          </p> 
        </div>
      </div>
      <div className="skills"> 
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2>Programming Language</h2>
            <span>C++, Python, JavaScript, PHP, HTML, CSS</span>
          </li>
          <li className="item">
            <h2>Frameworks and Tools</h2>
            <span>ReactJS, MySQL, GitHub, Jupyter Notebook</span>
          </li>
          <li className="item">
            <h2>Additional Skills</h2>
            <span>Google Workspace, Microsoft Office, Collaboration, Time Management, Analytical Skills, Written and Verbal Communication, Adaptability, Teamwork, Problem-Solving, Data Analysis, Attention to Detail
</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;