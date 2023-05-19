import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (document.body.classList.contains("_lock")) {
      document.body.classList.remove("_lock");
    } else {
      document.body.classList.add("_lock");
    }
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
                <a href="/" className={styles.menu__link}>
                  ТОВАРИ
                </a>
              </li>
              <li>
                <a href="/" className={styles.menu__link}>
                  ЗАСТОСУВАННЯ
                </a>
              </li>
              <li>
                <a href="/" className={styles.menu__link}>
                  ПЕРЕВАГИ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
