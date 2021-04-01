import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import LogBehavior from '../components/LogBehavior.jsx';
import data from '../../src/dummy_data.js';

class Current extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExperiments: data.currentExperiments
    };
  }

  render() {
    return (
      <div className="widget">
        <Jumbotron>
          <h1>Current Experiments</h1>
          <p></p>
          <h3>Today's condition</h3>
          <p>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Meditate in the morning if possible.
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <LogBehavior experiment={this.state.currentExperiments[0]}/>
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

export default Current;