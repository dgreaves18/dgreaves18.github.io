import React, { useState } from 'react';

function App() {
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <div id="App">
      <div id="home">
        <span id="hello">Hello</span>
        <div className="nav-buttons">
          <a href="#about"><button className="nav-button">About Me</button></a>
          <a href="#skills"><button className="nav-button">My Skills</button></a>
          <a href="#projects"><button className="nav-button">My Projects</button></a>
          <a href="#contact"><button className="nav-button">Contact Me</button></a>
        </div>
        <div id="home-info" onClick={(e) => {setDisplayInfo(!displayInfo)}}>?</div>
        {displayInfo && (
          <span id="info">Rifle Peak, Incline Village, NV</span>
        )}
      </div>
      <div id="about">
        <div className="img-crop">
          <img className="profile" src="client/lib/Headshot_resized.jpg"></img>
        </div>
        About Me here
      </div>
      <div className="bg">
        <div id="skills">
          My skills here
        </div>
      </div>
      <div id="projects">
        Projects here
      </div>
      <div id="contact">
        Contact here
        <div className="nav-buttons">
          <a href="#home"><button className="nav-button">Back to Top</button></a>
        </div>
      </div>
    </div>
  );
}

export default App;