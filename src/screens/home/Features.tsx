import React from "react";
import FeatureCard from "../../components/FeatureCard";
import vite from "/vite.svg?url";
import vite2 from "/vite2.svg?url";
import dance2 from "/dance2.svg?url";
import { Row, Col, Typography } from "antd";

const Features = () => {
  return (
    <div style={{ display: " flex", background: "#eee" }} className="">
      <Row justify={"center"} align={"middle"} style={{ padding: "10vh 15vw" }}>
        <Col className="gutter-row no-margin" xs={24} md={10} lg={10}>
          <Typography.Title level={4}>Describing Key Features</Typography.Title>
          <Typography.Title level={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            dolorem sequi. Eius, quam esse sint voluptatum temporibus ratione.
            Autem, nemo consequuntur! Magnam quam consectetur hic aliquid, atque
            laudantium ad totam?
          </Typography.Title>
          <Typography.Title level={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            dolorem sequi. Eius, quam esse sint voluptatum temporibus ratione.
            Autem, nemo consequuntur! Magnam quam consectetur hic aliquid, atque
            laudantium ad totam?
          </Typography.Title>
        </Col>
        <Col className="gutter-row no-margin" xs={24} md={7} lg={7}>
          <Row justify={"center"} align={"middle"}>
            <Col className="gutter-row no-margin" xs={20} md={2} lg={6}>
              <FeatureCard src={vite} caption={"Rock"}></FeatureCard>
            </Col>
          </Row>
          <Row justify={"center"} align={"middle"}>
            <Col className="gutter-row no-margin" xs={20} md={2} lg={6}>
              <FeatureCard src={dance2} caption={"Jazz"}></FeatureCard>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row no-margin" xs={20} md={7} lg={6}>
          <FeatureCard src={vite2} caption={"HipHop"}></FeatureCard>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
