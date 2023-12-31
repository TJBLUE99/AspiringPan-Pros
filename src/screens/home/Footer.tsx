import {
  FacebookFilled,
  FacebookOutlined,
  InstagramFilled,
  InstagramOutlined,
  MailFilled,
  MailOutlined,
  PhoneFilled,
  PhoneOutlined,
  YoutubeFilled,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import React from "react";
import Button from "../../components/Button";
import Image from "../../components/Image";
import Logo from "../../../public/logo2.png";

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
        gutter={100}
        wrap
      >
        <Col xs={24} md={12} lg={10}>
          <Image src={Logo} className="logo" style={{ width: "100%" }} />
        </Col>
        <Col xs={24} md={12} lg={10}>
          <div
            style={{
              gap: "1rem",
            }}
          >
            <Typography.Title level={5} style={{ color: "greenyellow" }}>
              Contact Us
            </Typography.Title>
          </div>
          <div>
            <PhoneFilled /> +91 XXXXXXXXXX
          </div>
          <div>
            <MailFilled /> john.doe@gmail.com
          </div>
          <div
            style={{
              gap: "1rem",
            }}
          >
            <Typography.Title level={5} style={{ color: "greenyellow" }}>
              Follow Us
            </Typography.Title>
            <div>
              <Button type="link" icon={<InstagramFilled />} size="large" />
              <Button type="link" icon={<YoutubeFilled />} size="large" />
              <Button type="link" icon={<FacebookFilled />} size="large" />
            </div>
          </div>
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
