import { Col, Row, Typography } from "antd";
import React from "react";
import StatCardProp from "../../models/StatCardProp";
import { StatCard } from "../../components/StatCard";
import danceSvg from "../../assets/dance.svg";
import Image from "../../components/Image";
import ScrollAnim from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";

const Stats = () => {
  const stats: StatCardProp[] = [
    {
      val: 25,
      desc: "Years of Experience",
      signed: true,
    },
    { val: 3000, desc: "Students Choreographed", signed: false },
    { val: 10, desc: "Cities We Covered", signed: true },
    { val: 250, desc: "Events Completed", signed: true },
  ];

  const desc: string =
    "Whether you're taking your first steps in dance or you're a seasoned performer, we welcome you to explore, learn, and dance your heart out. Experience the joy, the rhythm, and the magic of movement with us.";

  return (
    <div
      style={{
        padding: "20vh 0",
        backgroundColor: "#1F1A24",
      }}
    >
      <ScrollAnim.OverPack replay={false} playScale={"10vh"}>
        <Row
          justify={"center"}
          align={"middle"}
          style={{ width: "100vw", padding: "0 15vw" }}
          wrap
        >
          {/* <ScrollAnim.OverPack replay playScale={"20vh"}> */}
          <QueueAnim type="scaleBig">
            <Image key="IM1" src={danceSvg} style={{ height: "10vh" }} />
          </QueueAnim>
          {/* </ScrollAnim.OverPack> */}
        </Row>
        <Row
          justify={"center"}
          align={"middle"}
          style={{ width: "100vw", padding: "0 15vw" }}
          wrap
        >
          {/* <ScrollAnim.OverPack replay playScale={"20vh"}> */}
          <QueueAnim type="scaleBig">
            <Typography.Title
              key={"t1"}
              level={4}
              style={{ textAlign: "center", color: "#EEE" }}
            >
              {desc}
              <br />
              Let's dance together!
            </Typography.Title>
          </QueueAnim>
          {/* </ScrollAnim.OverPack> */}
        </Row>
        <Row
          justify={"center"}
          align={"middle"}
          style={{ width: "100vw", padding: "0 10vw" }}
          wrap
        >
          {stats.map((s, i) => (
            <Col key={i} xs={24} md={12} lg={6} style={{ margin: 0 }}>
              <StatCard val={s.val} desc={s.desc} signed={s.signed} />
            </Col>
          ))}
        </Row>
      </ScrollAnim.OverPack>
    </div>
  );
};

export default Stats;
