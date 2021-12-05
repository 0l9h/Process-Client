import logo from './logo.svg';
import './App.css';
import InputForm from './components/Input/input'
import React from 'react';

class App extends React.Component {

  state = {

  }

  handleClick = (userInput) => {
    userInput.dir.replace("\\",/\\/);
    console.log(JSON.stringify(userInput));
  }

  render() { 
    return <div><InputForm onClick = {this.handleClick}/></div>;
  }
}

export default App;
