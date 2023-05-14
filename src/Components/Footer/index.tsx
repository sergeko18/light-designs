import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import imgPhone from "../../assets/icons/phone.svg";
import faceBookIco from "../../assets/icons/fb.svg";
import LinkedInIco from "../../assets/icons/LI.svg";
import twitterIco from "../../assets/icons/twit.svg";
import youtubeIco from "../../assets/icons/YT.svg";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.main}>
        <Container>
          <Row>
            <Col className={styles.col}>
              <h6 className={styles.title}>Продукція</h6>
              <div className={styles.link}>Внутрішнє освітлення</div>
              <div className={styles.link}>Зовнішнє освітлення</div>
              <div className={styles.link}>
                Екстремальне застосування освітлення
              </div>
            </Col>
            <Col className={styles.col}>
              <h6 className={styles.title}>Застосування</h6>
              <div className={styles.link}>Небезпечні зони</div>
              <div className={styles.link}>Корозійні зони</div>
              <div className={styles.link}>Висока температура</div>
              <div className={styles.link}>
                Харчова та напоєна промисловість
              </div>
              <div className={styles.link}>
                Промислові та складські приміщення
              </div>
              <div className={styles.link}>Ферми та тваринництво</div>
              <div className={styles.link}>Спорт та дозвілля</div>
              <div className={styles.link}>Дороги та тунелі</div>
              <div className={styles.link}>Парковки</div>
              <div className={styles.link}>Білборди та знаки</div>
              <div className={styles.link}>АЗС та навіси</div>
              <div className={styles.link}>
                Роздрібна та супермаркетна торгівля
              </div>
            </Col>
            <Col className={styles.col}>
              <h6 className={styles.title}>Застосування</h6>
              <div className={styles.link}>Небезпечні зони</div>
              <div className={styles.link}>Корозійні зони</div>
              <div className={styles.link}>Висока температура</div>
              <div className={styles.link}>
                Харчова та напоєна промисловість
              </div>
              <div className={styles.link}>
                Промислові та складські приміщення
              </div>
              <div className={styles.link}>Ферми та тваринництво</div>
              <div className={styles.link}>Спорт та дозвілля</div>
              <div className={styles.link}>Дороги та тунелі</div>
              <div className={styles.link}>Парковки</div>
              <div className={styles.link}>Білборди та знаки</div>
              <div className={styles.link}>АЗС та навіси</div>
              <div className={styles.link}>
                Роздрібна та супермаркетна торгівля
              </div>
            </Col>
            <Col className={styles.col}>
              <h6 className={styles.title}>Зверніться до наших експертів</h6>
              <div className={styles.phoneBlock}>
                <div className={`${styles.link} ${styles.phoneNumber}`}>
                  <a className={styles.phoneLink} href="tel:+380950000000">
                    <img src={imgPhone} alt="phone" /> +38(095)0000000
                  </a>
                </div>
                <div className={`${styles.link} ${styles.phoneNumber}`}>
                  <a className={styles.phoneLink} href="tel:+380950000000">
                    <img src={imgPhone} alt="phone" /> +38(095)0000000
                  </a>
                </div>
              </div>

              <div className={styles.smBlock}>
                <div>
                  <img className={styles.Ico} src={faceBookIco} alt="fb" />{" "}
                </div>
                <div>
                  <img className={styles.Ico} src={LinkedInIco} alt="twit" />
                </div>
                <div>
                  <img className={styles.Ico} src={twitterIco} alt="linked" />
                </div>
                <div>
                  <img className={styles.Ico} src={youtubeIco} alt="yt" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.bott}>
        <Container>
          <Row>
            <div>
              <div className={styles.bottTxt}>© 2023 Усі права захищені.</div>
              <div className={styles.bottTxt}>|</div>
              <div className={styles.bottTxt}>Політика конфіденційності</div>
              <div className={styles.bottTxt}>|</div>
              <div className={styles.bottTxt}>Умови використання</div>
            </div>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
