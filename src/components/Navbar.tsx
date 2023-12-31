import React, { useState } from "react";

import "./Navbar.css";
import {
  Affix,
  Col,
  Drawer,
  Dropdown,
  Menu,
  MenuProps,
  Row,
  Typography,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import NavbarProp from "../models/NavbarProp";
import Button from "./Button";

const Navbar = (props: NavbarProp) => {
  const handleClick = (path: string) => {
    //method to navigate to path specified
    console.log(path);
  };

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Affix offsetTop={0}>
      <Row
        style={{
          margin: 0,
          height: "10vh",
          boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          backgroundColor: "#1F1A24",
        }}
        justify={"center"}
        align={"middle"}
      >
        <Col className="gutter-row no-margin" xs={22} md={6}>
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
        <Col className="gutter-row no-margin" xs={2} md={0}>
          <div style={{ textAlign: "center" }}>
            <Button
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
              icon={
                <MenuOutlined style={{ color: "#ffc301", fontSize: "1rem" }} />
              }
              onClick={showDrawer}
            />
            <Drawer
              title={<Typography style={{ color: "#ffc301" }}>Menu</Typography>}
              placement="top"
              closable={true}
              onClose={closeDrawer}
              visible={drawerVisible}
              height="60%"
              style={{
                background: "#1F1A24",
                padding: "10px",
              }}
              closeIcon={<span style={{ color: "#ffc301" }}>X</span>}
            >
              <Menu
                style={{
                  background: "#1F1A24",
                  color: "#ffc301",
                  textAlign: "center",
                }}
                theme="dark"
              >
                {props.menuItems.map((item, index) => (
                  <Menu.Item key={index}>{item.title}</Menu.Item>
                ))}
              </Menu>
            </Drawer>
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
    </Affix>
  );
};

export default Navbar;
