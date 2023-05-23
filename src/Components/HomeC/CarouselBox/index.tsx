import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselBox.module.css";
import img1 from "../../../assets/img/carusel/image1.jpg";
import img2 from "../../../assets/img/carusel/image2.jpg";
import img3 from "../../../assets/img/carusel/image3.jpg";
import img4 from "../../../assets/img/carusel/image4.jpg";
import img5 from "../../../assets/img/carusel/image5.jpg";
import { Col, Row } from "react-bootstrap";

function CarouselBox({ windowWidth }: any) {
  const slideData = [
    {
      id: 1,
      title: "ILX3525 серія - освітлення для небезпечних зон",
      subTitile:
        "Високотехнологічне обладнання для нефтехімічної промисловості.",
      img: img1,
    },
    {
      id: 2,
      title: "ILX5530 серії - освітлення для агресивних середовищ",
      subTitile:
        "Стійкі до корозії, світильники з рейтингом захисту IP69K, які можна мити під високим тиском.",
      img: img2,
    },
    {
      id: 3,
      title: "IL450 серія для торговельного освітлення",
      subTitile: "Максимізує простір та комфорт",
      img: img3,
    },
    {
      id: 4,
      title: "RWL3525 серія світильників для освітлення доріг та територій",
      subTitile:
        "Система інтелектуального керування зі здатністю виявлення денного світла.",
      img: img4,
    },
    {
      id: 5,
      title:
        "LX450 серія світильників для освітлення в умовах високих температур",
      subTitile: "Переважна продуктивність для найвимогливіших середовищ.",
      img: img5,
    },
  ];

  if (windowWidth > 767) {
    return (
      <Carousel className={styles.wrapper}>
        {slideData.map((slide) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide.img}
                alt="First slide"
              />
              <Carousel.Caption>
                <Row>
                  <Col className={`col-9 ${styles.col}`}>
                    <h3 className={styles.title}>{slide.title}</h3>
                    <p className={styles.subtitle}>{slide.subTitile}</p>
                  </Col>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  } else {
    return (
      <>
        <Carousel className={styles.wrapper}>
          {slideData.map((slide) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide.img}
                  alt="First slide"
                />

                <div className={styles.carouselCaption}>
                  <h3 className={styles.title}>{slide.title}</h3>
                  <p className={styles.subtitle}>{slide.subTitile}</p>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </>
    );
  }
}

export default CarouselBox;
