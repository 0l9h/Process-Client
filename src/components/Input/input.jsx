import React, { Component } from "react";
import styles from "./input.css";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: "",
      extension: "",
      dirChanged: false,
      extensionChanged: false,
      formErrors: { dir: "", extension: "" },
      dirValid: false,
      extensionValid: false,
      formValid: false,
    };
  }
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let dirValid = this.state.dirValid;
    let extensionValid = this.state.extensionValid;
    switch (fieldName) {
      case "dir":
        dirValid = value.match(/^[a-zA-Z]:\\[\\\S|*\S]?.*$/g);
        fieldValidationErrors.dir = dirValid ? "" : "Invalid directory";
        this.setState({ dirChanged: true });
        break;
      case "extension":
        extensionValid = value.match(/^\*\.((\*)|([a-z0-9]+)){1}$/);
        fieldValidationErrors.extension = extensionValid
          ? ""
          : "Invalid file extension";
        this.setState({ extensionChanged: true });
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        dirValid: dirValid,
        extensionValid: extensionValid,
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid: this.state.dirValid && this.state.extensionValid,
    });
  }
  errorClass(fieldName, error) {
    switch (fieldName) {
      case "dir":
        if (this.state.dirChanged === true)
          return error.length === 0 ? "is-valid" : "is-invalid";
        break;
      case "extension":
        if (this.state.extensionChanged === true)
          return error.length === 0 ? "is-valid" : "is-invalid";
        break;

      default:
        break;
    }
  }
  render() {
    return (
      <form>
        <div className="row">
          <div className="col-8">
            <div className={`input-group`}>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  Path
                </span>
              </div>
              <input
                type="text"
                name="dir"
                className={`form-control ${this.errorClass(
                  "dir",
                  this.state.formErrors.dir
                )}`}
                id="basic-dir"
                aria-describedby="basic-addon3"
                placeholder="C:\Program Files"
                onChange={this.handleUserInput}
                required
              ></input>
            </div>
          </div>
          <div className="col position-relative">
            <div className={`input-group`}>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  Extension
                </span>
              </div>
              <input
                name="extension"
                type="text"
                className={`form-control ${this.errorClass(
                  "extension",
                  this.state.formErrors.extension
                )}`}
                id="basic-format"
                aria-describedby="basic-addon3"
                placeholder="*.txt"
                onChange={this.handleUserInput}
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-8 position-relative">
            <label>{this.state.formErrors.dir}</label>
          </div>
          <div className="col position-relative">
            <label>{this.state.formErrors.extension}</label>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            return this.props.onClick({
              dir: this.state.dir,
              extension: this.state.extension,
            });
          }}
          disabled={!this.state.formValid}
        >
          Send Request
        </button>
      </form>
    );
  }
}

export default InputForm;
