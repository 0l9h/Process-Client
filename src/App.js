import './App.css';
import InputForm from './component/input'
import React from 'react';



class App extends React.Component {

  state = {

  }

  handleClick = (userInput) => {
    console.log(JSON.stringify(userInput));
  }

  render() { 
    return <div><InputForm onClick = {this.handleClick}/></div>;
  }
}

export default App;
