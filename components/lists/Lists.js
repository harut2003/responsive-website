import { Col, Row } from "react-bootstrap";
import List from "./List";
import "./List.scss";

function Lists() {
  const titleArray = ["ID", "Username", "Profit($)", "Comission($)", "View"];
  const listPersons = [
    { id: 1007, username: "Simona", profit: 55, comission: "Simona" },
    { id: 1008, username: "Ariana", profit: 45, comission: "Adelina" },
    { id: 1009, username: "Adam", profit: 35, comission: "Adam" },
    { id: 1010, username: "John", profit: 25, comission: "John" },
    { id: 1011, username: "Garry", profit: 15, comission: "Garry" },
  ];
  return (
    <Row className="lists_container">
      <Col xs={12} lg={6} xl={4} className="list_container">
        <List
          title="Top Affiliates"
          tableTitles={titleArray}
          listPersons={listPersons}
        ></List>
      </Col>
      <Col xs={12} lg={6} xl={4} className="list_container">
        <List
          title="Signups"
          tableTitles={titleArray}
          listPersons={listPersons}
        ></List>
      </Col>
      <Col xs={12} lg={12} xl={4} className="list_container">
        <List
          title="Pending Commisions"
          tableTitles={titleArray}
          listPersons={listPersons}
        ></List>
      </Col>
    </Row>
  );
}

export default Lists;
