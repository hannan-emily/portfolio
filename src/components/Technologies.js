import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Icon, responsiveimage} from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Technologies extends Component {
  render() {
    return (
      <Row className='technologies'>
      <a className="anchor" id="technologies"></a>
        <Col  s={12}>
          <h2 className='h2-white'> TECHNOLOGIES </h2>
          <Row className='technologies-logos'>
            <Col s={2}>
              <img className="logo" src="./img/logo-mongo-square.png" alt="Logo:Mongo" />
            </Col>
            <Col s={2}>
              <img className="logo" src="./img/logo-redux-square.png" alt="Logo:Mongo" />
            </Col>
            <Col s={2}>
              <img className="logo" src="./img/logo-python-square.png" alt="Logo:Mongo" />
            </Col>
            <Col s={2}>
              <img className="logo" src="./img/logo-node-square.png" alt="Logo:Mongo" />
            </Col>
            <Col s={2}>
              <img className="logo" src="./img/logo-jquery-square.png" alt="Logo:Mongo" />
            </Col>
            <Col s={2}>
              <img className="logo" src="./img/logo-html5-square.png" alt="Logo:Mongo" />
            </Col>
          </Row>

          <Row className='technologies-logo'>
            <Col s={2}>
              <img className="logo" src="./img/logo-mongoose-square.png" alt="Logo:Mongo" />
            </Col>
            <Col s={2}>
              <img className="logo" src="./img/logo-react-square.png" alt="Logo:Mongo" />
            </Col>
            <Col s={2}>
              <img className="logo" src="./img/logo-django-square.png" alt="Logo:Mongo" />
            </Col>
            <Col s={2}>
              <img className="logo" src="./img/logo-express-square.png" alt="Logo:Mongo" />
            </Col>
            <Col s={2}>
              <img className="logo" src="./img/logo-js-square.png" alt="Logo:Mongo" />
            </Col>
            <Col s={2}>
              <img className="logo" src="./img/logo-css-square.png" alt="Logo:Mongo" />
            </Col>
          </Row>

        </Col>
      </Row>
    )
  }
}

export default Technologies;
