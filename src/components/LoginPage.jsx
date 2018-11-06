import React, { Component } from "react";
import Image from "../images/MarginalenLoginPage.JPG";

const styles = {
  paperContainer: {
    height: 1080,
    backgroundImage: `url(${Image})`
  }
};

class LoginPage extends Component {
  state = {};
  render() {
    return <div style={styles.paperContainer}> Welcome to Login(Fusk)!</div>;
  }
}

export default LoginPage;
