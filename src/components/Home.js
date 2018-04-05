import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Icon, responsiveimage} from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <Row id="videoRow">
        <Col s={12}>
            <div className='videodiv'>
              <video id='background-video' loop autoPlay>
                <source src='img/starrySky.mp4' type='video/mp4' />
              </video>
            </div>
        </Col>
    </Row>
    );
  }
}

export default Home;
