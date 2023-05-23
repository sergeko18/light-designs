import React from "react";
import styles from "./ProductMenu.module.css";
import { Col, Row } from "react-bootstrap";

const categories = [
  {
    id: 1,
    name: "Освітлення в приміщеннях",
    subcategories: [
      {
        id: 11,
        name: "Трофери/Офісні світильники",
      },
      {
        id: 12,
        name: "Модернізація високоих/низьких приміщень",
      },
      {
        id: 13,
        name: "Промислове/Висотне освітлення",
      },
      {
        id: 14,
        name: "Лінійне освітлення",
      },
    ],
  },
  {
    id: 2,
    name: "Зовнішнє освітлення",
    subcategories: [
      {
        id: 21,
        name: "Flood",
      },
      {
        id: 22,
        name: "Паркінгова структура",
      },
      {
        id: 23,
        name: "Проїжджа частина",
      },
      {
        id: 24,
        name: "Місце/Ділянка",
      },
      {
        id: 25,
        name: "Козирок/Софіт",
      },
      {
        id: 26,
        name: "Білборди/Вивіски",
      },
      {
        id: 27,
        name: "Тунель",
      },
      {
        id: 28,
        name: "Кріплення на стіну",
      },
      {
        id: 29,
        name: "Високомачтові",
      },
      {
        id: 210,
        name: "Стадіон/Спортивний Майданчик",
      },
    ],
  },
  {
    id: 3,
    name: "Освітлення в екстремальних умовах",
    subcategories: [
      {
        id: 31,
        name: "Небезпечна зона",
      },
      {
        id: 32,
        name: "Харчова промисловість",
      },
      {
        id: 33,
        name: "Високі температури",
      },
      {
        id: 34,
        name: "Карозійні/Морські",
      },
    ],
  },
];

const products = [
  {
    id: 1,
    name: "CLM60 Серія",
    category_ids: [11],
  },
  {
    id: 2,
    name: "ILB Серія",
    category_ids: [12],
  },
  {
    id: 3,
    name: "LU Серія",
    category_ids: [13, 14, 22, 25],
  },
  {
    id: 4,
    name: "IL280 Серія",
    category_ids: [13, 21, 22, 25, 28],
  },
  {
    id: 5,
    name: "IL3525 Series",
    category_ids: [13, 21, 22, 25, 26, 28],
  },
  {
    id: 6,
    name: "IL450 Серія",
    category_ids: [13, 21, 26, 29, 210],
  },
  {
    id: 7,
    name: "RWBE40 Серія",
    category_ids: [23],
  },
  {
    id: 8,
    name: "RWL3525 Серія",
    category_ids: [23, 24],
  },
  {
    id: 9,
    name: "RWLII Серія",
    category_ids: [23, 24],
  },
  {
    id: 10,
    name: "RWL600 Серія",
    category_ids: [23, 24],
  },
  {
    id: 11,
    name: "LX Серія",
    category_ids: [27, 31, 32],
  },
  {
    id: 12,
    name: "ILX3525 Серія",
    category_ids: [27, 31, 32, 33],
  },
  {
    id: 13,
    name: "ILX450 Серія",
    category_ids: [27, 31, 32, 33],
  },
  {
    id: 14,
    name: "ILX5530 Серія",
    category_ids: [32, 34],
  },
  {
    id: 14,
    name: "CB Серія",
    category_ids: [12, 24],
  },
  {
    id: 15,
    name: "ILX280 Серія",
    category_ids: [31, 33],
  },
  {
    id: 16,
    name: "RWX600 Серія",
    category_ids: [34],
  },
];

const ProductMenu = ({ isActive }: any) => {
  return (
    <div
      className={`${styles.subprod__body} ${
        isActive ? `${styles._active}` : ""
      }`}
    >
      {categories.map((menu) => {
        return (
          <>
            <div className={styles.subprod__container}>
              <h2 className={styles.subprod__title}>{menu.name}</h2>
            </div>
            <Row className={styles.subprod__row}>
              {menu.subcategories.map((subcategories) => {
                return (
                  <Col className={styles.subprod__col}>
                    <h3>
                      <a className={styles.subprod__subtitle} href="/">
                        {subcategories.name}
                      </a>
                    </h3>

                    {products.map((item) => {
                      for (let i = 0; i < item.category_ids.length; i++) {
                        if (item.category_ids[i] === subcategories.id) {
                          return (
                            <div>
                              <a className={styles.subprod__link} href="/">
                                {item.name}
                              </a>
                            </div>
                          );
                        }
                      }
                    })}
                  </Col>
                );
              })}
            </Row>
          </>
        );
      })}
    </div>
  );
};

export default ProductMenu;
