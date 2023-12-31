import {
  FacebookFilled,
  FacebookOutlined,
  InstagramFilled,
  InstagramOutlined,
  MailFilled,
  PhoneFilled,
  YoutubeFilled,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Col, Divider, Row, Typography } from "antd";
import React from "react";
import Button from "../../components/Button";
import Image from "../../components/Image";
import Logo from "../../../public/logo2.png";
import QuickContact from "./QuickContact";

const Footer = () => {
  const getYear = () => {
    let d = new Date();
    return d.getFullYear();
  };
  return (
    <div
      style={{
        backgroundColor: "#1F1A24",
        color: "white",
      }}
    >
      <Row
        style={{ padding: "10vh 20vw", width: "100vw" }}
        justify={"center"}
        align={"middle"}
        wrap
      >
        <Col xs={24} md={8} lg={10}>
          <Image src={Logo} className="logo" style={{ width: "100%" }} />
        </Col>
        <Col xs={0} md={1}>
          <Divider
            type="vertical"
            style={{ borderColor: "rgba(255,255,255,0.2)", height: "30vh" }}
          />
        </Col>

        <Col xs={0} md={8} lg={10}>
          <QuickContact />
        </Col>
        <Col xs={24} md={0} style={{ textAlign: "center" }}>
          <QuickContact />
        </Col>
      </Row>
      <Row
        justify={"center"}
        align={"middle"}
        style={{ padding: "1vh", borderTop: "1px solid rgba(255,255,255,0.3)" }}
      >
        <Typography.Title style={{ color: "white" }} level={5}>
          &copy; {getYear()} Aspiring Pandas | All Rights Reserved
        </Typography.Title>
      </Row>
    </div>
  );
};

export default Footer;
