import React from "react";
import { Row, Col } from "react-bootstrap";

export function FeatureRow({
  image,
  imageSpan = 3,
  title,
  reverse = false,
  children,
}) {
  return (
    <React.Fragment>
      <Row
        style={{
          alignItems: "center",
          flexDirection: reverse ? "row-reverse" : "row",
        }}
      >
        <Col xs={imageSpan}>
          <img width={"100%"} src={image} alt={title} />
        </Col>
        <Col
          xs={12 - imageSpan}
          style={{ textAlign: reverse ? "right" : "left" }}
        >
          <h3 style={{ color: "var(--primary)" }}>{title}</h3>
          {children}
        </Col>
      </Row>
    </React.Fragment>
  );
}
