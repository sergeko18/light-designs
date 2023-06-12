import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo/logo.svg";
import ProductMenu from "./ProductMenu";
import { Link } from "react-router-dom";
import ApplicationsMenu from "./ApplicationsMenu";

type HeaderPropsType = { windowWidth: number };

const Header = ({ windowWidth }: HeaderPropsType) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isProductMenuActive, setIsProductMenuActive] = React.useState(false);
  const [isApplicationsMenuActive, setIsApplicationsMenuActive] =
    React.useState(false);

  React.useEffect(() => {});

  const popspateOnClick = () => {
    if (isProductMenuActive) {
      setIsProductMenuActive(false);
    }
    if (isApplicationsMenuActive) {
      setIsApplicationsMenuActive(false);
    }
    if (isActive) {
      setIsActive(false);
    }
    if (document.body.classList.contains("_lock")) {
      document.body.classList.remove("_lock");
    }
  };

  window.addEventListener("popstate", popspateOnClick);

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
    if (isApplicationsMenuActive) {
      setIsApplicationsMenuActive(false);
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
    if (isApplicationsMenuActive) {
      setIsApplicationsMenuActive(false);
    }
  };

  const handleApplicationsClick = () => {
    if (windowWidth > 767) {
      if (document.body.classList.contains("_lock")) {
        document.body.classList.remove("_lock");
      } else {
        document.body.classList.add("_lock");
      }
    }
    setIsApplicationsMenuActive(!isApplicationsMenuActive);
    setIsActive(false);
    if (isProductMenuActive) {
      setIsProductMenuActive(false);
    }
  };

  const handleLogoClick = () => {
    if (document.body.classList.contains("_lock")) {
      document.body.classList.remove("_lock");
    }
    setIsProductMenuActive(false);
    setIsApplicationsMenuActive(false);
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
                <span
                  className={styles.menu__link}
                  onClick={handleApplicationsClick}
                >
                  ЗАСТОСУВАННЯ
                </span>
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
      />
      <ApplicationsMenu
        isActive={isApplicationsMenuActive}
        onHandleClick={handleLogoClick}
      />
    </header>
  );
};

export default Header;
