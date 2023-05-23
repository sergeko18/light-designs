import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo/logo.svg";
import ProductMenu from "./ProductMenu";

const Header = ({ windowWidth }: any) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isProductMenuActive, setIsProductMenuActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (document.body.classList.contains("_lock")) {
      document.body.classList.remove("_lock");
    } else {
      document.body.classList.add("_lock");
    }
    if (isProductMenuActive) {
      setIsProductMenuActive(false);
    }
  };

  const handleProdClick = () => {
    if (windowWidth > 767) {
      if (document.body.classList.contains("_lock")) {
        document.body.classList.remove("_lock");
      } else {
        document.body.classList.add("_lock");
      }
    }
    setIsProductMenuActive(!isProductMenuActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a href="/" className={styles.header__logo}>
          <img src={logo} alt="Logo" />
        </a>
        <div className={styles.header__menu}>
          <div
            className={`${styles.menu__icon} ${
              isActive ? `${styles._active}` : ""
            }`}
            onClick={handleClick}
          >
            <span></span>
          </div>
          <nav
            className={`${styles.menu__body} ${
              isActive ? `${styles._active}` : ""
            }`}
          >
            <ul className={styles.menu__list}>
              <li>
                <span className={styles.menu__link} onClick={handleProdClick}>
                  ТОВАРИ
                </span>
              </li>
              <li>
                <span className={styles.menu__link}>ЗАСТОСУВАННЯ</span>
              </li>
              <li>
                <span className={styles.menu__link}>ПЕРЕВАГИ</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <ProductMenu isActive={isProductMenuActive} />
    </header>
  );
};

export default Header;
