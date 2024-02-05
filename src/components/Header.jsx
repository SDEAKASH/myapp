import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
  return (
   <nav>
  <h1>Tech-Men</h1>
  <main>
    <HashLink to={"/#home"}>Home</HashLink>
    <Link to={"/contact"}>Contact</Link>
    <HashLink to={"/#socialmedia"}>Social Media</HashLink>
    <HashLink to={"/#about"}>About</HashLink>
    <Link to={"/services"}>Services</Link>

  </main>


  </nav>
  )
}

export default Header
