import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';

class DesignForm extends React.Component {
  constructor(props) {
    super(props);
    // Set the initial input values
    this.state = {
      currentStep: 1 // Default is Step 1
      // email: '',
      // username: '',
      // password: '',
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

  _next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
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
          type="button" onClick={this._prev}>
        Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
        Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <h1>React Wizard Form 🧙‍♂️</h1>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {/*
            render the form steps and pass required props in
          */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            // email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            // username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            // password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}

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
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
      />
    </div>
  );
};

const Step2 = (props) => {
  return (<div></div>);
  // if (props.currentStep !== 2) {
  //   return null
  // }
  // return(
  //   <div className="form-group">
  //     <label htmlFor="username">Username</label>
  //     <input
  //       className="form-control"
  //       id="username"
  //       name="username"
  //       type="text"
  //       placeholder="Enter username"
  //       value={props.username}
  //       onChange={props.handleChange}
  //       />
  //   </div>
  // );
};

const Step3 = (props) => {
  return (<div></div>);
//   if (props.currentStep !== 3) {
//     return null;
//   }
//   return(
//     <React.Fragment>
//     <div className="form-group">
//       <label htmlFor="password">Password</label>
//       <input
//         className="form-control"
//         id="password"
//         name="password"
//         type="password"
//         placeholder="Enter password"
//         value={props.password}
//         onChange={props.handleChange}
//         />
//     </div>
//     <button className="btn btn-success btn-block">Sign up</button>
//     </React.Fragment>
//   );
};

export default DesignForm;