
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/Input/input.jsx";
import React from "react";
import Table from './components/Table/Table.jsx'
import $ from "jquery";


class App extends React.Component {
  state = {};

  handleClick = async (userInput) => {

    userInput.dir.replace("\\",/\\/);
    const response = await fetch("http://localhost:30629/api/FilesInfo",
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
            Path: userInput.dir,
            Extension: userInput.extension,
            })
        }).then((resp) => resp.json())
        console.log(response);
  }

  render() {
    return (
      <div className="container">
      <div>
        <InputForm onClick={this.handleClick} />
      </div>
      <div id="table" className="col-8 mx-auto"></div>
      </div>
    );
  }
}

export default App;
