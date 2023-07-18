import "./Form.css";
import React, { Component } from "react";

export default class ClassForm extends Component {
  //  initial state
  state = {
    Name: "",
    Dept: "",
    Rating: "",
    EmpData: [],
  };
  changeHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.Name);
  };
  changeDept = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.Dept);
  };
  changeRating = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.Dept);
  };
  clickHndle = (e) => {
    e.preventDefault(); // prevent the reload
    const newObj = {
      name: this.state.Name,
      dept: this.state.Dept,
      rating: this.state.Rating,
    };
    this.state.EmpData.push(newObj); // aisa push karna hai data ku array main
    this.setState({ EmpData: this.state.EmpData }); // array push hogaya empdata
    // console.log(this.state.EmpData);
  };
  render() {
    return (
      <>
        <header className="header">
          <h1>Employee Feedback Form</h1>
        </header>
        <div className="innerBox">
          <div className="formBox">
            <form action="">
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                id="name"
                name="Name"
                onChange={this.changeHandle}
                required
                placeholder="Enter Your Name"
                value={this.state.Name}
                autoComplete="off"
              />
              <br />
              <label htmlFor="Department">Dept:</label>
              <input
                type="text"
                id="Dept"
                name="Dept"
                onChange={this.changeDept}
                required
                placeholder="Enter Your Department"
                value={this.state.Dept}
                autoComplete="off"
              />
              <br />
              <label htmlFor="Rating">Rating:</label>
              <input
                type="number"
                id="rating"
                name="Rating"
                onChange={this.changeRating}
                required
                placeholder="Enter Your Rating"
                value={this.state.Rating}
                autoComplete="off"
              />
              <br />

              <button onClick={this.clickHndle}>Submit</button>
            </form>
          </div>
        </div>
        <>
          {this.state.EmpData.map((item, index) => {
            return (
              <div key={index} className="dataBox">
                <h3> Name:{item.name} </h3>
                <h3>Dept :{item.dept}</h3>
                <h3>Rating:{item.rating}</h3>
              </div>
            );
          })}
        </>
      </>
    );
  }
}
