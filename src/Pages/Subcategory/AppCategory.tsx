import React from "react";
import styles from "./Subcategory.module.css";
import { Col, Row } from "react-bootstrap";
import image1 from "../../assets/img/subcategory/CLM60Series.png";
import Divider from "../../Components/Divider";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const AppCategory = (props: any) => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const [products, setProducts] = React.useState<
    [
      {
        id: string;
        category_ids: number[];
        appCategory_ids: number[];
        name: string;
        imageURL: string;
        info: string;
      }
    ]
  >([
    {
      id: "0",
      category_ids: [],
      appCategory_ids: [],
      name: "Loading",
      imageURL: "",
      info: "",
    },
  ]);

  React.useEffect(() => {
    async function fetchCategory() {
      try {
        let { data } = await axios.get(
          `https://64730703d784bccb4a3c31f8.mockapi.io/products`
        );
        setProducts(data);
      } catch (error) {
        alert("oupsss... We have some problems. You should try again");
        navigate("/");
      }
    }
    fetchCategory();
  }, []);

  let { id } = useParams();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3 className={styles.title__text}>{props.subcategoryName}</h3>
      </div>

      {products.map((item) => {
        return item.appCategory_ids.map((category_id) => {
          if (String(category_id) === String(id)) {
            return (
              <div className={styles.container} key={item.id}>
                <div className={styles.container__item}>
                  <Row>
                    <Col sm={5}>
                      <div className={styles.image__container}>
                        <img
                          className={styles.image}
                          src={item.imageURL}
                          alt="img"
                        />
                      </div>
                    </Col>
                    <Col sm={7}>
                      <div className={styles.container__col2}>
                        <h4 className={styles.container__col2_title}>
                          {item.name}
                        </h4>
                        <p className={styles.container__col2_txt}>
                          {item.info}
                        </p>
                        <Link
                          to={`/itemspage/${item.id}`}
                          className={styles.container__col2_button}
                        >
                          Детальніше
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            );
          }
        });
      })}

      <Divider />
    </div>
  );
};

export default AppCategory;
