import { Card } from "antd";
import React, { useState } from "react";
import Image from "../../components/Image";
import { CustomImage, images } from "./Image";
import { Gallery } from "react-grid-gallery";
import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";
import ThumbanailImage from "../../components/ThumbnailImage";
// import "react-image-lightbox/style.css";

const ImageGrid = () => {
  const fontFamily =
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'";
  const [index, setIndex] = useState(-1);
  const [modal, setModal] = useState(false);

  const handleClick = (index: number, item: CustomImage) => {
    setIndex(index);
    setModal(true);
  };
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
        <ScrollAnim.OverPack replay={false} playScale={"5vh"}>
          <QueueAnim type="scaleBig" overflow={"hidden"}>
            <h3
              key={"1"}
              style={{
                fontFamily: fontFamily,
              }}
            >
              {heading}
            </h3>
            <h1
              key={"2"}
              style={{
                fontFamily: fontFamily,
              }}
            >
              {punchLine}
            </h1>
          </QueueAnim>
        </ScrollAnim.OverPack>
      </div>

      <ScrollAnim.OverPack replay={false} playScale={"5vh"}>
        <Card>
          <Gallery
            id={"1"}
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
            thumbnailImageComponent={ThumbanailImage}
          />
        </Card>
      </ScrollAnim.OverPack>
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
