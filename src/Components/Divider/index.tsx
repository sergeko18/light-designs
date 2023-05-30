import React from "react";
import ico from "../../assets/icons/catalog.png";
import styles from "./Divider.module.css";

const Divider = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dContainer}>
        <div>
          <h6 className={styles.dTitle}>Коталог продукту</h6>
          <img className={styles.dImg} src={ico} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Divider;
