import { Col, Row, Typography } from "antd";
import React from "react";
import StatCardProp from "../../models/StatCardProp";
import { StatCard } from "../../components/StatCard";
import danceSvg from "../../assets/dance.svg";
import Image from "../../components/Image";

const Stats = () => {
  const stats: StatCardProp[] = [
    {
      val: "25+",
      desc: "Years of Experience",
    },
    { val: "3000", desc: "Students Choreographed" },
    { val: "10+", desc: "Cities We Covered" },
    { val: "250+", desc: "Events Completed" },
  ];

  const desc: string =
    "Whether you're taking your first steps in dance or you're a seasoned performer, we welcome you to explore, learn, and dance your heart out. Experience the joy, the rhythm, and the magic of movement with us.";

  return (
    <div
      style={{
        padding: "20vh 0",
        backgroundColor: "#EEEEEE",
      }}
    >
      <Row
        justify={"center"}
        align={"middle"}
        style={{ width: "100vw", padding: "0 15vw" }}
        wrap
      >
        <Image src={danceSvg} style={{ height: "10vh" }} />
      </Row>
      <Row
        justify={"center"}
        align={"middle"}
        style={{ width: "100vw", padding: "0 15vw" }}
        wrap
      >
        <Typography.Title level={4} style={{ textAlign: "center" }}>
          {desc}
          <br />
          Let's dance together!
        </Typography.Title>
      </Row>
      <Row
        justify={"center"}
        align={"middle"}
        style={{ width: "100vw", padding: "0 10vw" }}
        wrap
      >
        {stats.map((s, i) => (
          <Col key={i} xs={24} md={12} lg={6} style={{ margin: 0 }}>
            <StatCard val={s.val} desc={s.desc} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Stats;
