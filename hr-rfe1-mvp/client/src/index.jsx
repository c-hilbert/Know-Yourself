import React from 'react';
import ReactDOM from 'react-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './dummy_data.js';
import New from './components/New.jsx';
import Current from './components/Current.jsx';
import History from './components/History.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>N=1
        </h1>
        <div className="app">
          <New/>
          <div className="right">
            <Current/>
            <History/>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
