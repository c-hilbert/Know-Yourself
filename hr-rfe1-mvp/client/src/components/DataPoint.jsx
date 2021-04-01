import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const DataPoint = (props) => {
  return (

    <tr>
      <td>{props.date}</td>
      <td>{props.condition}</td>
      <td>{props.metCondition}</td>
      <td>{props.rating}</td>
    </tr>

  );
};


export default DataPoint;