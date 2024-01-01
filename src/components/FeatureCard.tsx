import { Card, Typography } from "antd";
import React from "react";
import Image from "./Image";
import FeatureCardProp from "../models/FeatureCardProp";

const FeatureCard = (props: FeatureCardProp) => {
  return (
    <Card
      // hoverable
      cover={<Image src={props.src}></Image>}
      style={{
        backgroundColor: "transparent",
        width: "200px",
        border: "none",
      }}
    >
      <Card.Meta
        style={{
          textAlign: "center",
        }}
        title={
          <Typography.Text
            style={{
              textAlign: "center",
              width: "100%",
              // color: "white",
              color: "black",
            }}
          >
            {props.caption}
          </Typography.Text>
        }
      ></Card.Meta>
    </Card>
  );
};

export default FeatureCard;
