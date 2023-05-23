import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import img1 from "../../../assets/img/cards/imageC1.jpg";
import img2 from "../../../assets/img/cards/imageC2.jpg";
import img3 from "../../../assets/img/cards/imageC3.jpg";
import img4 from "../../../assets/img/cards/imageC4.jpg";
import styles from "./CardBoxAbout.module.css";

function CardsBoxAbout() {
  const CardsBoxAboutData = [
    {
      id: 1,
      img: img1,
      title: "Передові технології",
      subtitle:
        "Теплове управління є найважливішою особливістю при розробцінадійних світлодіодних освітлювальних приладів для екстремальних промислових застосувань.",
    },
    {
      id: 2,
      img: img2,
      title: "Стійке до середовища",
      subtitle:
        "Оцінюється, що освітлення складає 20% загального обсягу споживаної енергії в світі. Крім того, оцінюється, що 70% світового обсягу виробленої енергії отримується з використанням копалинних палив",
    },
    {
      id: 3,
      img: img3,
      title: "Планування освітлення",
      subtitle:
        "Створіюмо план освітлення для комерційного простору в приміщенні або на відкритому повітрі. Забезпечуємо рівні світлового потоку та збалансоване освітлення в просторі",
    },
    {
      id: 4,
      img: img4,
      title: "Фінансування проектів",
      subtitle:
        "Що таке фінансування енергоефективності? Вартість обладнання на початку проектування є основною перепоною для впровадження LED; фінансування енергоефективності надає рішення!",
    },
  ];

  return (
    <Container className={styles.wrapper}>
      <Row>
        {CardsBoxAboutData.map((cards) => {
          return (
            <Col>
              <Card
                className={styles.card}
                style={{ width: "20rem", border: "none" }}
              >
                <Card.Img
                  className={styles.images}
                  variant="top"
                  src={cards.img}
                />
                <Card.Body className="text-center">
                  <Card.Title>
                    <h6 className={styles.title}>{cards.title}</h6>
                  </Card.Title>
                  <Card.Text>
                    <p>{cards.subtitle}</p>
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

export default CardsBoxAbout;
