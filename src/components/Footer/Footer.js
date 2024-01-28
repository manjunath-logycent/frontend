import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Row>
        <Col className="text-center py-3">Copyright&copy; Note Zipper</Col>
      </Row>
    </footer>
  );
};
export default Footer;
