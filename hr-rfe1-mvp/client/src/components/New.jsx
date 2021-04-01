import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import data from '../../src/dummy_data.js';
import DesignExperiment from '../components/DesignExperiment.jsx';
import Experiment from '../components/Experiment.jsx';


class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiments: data.experimentLibrary
    };
  }

  render() {
    return (
      <div className="left">
        <Jumbotron>
          <h1>Start a New Experiment</h1>
          <p></p>
          <h3>Design your own...</h3>
          <div className="flex-row">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Observational Correlational Analysis</Card.Title>
                <Card.Text>
                Determine if two variables are correlated by tracking them over time
                </Card.Text>
                <Button variant="primary">Get started</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Randomized Controlled Trial</Card.Title>
                <Card.Text>
                Determine if there is a causal relationship between two variables by randomly assigning one of two conditions from day to day
                </Card.Text>
                {/* <DesignExperiment/> */}
              </Card.Body>
            </Card>
          </div>
          <h3>Or try one from our library!</h3>
          <Accordion>
            <div>{this.state.experiments.map((experiment) => (
              <Experiment
                question={experiment.question}
                description={experiment.description}
              />))}</div>
          </Accordion>
        </Jumbotron>
      </div>
    );
  }
}

export default New;