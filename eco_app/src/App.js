import React, {useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Routes from "./Routes"
import './App.css';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

function App(props) {

  function renderRoutes(){

  }
  return (
    <div className="App">
      <div className="NavBarContainer">
        <Navbar expand="lg" className="NavBar">
          <Nav>
            <Nav.Link href="/signup" >Sign up</Nav.Link>
            <Nav.Link href="/login" >Login</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <Routes {...props}/>
    </div>
  );
}

export default App;
