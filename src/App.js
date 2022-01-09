import logo from '/Users/megk/finalproj/finalproject/src/Eats.png';
import './App.css';
import './App.js';
import './searchbox.js'
import './search.js'
import React from 'react';
import SearchBox from './searchbox.js';



class App extends React.Component {
  render() {

    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <SearchBox />








      </div>

    );
  }
}

export default App;
