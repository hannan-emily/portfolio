import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Icon, responsiveimage} from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Home extends Component {
  render() {
    

    return (
      <Router>
        <div id="videoRow">

            <div className="video-title">
            <h2 className="h2-title">EMILY HANNAN</h2>


            </div>
              <div className='videodiv'>
                <video id='background-video' loop autoPlay>
                  <source id="video" src='img/starrySky.mp4' type='video/mp4' />
                </video>
              </div>


        </div>
    </Router>
    );
  }
}

export default Home;
