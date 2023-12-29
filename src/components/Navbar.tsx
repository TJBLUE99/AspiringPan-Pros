import React from "react";
import { Col, Divider, Row } from "antd";

const style: React.CSSProperties = {
  margin: 0,
};

const Navbar = () => {
  return (
    <Row
      style={{
        margin: 0,
        // padding: "20px",
        height: "10vh",
        position: "sticky",
        borderBottom: "1px solid grey",
      }}
      justify={"center"}
      align={"middle"}

      // gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      <Col style={style} className="gutter-row" xs={18} md={6}>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Logo
        </div>
      </Col>
      <Col style={style} className="gutter-row" xs={6} md={0}>
        <div style={{ textAlign: "right" }}>Burger</div>
      </Col>
      <Col style={style} className="gutter-row" xs={0} md={18}>
        <div style={{ textAlign: "center" }}>Menu</div>
      </Col>
    </Row>
  );
};

export default Navbar;
