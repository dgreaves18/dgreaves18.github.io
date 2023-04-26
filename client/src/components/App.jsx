import React from 'react';

function App() {
  return (
    <div id="App">
      <div id="home">
        Welcome
        <div class="nav-buttons">
          <a href="#about"><button class="nav-button">About Me</button></a>
          <a href="#skills"><button class="nav-button">My skills</button></a>
          <a href="#projects"><button class="nav-button">Projects</button></a>
          <a href="#contact"><button class="nav-button">Contact</button></a>
        </div>
      </div>
      <div id="about">
        <div class="img-crop">
          <img class="profile" src="client/lib/Headshot_resized.jpg"></img>
        </div>
        About Me here
      </div>
      <div class="bg">
        <div id="skills">
          My skills here
        </div>
      </div>
      <div id="projects">
        Projects here
      </div>
      <div id="contact">
        Contact here
        <div class="nav-buttons">
          <a href="#home"><button class="nav-button">Back to Top</button></a>
        </div>
      </div>
    </div>
  );
}

export default App;