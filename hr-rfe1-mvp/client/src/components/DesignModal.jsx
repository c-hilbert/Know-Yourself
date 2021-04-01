import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import data from '../../src/dummy_data.js';
import Experiment from './Experiment.jsx';

class DesignModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  // handleClose() {
  //   this.setState({show: false});
  // }
  // handleShow() {
  //   this.setState({show: true});
  // }

  render() {
    return (<div></div>);
    // const show = this.state.show;


    // return (
    //   <>
    //     <Button variant="primary" onClick={this.handleShow.bind(this)}>
    //       Launch demo modal
    //     </Button>

    //     <Modal show={show} onHide={this.handleClose.bind(this)}>
    //       <Modal.Header closeButton>
    //         <Modal.Title>Modal heading</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    //       <Modal.Footer>
    //         <Button variant="secondary" onClick={this.handleClose.bind(this)}>
    //           Close
    //         </Button>
    //         <Button variant="primary" onClick={this.handleClose.bind(this)}>
    //           Save Changes
    //         </Button>
    //       </Modal.Footer>
    //     </Modal>
    //   </>
    // );
  }
}

export default DesignModal;