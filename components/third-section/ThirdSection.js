import {
  faArrowTrendUp,
  faCheck,
  faMoneyBill1,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Row } from "react-bootstrap";
import Card from "./Card";
import "./ThirdSection.scss";

function ThirdSection() {
  return (
    <Row className="third-section-container">
      <Card number={25} icon={faCheck} description={"SIGNUPS"} />
      <Card number="$1000" icon={faArrowTrendUp} description={"PROFIT"} />
      <Card number={"$350"} icon={faMoneyBill1} description={"COMMISSIONS"} />
      <Card
        number={"$300"}
        icon={faQuestion}
        description={"PENDING COMMISSION"}
      />
    </Row>
  );
}

export default ThirdSection;
