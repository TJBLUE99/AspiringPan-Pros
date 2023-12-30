import React from "react";
import { Carousel as AntCarousel, CarouselProps } from "antd";

/*
export interface CarouselProps extends Omit<Settings, 'dots' | 'dotsClass'> {
    effect?: CarouselEffect;
    style?: React.CSSProperties;
    prefixCls?: string;
    rootClassName?: string;
    id?: string;
    slickGoTo?: number;
    dotPosition?: DotPosition;
    children?: React.ReactNode;
    dots?: boolean | {
        className?: string;
    };
    waitForAnimate?: boolean;
}
*/
const dat: React.CSSProperties = {
  border: "1px solid black",
};

export const Carousel = (props: CarouselProps) => {
  return (
    <>
      <AntCarousel
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        {...props}
        style={{
          border: "1px solid black",
        }}
      >
        {props.children}
      </AntCarousel>
    </>
  );
};
