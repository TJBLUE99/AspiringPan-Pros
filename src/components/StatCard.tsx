import { Card, Typography } from "antd";
import React from "react";
import StatCardProp from "../models/StatCardProp";

export const StatCard = (props: StatCardProp) => {
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
