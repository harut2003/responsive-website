import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";
import "./ThirdSection.scss"
function Card({ number, icon, description }) {
  return (
    <Col xs={12} sm={6} lg={3} className="card_col">
      <div className="d-flex justify-content-center align-items-center flex-column h-100">
        <p className="text number">
          {number}
        </p>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={icon}
            className="icon"
          />
          <span className="text description">{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default Card;
