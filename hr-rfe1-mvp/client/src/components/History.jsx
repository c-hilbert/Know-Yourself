import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import LogBehavior from '../components/LogBehavior.jsx';
import data from '../../src/dummy_data.js';
import Example from '../components/Chart.jsx';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
<div className="widget">
        <Jumbotron>
          <h1>Past Experiments</h1>
          <p></p>
          <p>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle eventKey="0">
                    <Button>Apr 04, 2020 - May 31, 2020</Button><span>Standing desk and productivity</span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div>TK GRAPH
                      <Example/>
                    </div>
                    {/* <Button variant="info">LOG BEHAVIOR</Button>
                    <Button variant="info">LOG EFFECT</Button>
                    <Button variant="info">VIEW RESULTS</Button> */}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default History;