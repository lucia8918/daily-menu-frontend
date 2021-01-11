import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Top() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">맛젊식당</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            오늘의 식단
          </Nav.Link>
          <Nav.Link as={Link} to="/weekly-menu">
            주간 식단표
          </Nav.Link>
          <Nav.Link as={Link} to="/menu-request">
            메뉴 요청
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Top;
