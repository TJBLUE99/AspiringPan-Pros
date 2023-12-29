import { Card, Typography } from "antd";
import React from "react";
import { Image } from "./Image";

type FeatureProps = {
  src: String;
  caption: String;
};
//tilde
export const FeatureCard = (props: FeatureProps) => {
  return (
    <Card
      hoverable
      cover={<Image src={props.src}></Image>}
      style={{
        backgroundColor: "black",
        width: "250px",
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
              color: "white",
            }}
          >
            {props.caption}
          </Typography.Text>
        }
      ></Card.Meta>
    </Card>
  );
};
