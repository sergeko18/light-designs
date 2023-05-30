import React from "react";
import styles from "./Subcategory.module.css";
import { Col, Row } from "react-bootstrap";
import image1 from "../../assets/img/subcategory/CLM60Series.png";
import Divider from "../../Components/Divider";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ActiveCategoryType } from "../../App";

type SubcategoryPropsTypes = {
  ActiveCategory: ActiveCategoryType;
  subcategoryName: string;
};

const Subcategory: React.FC<SubcategoryPropsTypes> = (props) => {
  const [products, setProducts] = React.useState<
    [
      {
        id: string;
        category_ids: number[];
        name: string;
        imageURL: string;
      }
    ]
  >([
    {
      id: "0",
      category_ids: [],
      name: "Loading",
      imageURL: "",
    },
  ]);

  const navigate = useNavigate();

  let { id } = useParams();

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3 className={styles.title__text}>{props.subcategoryName}</h3>
      </div>

      {products.map((item) => {
        return item.category_ids.map((category_id) => {
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
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Voluptate officia veniam quibusdam, earum m,
                          earum perspiciatis natus optio incidunt porro ipsam
                          possimus in hic nostrum modi corrupti itaque voluptas
                          quidem impedit quos!
                        </p>
                        <button className={styles.container__col2_button}>
                          Детальніше
                        </button>
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

export default Subcategory;
