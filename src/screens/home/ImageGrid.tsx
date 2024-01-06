import { Card, Col, Grid, Modal, Row, Typography } from "antd";
import React, { useState } from "react";
import Image from "../../components/Image";
import { CustomImage, images } from "./Image";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

const ImageGrid = () => {
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

  const heading: string = "Gallery";

  return (
    <div style={{ padding: "10vw", backgroundColor: "#eee" }}>
      <Typography.Title level={1}>{heading}</Typography.Title>
      <Card>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
      </Card>
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
