import React, { Component } from 'react';

// Import Stylesheet //
// import './App.css';

// Import Components //
import Header from './components/Header/Header'
import Body from './components/Body/Body'
class App extends Component {
  render() {
    return (
      <div>  
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
