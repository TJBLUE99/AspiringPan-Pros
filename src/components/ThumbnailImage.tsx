import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";
import React from "react";
import { ThumbnailImageProps } from "react-grid-gallery";

const ThumbanailImage = (props: ThumbnailImageProps) => {
  return (
    <>
      <div style={{ ...props.imageProps.style, textAlign: "center" }}>
        <ScrollAnim.OverPack replay={false} playScale={"5vh"}>
          <QueueAnim type={"scaleBig"}>
            <img {...props.imageProps} key={1} />
          </QueueAnim>
        </ScrollAnim.OverPack>
      </div>
    </>
  );
};

export default ThumbanailImage;
