import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button,  Icon} from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <Router>

      <Row className='row technologies'>
        <a className="anchor" id="contact"></a>

          <Col offset="s2" s={8}>
          <h4 className="h3-white">Get In Touch!</h4>
          <h5 className="h4-white">Email Emily:</h5>

            <div className="contact-text">
              <form action="https://formspree.io/emilyhannan@gmail.com" method="POST">
                <input type="text" name="name" />
                <input type="email" name="_replyto" />
                <input type="submit" value="Send" />
              </form>
            </div>
          </Col>

        </Row>

      </Router>


    )
  }
}

export default Contact;
