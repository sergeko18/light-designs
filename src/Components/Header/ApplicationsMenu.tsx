import React from "react";
import styles from "./ProductMenu.module.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import applications from "../../data/applications.json";

const ApplicationsMenu = ({
  isActive,
  onHandleClick,
  setSubcategoryName,
}: any) => {
  return (
    <div
      className={`${styles.subprod__body} ${
        isActive ? `${styles._active}` : ""
      }`}
    >
      <div onClick={onHandleClick} className={styles.subprod__container}>
        <h2
          className={`${styles.subprod__title} ${styles.applications__title}`}
        >
          Застосування
        </h2>
      </div>
      <Row className={styles.applications__row}>
        {applications.map((item) => {
          return (
            <Col sm={3} key={item.id} className={styles.applications__col}>
              <Link
                className={styles.applications__col_link}
                to={`/appcategory/${item.id}`}
                onClick={() => {
                  onHandleClick();
                  setSubcategoryName(item.name);
                }}
              >
                <img
                  className={styles.applications__img}
                  src={item.imageURL}
                  alt="img"
                />
                <h4>{item.name}</h4>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ApplicationsMenu;
