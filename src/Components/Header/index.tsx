import React from "react";
import { Nav, Navbar, Button, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo.svg";
import style from "./Heafer.module.css";

const Header: React.FC = () => {
  return (
    <div>
      <Navbar
        className={style.navbar}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img className="brnd" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                title="Продукція"
                id="navbarScrollingDropdown"
                className={style.dropdown}
              >
                <NavDropdown.Item href="#action3">
                  <h6>Освітлення внутрішнього застосування</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <p>Промислове / Високі стелі</p>
                  <ul>
                    <li>LU Series</li>
                    <li>IL280 Series</li>
                    <li>IL3525 Series</li>
                    <li>IL450 Series</li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <p>Лінійне призначення</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <p>Модернізації для високих/низьких стель</p>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="#action4">
                  <h6>Освітлення зовнішнього застосування</h6>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="#action3">
                  <h6>Екстремальні умови використання</h6>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className={style.dropdown}
                title="Застосування"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className={style.links} href="#home">
                Переваги
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
