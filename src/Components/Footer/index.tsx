import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <Row>
          <Col>
            <p>Copyright © Your Company</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
