import React, { Component } from "react";
import Header from "./Bootstrap/header";

class App extends Component {
  state = {
    DarkMode: true,
    Name: "",
    Image: "",
    Messages: [
      {
        Name: "Hello",
        Image:
          "https://img-premium.flaticon.com/png/512/560/premium/560277.png?token=exp=1629635617~hmac=aa37c962efe4572b144558c8e2585946",
        Text: "Hi guys"
      },
      {
        Name: "Hello",
        Image:
          "https://img-premium.flaticon.com/png/512/560/premium/560277.png?token=exp=1629635617~hmac=aa37c962efe4572b144558c8e2585946",
        Text: "Hi gals"
      }
    ]
  };
  render() {
    // eslint-disable-next-line no-unused-vars
    const { DarkMode, Name, Image } = this.state;
    return (
      <div className="App">
        <Header
          dark={this.state.DarkMode}
          containerClassName="justify-content-center"
        >
          Gittweet
        </Header>
        <div className="container">
          <div className="col-12 col-md-6 offset-md-3">
            {Name.trim().length > 0 && Image.trim().length > 0
              ? "Show compose"
              : "Ask for name and image"}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
