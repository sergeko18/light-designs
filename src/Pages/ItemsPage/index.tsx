import React from "react";
import styles from "./ItemsPage.module.css";
import { Col, Row } from "react-bootstrap";
import imgTest from "../../assets/img/carusel/image1.jpg";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ItemsPage = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const [item, setItem] = React.useState<any>();

  let { id } = useParams();

  React.useEffect(() => {
    async function fetchCategory() {
      try {
        let { data } = await axios.get(
          `https://64730703d784bccb4a3c31f8.mockapi.io/products/${id}`
        );
        setItem(data);
      } catch (error) {
        alert("oupsss... We have some problems. You should try again");
        navigate("/");
      }
    }
    fetchCategory();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Row>
          <Col sm={6} className={styles.info__col}>
            <h3 className={styles.info__col_title}>{item ? item.name : ""}</h3>
            <p className={styles.info__col_text}>{item ? item.info : ""}</p>
            <p className={styles.info__col_text}>{item ? item.subInfo : ""}</p>
            <ul className={styles.info__col_infoUl}>
              {item
                ? item.infoUL.map((infoUlLi: any) => {
                    return <li>{infoUlLi}</li>;
                  })
                : ""}
            </ul>
            <h6 className={styles.info__col_applicationsTitle}>Застосування</h6>
            <ul className={styles.info__col_infoUl}>
              {item
                ? item.applicationsUL.map((infoUlLi: any, i: any) => {
                    return <li key={i}>{infoUlLi}</li>;
                  })
                : ""}
            </ul>
          </Col>
          <Col sm={6} className={styles.carousel__col}>
            <img
              className={styles.carousel__img}
              src={item ? item.imageURL : ""}
              alt="img"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ItemsPage;
