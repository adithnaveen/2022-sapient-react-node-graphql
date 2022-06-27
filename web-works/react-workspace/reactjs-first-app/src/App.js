import React, { Component } from 'react';


class App extends Component {
  render() {
    const msg = "Hello World";
    const name = 'Sandeep Verma';
    return <h1>{msg} to React from {name}</h1>
  }
}

export default App;