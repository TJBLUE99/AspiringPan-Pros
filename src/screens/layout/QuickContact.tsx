import {
  FacebookOutlined,
  InstagramOutlined,
  MailFilled,
  PhoneFilled,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";
import Button from "../../components/Button";

const QuickContact = () => {
  return (
    <>
      <div
        style={{
          gap: "1rem",
        }}
      >
        <Typography.Title level={5} style={{ color: "#FFC301" }}>
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
        <Typography.Title level={5} style={{ color: "#FFC301" }}>
          Follow Us
        </Typography.Title>
        <div>
          <Button type="link" icon={<InstagramOutlined />} size="large" />
          <Button type="link" icon={<YoutubeOutlined />} size="large" />
          <Button type="link" icon={<FacebookOutlined />} size="large" />
        </div>
      </div>
    </>
  );
};

export default QuickContact;
