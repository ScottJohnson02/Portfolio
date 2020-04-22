import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
<Layout>
  <SEO title="Home" />

  <h1>Scott Johnson</h1>
  <nav>
    <ul class="nav-ul">

      <li> <a href="#about" class="button"> About me </a> </li>
      <li> <a href="#projects" class="button"> Previous Projects </a> </li>
      <li> <a href="#resume" class="button"> Resume </a> </li>
      <li> <a href="#contact" class="button"> Contact Me </a> </li>


    </ul>
  </nav>
  <article class="about">
    <h2>About Me</h2>
    <p>Hello, my name is Scott Johnson and I am 18 years old. I'm currently a freshman at Thaddeus Stevens enrolled in the CSET program
      (Computer Software Engineering Technology), and when I graduate I am looking to enter into the programming industry. My dream job would do work in a group
      of hard-working individuals all focused on achieving the same goal. Some of my hobbies include hiking, camping, gaming, collecting retro games/hardware and flipping
      items on Ebay. Feel free to contact me at: <a href="mailto:ScottyJohnson002@gmail.com">ScottyJohnson002@gmail.com</a>
    </p>


  </article>
  <div class="PreviousProjects">
    <h2 id="projects" class="projects-title"> Here is a list of my previous projects</h2>
    <div class="Project-flex">
      <div class="Projects">
        <div class='projectID'>
          <h2>FROGGER</h2>
          //image
          <p> This is a remake on the 1981 classic Frogger built in html, css, and Javascript using the Document Object Model. The goal of the game is to navigate across
            the obstacles and land in the safe spaces across the map. Some added features include a continue feature, multiple worlds, and scaling difficulty. If I were to make
            this game again I would use classes instead of reusing function multiple times for each obstacle</p>
          <a class="button python" href="https://scottjohnson02.github.io/frogger/">Click here to play the game in your browser</a>
          <h3> Highlights </h3>
          <ul>
            <li>Practice with working with another programmer</li>
            <li>More experience with using the D.O.M</li>
            <li>Experience with the agile workflow</li>
            <li>Practice with the centralized git workflow</li>
          </ul>

        </div>

        <div class='projectID'>
          <h2>Island Escape</h2>
          //image
          <p> This is my first game that I ever made in the Unity engine. This project took me about
            1 year of off and on again coding. I used the asset store for the art used
            in the game and some basic scripts. If I were to do it again I would have made my project files more organized.
          </p>
          <div class="downloads">
            <a class="button" href="downloads/Island-Escape-Windows.7z"> Windows</a>
            <a class="button" href="downloads/IslandEscapeMac.app.7z"> Mac </a>
          </div>

          <h3> Highlights </h3>
          <ul>
            <li>Learned how to use Unity</li>
            <li>Got fimilar with C#</li>
            <li>Use animations</li>
            <li>Scripts refrencing each other</li>
          </ul>
        </div>
        <div class='projectID'>
          <h2>Choose Your Own Adventure: Python</h2>
          //image
          <p> This is a choose your own adventure game built in python. This was a quick little game to code, but I was able
            to learn a lot about variables and conditionals. If I were to remake this project I would add more options and more interesting
            paths.</p>
          <a class="button python" href="downloads/island.zip">Click here to download game</a>
          <h3> Highlights </h3>
          <ul>
            <li>Practice with nested conditionals</li>
            <li>More experience with Python</li>
            <li>Experience with working as a team</li>
            <li>Coding and calling functions</li>
          </ul>
        </div>



      </div>
    </div>

  </div>




  <div id="resume" class="resume">
    <h2> Click down below to download my resume </h2>
    <a href="downloads/Scott-Johnson-Resume.pdf" class="button">Download </a>

  </div>

  <footer id="contact">
    <h3>Contact Me</h3>
    <p>Email: <a href="mailto:ScottyJohnson002@gmail.com">ScottyJohnson002@gmail.com</a>
      (717)-985-8130 <a href="https://github.com/ScottJohnson02">Check Out My Github</a> </p>
    <div class="credit">Windows and Download Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div class="credit"> Mac Icon made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

  </footer>

</Layout>
)

export default IndexPage