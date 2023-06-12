import React from "react";
import styles from "./Categories.module.css";
import { Col, Row } from "react-bootstrap";
import Divider from "../../Components/Divider";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { ActiveCategoryType } from "../../App";

type propsCategoriesTypes = {
  ActiveCategory: ActiveCategoryType;
  setActiveCategory: Function;
};

const Categories: React.FC<propsCategoriesTypes> = (props) => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  let { id } = useParams();

  React.useEffect(() => {
    async function fetchCategory() {
      try {
        let { data } = await axios.get(
          `https://64730703d784bccb4a3c31f8.mockapi.io/categories/${id}`
        );
        props.setActiveCategory(data);
      } catch (error) {
        alert("oupsss... We have some problems. You should try again");
        navigate("/");
      }
    }
    fetchCategory();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3 className={styles.title__text}>{props.ActiveCategory.name}</h3>
      </div>
      <div className={styles.container}>
        <Row>
          {props.ActiveCategory.subcategories.map((item) => {
            return (
              <Col key={item.id} className={styles.col}>
                <Link
                  className={styles.col__link}
                  to={`/subcategory/${item.id}`}
                >
                  <h2 className={styles.item__name}>{item.name}</h2>
                  <img src={item.imageURL} alt="img" />
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>

      <Divider />
    </div>
  );
};

export default Categories;
