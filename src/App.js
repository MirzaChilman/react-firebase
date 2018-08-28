import React, { Component } from 'react';
import { database } from './firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: null,
    newData: ''
  };

  dataRef = null;

  componentDidMount() {
    this.dataRef = database.ref('dataReferensi/Baru');
    // database.on('value', snapshot => {asdsa
    this.dataRef.on('value', snapshot => {
      snapshot.ref();

      this.setState({
        data: snapshot.val()
      });
    });
  }
  handleChange = e => {
    const newData = e.target.value;
    this.setState({
      newData
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.dataRef.push(this.state.newData);
    // this.dataRef.ref('/Data Baru/Data paling baru').push(this.state.newData);
    /* database
      .ref()
      .child('Data Baru')
      .push(this.state.newData); */
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newData}
          />
          <button type="Submit">Submit </button>
        </form>
      </div>
    );
  }
}

export default App;
