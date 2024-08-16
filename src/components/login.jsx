import React, { Component } from "react";
import AuthService from "../services/AuthService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
  }

  login() {
    AuthService.loginWithGoogle();
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={() => this.login()}>
            {" "}
            Add Employee
          </button>
        </div>
        <br></br>
      </div>
    );
  }
}

export default ListEmployeeComponent;
