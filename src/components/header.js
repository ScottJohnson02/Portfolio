import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
<header>
  <div class="container">
    <div class="logo">
    </div>
    <div class="navigation">
      <nav>
        <ul class="nav-ul">

          <li> <a href="#about" class="button"> About me </a> </li>
          <li> <a href="#projects" class="button"> Previous Projects </a> </li>
          <li> <a href="#resume" class="button"> Resume </a> </li>
          <li> <a href="#contact" class="button"> Contact Me </a> </li>


        </ul>
      </nav>
    </div>
  </div>
</header>
)



export default Header