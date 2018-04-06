import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Icon} from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const button = {
//   border: '2px solid black',
//   color: 'red'
// };



class Projects extends Component {
  render() {
    return (

      <Row>
        <a className="anchor" id="projects"></a>

        <Col className='projects col' s={12}>
          <Col className='project-text' offset="s8" s={3}>
            <h2>PNW OVERLAND</h2>
            <p>PNW Overland is your interactive guide to backcountry road adventures in the
            Pacific Northwest. All you need to explore our world-famous mountain
            roads, with interactive maps, real dashcam videos and GIS information.</p>

            <Col s={6}>
              <a className='button btn' href="https://pnw-overland.herokuapp.com" target="_blank">LIVE DEMO</a>
            </Col>

            <Col s={6}>
              <a className='button btn' href="https://github.com/hannan-emily/pnw-overland" target="_blank">GITHUB</a>
            </Col>

            <Row >
              <div className='tech-used-parent'>
                <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                <img className="logo-tiny" src="./img/logo-node-square50.png" alt="" />
                <img className="logo-tiny" src="./img/logo-express-square50.png" alt="" />
                <h6 className="logo-tiny">EJS &nbsp;&nbsp;&nbsp;</h6>
                <h6 className="logo-tiny">POSTGRESQL&nbsp;&nbsp;&nbsp;</h6>
                <h6 className="logo-tiny">BCRYPT&nbsp;&nbsp;&nbsp;</h6>
                <h6 className="logo-tiny">ASYNC&nbsp;&nbsp;&nbsp;</h6>
                <h6 className="logo-tiny">MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
                <h6 className="logo-tiny">GOOGLE MAPS API&nbsp;&nbsp;&nbsp;</h6>
              </div>
            </Row>

          </Col>
          <img className="project-image" src="./img/cover-pnw-overland.png" alt="Cover PNW Overland" />
        </Col>

        <Col className='projects col' s={12}>
          <Col className='project-text' offset="s1" s={3}>
            <h2>CHASING CARMEN SANDIEGO</h2>
            <p>Chasing Carmen SanDiego is a delightful animated trivia game that pits you against that international thief, Carmen SanDiego.
            Test your geographic knowledge in this two player HTML5 canvas game!</p>

            <Col s={6}>
              <a className='button btn' href="https://hannan-emily.github.io/ChasingCarmenSanDiego/" target="_blank">LIVE GAME</a>
            </Col>

            <Col s={6}>
              <a className='button btn' href="https://github.com/hannan-emily/ChasingCarmenSanDiego" target="_blank">GITHUB</a>
            </Col>

            <Row >
              <div className='tech-used-parent'>
                <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                <img className="logo-tiny" src="./img/logo-jquery-square50.png" alt="" />
                <img className="logo-tiny" src="./img/logo-js-square50.png" alt="" />
                <h6 className="logo-tiny">HTML5 CANVAS&nbsp;&nbsp;&nbsp;</h6>
                <h6 className="logo-tiny">MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
              </div>
            </Row>

          </Col>
          <img className="project-image" src="./img/cover-carmen.png" alt="Cover PNW Overland" />
        </Col>

      </Row>
    )
  }
}


export default Projects;
