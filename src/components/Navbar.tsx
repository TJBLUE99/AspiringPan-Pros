import React from "react";
import "./Navbar.css";
import { Col, Divider, Flex, Row } from "antd";
import { MenuOutlined, SketchOutlined } from "@ant-design/icons";

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
        boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
      }}
      justify={"center"}
      align={"middle"}

      // gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      <Col style={style} className="gutter-row" xs={12} md={6}>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SketchOutlined style={{ fontSize: "30px", color: "#1677ff" }} />
        </div>
      </Col>
      <Col style={style} className="gutter-row" xs={6} md={0}>
        <div style={{ textAlign: "right" }}>
          <MenuOutlined />
        </div>
      </Col>
      <Col style={style} className="gutter-row" xs={0} md={18}>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <li className="NavLi">Home</li>
          <li className="NavLi">Mentors</li>
          <li className="NavLi">Shedule</li>
          <li className="NavLi">Events</li>
          <li className="NavLi">About</li>
        </div>
      </Col>
    </Row>
  );
};

export default Navbar;
