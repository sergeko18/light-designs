import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo/logo.svg";
import ProductMenu from "./ProductMenu";
import { Link } from "react-router-dom";

type HeaderPropsType = { windowWidth: number; setSubcategoryName: Function };

const Header = ({ windowWidth, setSubcategoryName }: HeaderPropsType) => {
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
    setIsActive(false);
  };

  const handleLogoClick = () => {
    if (document.body.classList.contains("_lock")) {
      document.body.classList.remove("_lock");
    }
    setIsProductMenuActive(false);
    setIsActive(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to="/" className={styles.header__logo}>
          <img onClick={handleLogoClick} src={logo} alt="Logo" />
        </Link>
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
      <ProductMenu
        onHandleClick={handleLogoClick}
        isActive={isProductMenuActive}
        setSubcategoryName={setSubcategoryName}
      />
    </header>
  );
};

export default Header;
