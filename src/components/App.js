import React, { Component } from "react";
import Header from "./Bootstrap/header";

class App extends Component {
  state = {
    DarkMode: true
  };
  render() {
    return (
      <div className="App">
        <Header dark={this.state.DarkMode}>Gittweet</Header>
      </div>
    );
  }
}
export default App;
