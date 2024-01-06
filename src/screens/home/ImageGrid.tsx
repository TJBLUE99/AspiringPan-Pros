import { Card, Col, Grid, Modal, Row, Typography } from "antd";
import React, { useState } from "react";
import Image from "../../components/Image";
import { CustomImage, images } from "./Image";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";
// import "react-image-lightbox/style.css";

const ImageGrid = () => {
  const fontFamily =
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'";
  const [index, setIndex] = useState(-1);
  const [modal, setModal] = useState(false);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => {
    setIndex(index);
    setModal(true);
  };
  const handleClose = () => {
    setIndex(-1);
    setModal(false);
  };
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const heading: string = "Where Movement Takes Shape in form of Art";
  const punchLine: string = " CAPTURING THE ESSENCE OF DANCE IN EVERY FRAME.";

  return (
    <div
      style={{
        padding: "5vw 2vw",
        backgroundColor: "#eee",
        // marginBottom: "5vw",
      }}
    >
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          padding: "3vw",
        }}
      >
        <ScrollAnim.OverPack hideProps={{ tweenOne: { reverse: true } }}>
          <QueueAnim type="bottom" overflow={"hidden"}>
            <h3
              key={"h3"}
              style={{
                fontFamily: fontFamily,
              }}
            >
              {heading}
            </h3>
            <h1
              key={"h1"}
              style={{
                fontFamily: fontFamily,
              }}
            >
              {punchLine}
            </h1>
          </QueueAnim>
        </ScrollAnim.OverPack>

        {/* <Row justify={"center"} align={"middle"} style={{ width: "90vw" }}>
          <QueueAnim type="bottom">
            <Typography.Title
              key={"t3"}
              level={3}
              style={{ textAlign: "center" }}
            >
              {heading}
            </Typography.Title>
          </QueueAnim>
          <QueueAnim type="bottom">
            <Typography.Title
              key={"t1"}
              level={1}
              style={{ textAlign: "center" }}
            >
              {punchLine}
            </Typography.Title>
          </QueueAnim>
        </Row> */}
      </div>

      <Card>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
      </Card>
      <br />
      {modal ? (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            background: "transparent",
          }}
        >
          <Image
            style={{ display: "none" }}
            src={images[index].src}
            preview={{
              visible: modal,
              onVisibleChange: (e: any) => setModal(e),
            }}
          ></Image>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageGrid;
