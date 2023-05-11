import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/img/cardsLights/imageCL1.jpg";
import img2 from "../../assets/img/cardsLights/imageCL2.jpg";
import img3 from "../../assets/img/cardsLights/imageCL3.jpg";
import styles from "./CardBoxLights.module.css";

function CardsBoxLights() {
  return (
    <Container className={styles.wrapper}>
      <Row>
        <Col>
          <Card
            className={styles.card}
            style={{ width: "20rem", border: "none" }}
          >
            <Card.Img className={styles.images} variant="top" src={img1} />
            <Card.Body className="text-center">
              <Card.Title className={styles.title}>
                Передові технології
              </Card.Title>
              <Card.Text>
                Теплове управління є найважливішою особливістю при розробці
                надійних світлодіодних освітлювальних приладів для екстремальних
                промислових застосувань.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            className={styles.card}
            style={{ width: "20rem", border: "none" }}
          >
            <Card.Img className={styles.images} variant="top" src={img2} />
            <Card.Body className="text-center">
              <Card.Title className={styles.title}>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            className={styles.card}
            style={{ width: "20rem", border: "none" }}
          >
            <Card.Img className={styles.images} variant="top" src={img3} />
            <Card.Body className="text-center">
              <Card.Title className={styles.title}>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardsBoxLights;
