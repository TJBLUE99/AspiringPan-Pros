import { Card, Typography } from "antd";
import React from "react";

type Stat = {
  val: String;
  desc: String;
};

export const StatCard = (props: Stat) => {
  return (
    <Card
      style={{
        maxWidth: "max-content",
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: "0" }}>{props.val}</h1>
      <Typography.Text type="secondary" strong>
        {props.desc}
      </Typography.Text>
    </Card>
  );
};
