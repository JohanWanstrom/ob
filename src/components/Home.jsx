import React, { Component } from "react";
import Image from "../images/MarginalenHome.JPG";

const styles = {
  paperContainer: {
    height: 1080,
    backgroundImage: `url(${Image})`
  }
};

class LoggedOnPage extends Component {
  state = {};
  render() {
    return <div style={styles.paperContainer}>Welcome to Home(Fusk)!</div>;
  }
}

export default LoggedOnPage;
