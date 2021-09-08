import './App.css';
import React from "react"
import { Container, Col, Row, Nav, Navbar } from "react-bootstrap"
import { HouseDoorFill, PeopleFill, CalendarDateFill } from "react-bootstrap-icons"
import { Switch, Route, Link } from "react-router-dom"
import Logo from "./assets/logo.png"
import Profile from "./assets/profile.png"
import Employee from './pages/employee';

function App() {
  return (
    <>
      <Container fluid>

        <Navbar bg="light" variant="light"
          style={{
            position: "fixed",
            width: "100%",
            backgroundColor: "white",
            zIndex:"9999"
          }} id="dekstop-view">
          <Container className="navbar-top" style={{ padding: "0" }} className="d-flex justify-content-between">
            <Navbar.Brand href="#home"><img src={Logo} style={{ width: "150px", padding: "10px 24px" }} alt="gadjian" /></Navbar.Brand>
            <Nav>
              <span style={{ padding: "20px" }}>Hello, Gadjian User!</span>
              <img src={Profile} style={{ width: "70px", padding: " 10px 24px 10px 0" }} />
            </Nav>
          </Container>
        </Navbar>
        <Navbar bg="light" variant="light"
          style={{
            position: "fixed",
            width: "100%",
            backgroundColor: "white",
            zIndex:"9999"
          }} id="mobile-view">
          <Container className="navbar-top" style={{ padding: "0" }} className="d-flex justify-content-between">
            <Navbar.Brand href="#home"><img src={Logo} style={{ width: "150px", padding: "10px 24px" }} alt="gadjian" /></Navbar.Brand>
            <Nav>
              <span style={{ padding: "20px" }}>Hello, Gadjian User!</span>
              <img src={Profile} style={{ width:"70px",height:"70px", padding: " 10px 24px 10px 0" }} />
            </Nav>
          </Container>
        </Navbar>

        <div className="content">
          <div id="sidebar-wrapper">
            <Nav className="sidebar flex-column"
              activeKey="/home">
              <Nav.Item style={{ marginTop: "100px" }}>
                <Nav.Link eventKey="link-1" >
                  <Link to="/" className="menu-text"><HouseDoorFill className="icons" />Beranda</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" className="menu-text">
                  <Link to="/employee" className="menu-text"><PeopleFill className="icons" />Personel Link</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" className="menu-text">
                  <Link to="/attendance" className="menu-text"><CalendarDateFill className="icons" />Daily Attendance</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Col id="content-wrapper">
            <div >
              <Switch>
                <Route path="/employee">
                  <Employee />
                </Route>
              </Switch>
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
}

export default App;
