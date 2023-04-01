import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";


export class App extends Component {

  // handleChange = (e) => {
  //   console.log(this.State.value)
  //   this.setState({ value: e.target.value })
  // }



  render() {
    return (
      <div>

        <Searchbar />
      </div >
    );
  }

};
