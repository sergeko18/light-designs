import React from "react";
import styles from "./NotFound.module.css";
import Divider from "../../Components/Divider";

const NotFound = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className={styles.notFound}>
        <h3 className={styles.notFound__text}>404 Not Found</h3>
      </div>
      <Divider />
    </>
  );
};

export default NotFound;
