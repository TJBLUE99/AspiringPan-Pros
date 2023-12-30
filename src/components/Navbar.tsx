import React from "react";

import "./Navbar.css";
import { Col, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import NavbarProp from "../models/NavbarProp";

const Navbar = (props: NavbarProp) => {
  const handleClick = (path: string) => {
    //method to navigate to path specified
    console.log(path);
  };

  return (
    <Row
      style={{
        margin: 0,
        height: "10vh",
        position: "sticky",
        boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        backgroundColor: "black",
      }}
      justify={"center"}
      align={"middle"}
    >
      <Col className="gutter-row no-margin" xs={12} md={6}>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.logo}
        </div>
      </Col>
      <Col className="gutter-row no-margin" xs={6} md={0}>
        <div style={{ textAlign: "right" }}>
          <MenuOutlined />
        </div>
      </Col>
      <Col className="gutter-row no-margin" xs={0} md={18}>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {props.menuItems.map((item, i) => (
            <li
              className="NavLi"
              key={i}
              onClick={() => handleClick(item.path)}
            >
              {item.title}
            </li>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Navbar;
