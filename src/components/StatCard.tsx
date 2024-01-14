import { Card, Typography } from "antd";
import React, { useState } from "react";
import StatCardProp from "../models/StatCardProp";
import CountUp from "react-countup";
import ScrollAnim from "rc-scroll-anim";

export const StatCard = (props: StatCardProp) => {
  console.log(props?.signed === true);
  return (
    <Card
      style={{
        textAlign: "center",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <ScrollAnim.OverPack replay={false} playScale={"25vh"}>
        <Typography.Title style={{ margin: "0", color: "#FFC301" }} level={1}>
          <CountUp start={0} end={props.val} duration={3} />
          {props?.signed == true ? <>+</> : <></>}
        </Typography.Title>
        <Typography.Text type="secondary" style={{ color: "#EEE" }} strong>
          {props.desc}
        </Typography.Text>
      </ScrollAnim.OverPack>
    </Card>
  );
};
