import React from 'react';

function App() {
  return (
    <div id="App">
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li><a class="menu__item" href="#home">Home</a></li>
          <li><a class="menu__item" href="#about">About Me</a></li>
          <li><a class="menu__item" href="#skills">My skills</a></li>
          <li><a class="menu__item" href="#projects">Projects</a></li>
          <li><a class="menu__item" href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="bg">
        <div id="home">
          Welcome
        </div>
      </div>
      <div id="about">
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
      </div>
    </div>
  );
}

export default App;