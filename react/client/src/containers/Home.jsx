import React from 'react'
import { Link } from 'react-router'
import LoginBox from '../auth/LoginBox'
import Nav from '../components/Nav';

const Home = () => (
  <div id="pic">
  <Nav className="message" />
  <div className="drop">
  <h1 id='name'>Andrew Lonsdale</h1>
    <h1 id='home'>Full Stack Developer</h1>
    <a id="aboutbutton" href="http://localhost:3000/#/about">About Me</a>
    <input type="checkbox" name="toggle" id="toggle" />
    <label htmlFor="toggle"></label>
  </div>
  </div>
)

export default Home