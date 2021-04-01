import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import DataPoint from '../components/DataPoint.jsx';

class LogForm extends React.Component {
  constructor(props) {
    super(props);
    // Set the initial input values
    this.state = {
      experiment: props.experiment,
      currentStep: 1, // Default is Step 1
      cause: '',
      effect: '',
      condition1: '',
      condition2: ''
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    console.log('new event');
    // const {name, value} = event.target;
    // this.setState({
    //   [name]: value
    // });
  }

  // Trigger an alert on form submission
  handleSubmit(event) {
    event.preventDefault();
    alert('submitted');
    // const { email, username, password } = this.state;
  }

  next() {
    let currentStep = this.state.currentStep;
    //if currentStep is greater or equal to two, set to three, if not, set to current step plus one
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

/*
* the functions for our button
*/
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1) {
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this.prev.bind(this)}>
        Previous
        </button>
      );
    }
    return null;
  }

  // nextButton() {
  //   let currentStep = this.state.currentStep;
  //   if (currentStep < 3) {
  //     return (
  //       <button
  //         className="btn btn-primary float-right"
  //         type="button" onClick={this.next.bind(this)}>
  //       Next
  //       </button>
  //     );
  //   }
  //   return null;
  // }

  render() {
    return (
      <React.Fragment>
        <h1>Log Today's Result</h1>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {/*
            render the form steps and pass required props in
          */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            next={this.next.bind(this)}
            // email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            next={this.next.bind(this)}
            // username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            logs={this.props.experiment.data}
            // password={this.state.password}
          />
          {/* {this.previousButton()} */}
          {/* {this.nextButton()} */}

        </form>
      </React.Fragment>
    );
  }
}

const Step1 = (props) => {
  if (props.currentStep !== 1) {

    return (<div></div>);
  }

  return (
    <div>
      <div> Which condition did you actually do today?</div>
      <Button variant="info" onClick={props.next}>Meditated</Button>
      <Button variant="info" onClick={props.next}>Didn't meditate</Button>
    </div>
  );
};

const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return (<div></div>);
  }

  return (
    <div>
      <div> Estimate your ability to focus today:
      </div>
      <ButtonGroup vertical>
        <Button onClick={props.next}>High</Button>
        <Button onClick={props.next}>Pretty Good</Button>
        <Button onClick={props.next}>OK</Button>
        <Button onClick={props.next}>Poor</Button>
        <Button onClick={props.next}>Terrible</Button>
      </ButtonGroup>
    </div>
  );
};

const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return (<div></div>);
  }

  return (
    <React.Fragment>
      <div>Your data so far:</div>
      <Table striped bordered hover size="sm">
        <thead>

          <tr>
            <th>Date</th>
            <th>Condition</th>
            <th></th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>

          {props.logs.map((log) => (
            <DataPoint
              date={log.date}
              condition={log.condition}
              metCondition={log.metCondition}
              rating={log.rating}
            />))}
        </tbody></Table>

    </React.Fragment>
  );
};




export default LogForm;