import React, { Component } from "react";
import Link from "../Link";
import Container from "../Container";

import logo from "./logo.jpg";
import { Header, Logo, Nav } from "./styles";

class Navigation extends Component {
  render() {
    return (
      <Header>
        <Container>
          <Logo>
            <span>Ardent</span>
            <img className="center" src={logo} alt="Ardent Logo" />
          </Logo>
          <Nav className="center">
            <Link exact to="/ArdentWebsite/">
              Home
            </Link>
            <Link exact to="/ArdentWebsite/commands">
              Commands
            </Link>
            <Link exact to="/ArdentWebsite/status">
              Status
            </Link>
          </Nav>
        </Container>
      </Header>
    );
  }
}

export default Navigation;
