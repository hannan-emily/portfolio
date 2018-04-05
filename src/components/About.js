import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button,  Icon} from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <Row className='row about'>
        <a className="anchor" id="about"></a>
        <Col s={12}>

          <Col offset="s1" s={5}>
            <div>
              <img className="profile-image" src="./img/profile.jpg" alt="" />
            </div>
          </Col>

          <Col className="project-text-2" s={5}>
              <Row>
                <h3>Meet Emily</h3>
                <p>Designer of immersive, encapsulated applications that bring in influences
                of outdoor exploration and location based apps. With a background in UX and
                graphic design, creative content, immersive drawing installations and sculpture,
                I develop experiential, feeling applications. I’m a client-facing developer
                who works very well on larger teams, with collaborative pairs and broader
                multi-disciplinary teams. Experienced in fast paced environments, I craft
                efficient, on-time products.</p>
              </Row>
              <Row>
                <h4>Let&#39;s Connect!</h4>
                <Row>
                  <img className="logo-about" src="./img/logo-linkedin.png" alt="" />
                  <img className="logo-about" src="./img/logo-github.png" alt="" />
                  <Icon className="logo-about">email</Icon>
                </Row>
              </Row>
          </Col>

        </Col>
      </Row>
    )
  }
}


export default About;
