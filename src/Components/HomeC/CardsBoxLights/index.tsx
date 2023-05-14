import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import img1 from "../../../assets/img/cardsLights/imageCL1.jpg";
import img2 from "../../../assets/img/cardsLights/imageCL2.jpg";
import img3 from "../../../assets/img/cardsLights/imageCL3.jpg";
import styles from "./CardBoxLights.module.css";

const CardsBoxLightsData = [
  {
    id: 1,
    img: img1,
    title: "IL280 Series",
    subtitle:
      "Серія IL280 - це ультракомпактне, високогустотне промислове світло з LED, розроблене для заміни традиційних фіксаторів HID до 250 Вт.",
  },
  {
    id: 2,
    img: img2,
    title: "RWBE40 Series",
    subtitle:
      "RWB E40 - це LED-лампочка стандарту E40 для вуличного освітлення, яка містить передову технологію та спеціально розроблена для заміни застарілих ламп",
  },
  {
    id: 3,
    img: img3,
    title: "RWL600 Series",
    subtitle:
      "RWL600 - це легкий та простий у монтажі пристрій, який забезпечує відмінну видимість та надійність на дорогах невеликої та середньої протяжності",
  },
];

function CardsBoxLights() {
  return (
    <Container className={styles.wrapper}>
      <Row>
        {CardsBoxLightsData.map((card) => {
          return (
            <Col>
              <Card
                className={styles.card}
                style={{ width: "20rem", border: "none" }}
              >
                <Card.Img
                  className={styles.images}
                  variant="top"
                  src={card.img}
                />
                <Card.Body className="text-center">
                  <Card.Title>
                    <h6 className={styles.title}>{card.title}</h6>
                  </Card.Title>
                  <Card.Text>
                    <p>{card.subtitle}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CardsBoxLights;
