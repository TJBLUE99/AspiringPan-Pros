import { Card, Typography } from "antd";
import React from "react";
import StatCardProp from "../models/StatCardProp";

export const StatCard = (props: StatCardProp) => {
  return (
    <Card
      style={{
        textAlign: "center",
        backgroundColor: "transparent",
      }}
    >
      <Typography.Title style={{ margin: "0" }} level={1}>
        {props.val}
      </Typography.Title>
      <Typography.Text type="secondary" strong>
        {props.desc}
      </Typography.Text>
    </Card>
  );
};
