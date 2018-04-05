import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavItem, Icon, Dropdown, Button } from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = props => {
  //console.log(props)




    return (
      <Navbar className='nav' id='navbar' fixed={true}>
        <NavItem><Link to="/">HOME</Link></NavItem>
        <NavItem><a href="#projects">PROJECTS</a></NavItem>
        <NavItem><a href="#technologies">TECH</a></NavItem>
        <NavItem><a href="./img/resume-hannan.pdf" target="_blank">RESUME</a></NavItem>
        <NavItem><a href="#about">ABOUT</a></NavItem>
      </Navbar>

    )

}

export default Nav;


// <div className="nav">
//             <nav className="nav nav-center">
//                 <ul id="nav-mobile" className="center hide-on-med-and-down">
//                     <li><a href="#top" >Top</a></li>
//                     <li><a href="#about">About</a></li>
//                     <li><a href="#skills">Skills</a></li>
//                     <li><a href="#projects">Projects</a></li>
//                 </ul>
//             </nav>
//         </div>
