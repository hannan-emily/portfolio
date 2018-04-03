import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavItem, Icon, Dropdown, Button } from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = props => {
  //console.log(props)

    return (
      <Navbar right id='navbar'>

        <NavItem><Link to="/">Home</Link></NavItem>

      </Navbar>
    )
}

export default Nav;
