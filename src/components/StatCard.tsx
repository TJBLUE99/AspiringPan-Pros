import { Card, Typography } from "antd";
import React from "react";
import StatCardProp from "../models/StatCardProp";

export const StatCard = (props: StatCardProp) => {
  return (
    <Card
      style={{
        textAlign: "center",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <Typography.Title style={{ margin: "0", color: "yellowgreen" }} level={1}>
        {props.val}
      </Typography.Title>
      <Typography.Text type="secondary" style={{ color: "#EEE" }} strong>
        {props.desc}
      </Typography.Text>
    </Card>
  );
};
