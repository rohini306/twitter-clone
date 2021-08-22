import React, { Component } from "react";
import Header from "./Bootstrap/header";

class App extends Component {
  state = {
    DarkMode: true
  };
  render() {
    return (
      <div className="App">
        <Header
          dark={this.state.DarkMode}
          containerClassName="justify-content-center"
        >
          Gittweet
        </Header>
      </div>
    );
  }
}
export default App;
