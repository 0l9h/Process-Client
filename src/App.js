
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/Input/input.jsx";
import React from "react";
import Table from './components/Table/Table.jsx'
import $ from "jquery";


class App extends React.Component {
  state = {};

  handleClick = (userInput) => {
      userInput.dir.replace("\\",/\\/);    
      $.ajax("http://localhost:30629/api/FilesInfo", {
      data: JSON.stringify({
        Path: userInput.dir,
        Extension: userInput.extension,
      }),
      type: "POST",
      success: (data) => {
        $("#table").html(<Table files={data.files} totalSize={data.totalSize}/>)
      },
      timeout: 5000,
      error: () => {

      }
    });
  };

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
