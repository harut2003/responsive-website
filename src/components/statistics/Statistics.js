import React from "react";
import { Col, Row } from "react-bootstrap";
import CircleChart from "./circle-chart/CircleChart";
import ColumnChart from "./column-chart/ColumnChart";
import MapChart from "./map-chart/MapChart";
import "./Statistics.scss";
function Statistics() {
  return (
    <Row className="stat_container">
      <Col xs={12} lg={5} className="diagram_section">
        <ColumnChart />
      </Col>
      <Col xs={12} lg={3} className="diagram_section">
        <CircleChart />
      </Col>
      <Col xs={12} lg={4} className="diagram_section">
        <MapChart />
      </Col>
    </Row>
  );
}

export default Statistics;
