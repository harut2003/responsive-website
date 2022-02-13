import styles from "./Header.module.scss";
import USAFlag from "../../assets/images/usa.svg";
import user from "../../assets/images/user.png";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <Row className={styles.header_container}>
      <Col md={3} lg={6} className={`d-none ${styles.empty} d-md-flex`}></Col>
      <Col
        xs={6}
        sm={3}
        md={4}
        lg={2}
        className={`justify-content-end ${styles.header_section} ${styles.language} justify-content-md-center`}
      >
        <img src={USAFlag} alt="USAFlag" width={25} />
        <span>EN</span>
      </Col>
      <Col xs={6} sm={9} md={5} lg={4} className={styles.header_section}>
        <div className="d-flex justify-content-around align-items-center" >
          <div
            className={`${styles.user} d-flex justify-content-center align-items-center mt-1  mt-sm-0 justify-content-lg-start`}
          >
            <img
              className="me-0 me-sm-3"
              src={user}
              alt="user"
              width={44}
              height={44}
            />
            <p className="d-none d-sm-block">
              <span>Hello, Max!</span>
              <br />
              <span className={`text-muted ${styles.last_login}`}>
                Last login: Thu Mar 20 2014
              </span>
            </p>
          </div>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </Col>
    </Row>
  );
}

export default Header;
