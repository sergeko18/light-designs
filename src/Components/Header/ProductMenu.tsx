import React from "react";
import styles from "./ProductMenu.module.css";
import { Col, Row } from "react-bootstrap";
import categories from "../../data/categories.json";
import products from "../../data/products.json";
import subcategories from "../../data/subcategories.json";
import { Link } from "react-router-dom";

const ProductMenu = ({ isActive, onHandleClick }: any) => {
  return (
    <div
      className={`${styles.subprod__body} ${
        isActive ? `${styles._active}` : ""
      }`}
    >
      {categories.map((menu) => {
        return (
          <div key={menu.id}>
            <div onClick={onHandleClick} className={styles.subprod__container}>
              <Link
                className={styles.subprod__container_link}
                to={`/categories/${menu.id}`}
              >
                <h2 className={styles.subprod__title}>{menu.name}</h2>
              </Link>
            </div>
            <Row className={styles.subprod__row}>
              {subcategories.map((subcategories) => {
                if (menu.id === subcategories.categoryId) {
                  return (
                    <Col key={subcategories.id} className={styles.subprod__col}>
                      <Link
                        className={styles.subprod__col_link}
                        to={`/subcategory/${subcategories.id}`}
                        onClick={() => {
                          onHandleClick();
                        }}
                      >
                        <h3 className={styles.subprod__subtitle}>
                          {subcategories.name}
                        </h3>
                      </Link>

                      {products.map((item) => {
                        for (let i = 0; i < item.category_ids.length; i++) {
                          if (
                            item.category_ids[i] === Number(subcategories.id)
                          ) {
                            return (
                              <div key={item.id}>
                                <Link
                                  className={styles.subprod__link}
                                  to={`/itemspage/${item.id}`}
                                  onClick={() => {
                                    onHandleClick();
                                  }}
                                >
                                  {item.name}
                                </Link>
                              </div>
                            );
                          }
                        }
                        return null;
                      })}
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default ProductMenu;
