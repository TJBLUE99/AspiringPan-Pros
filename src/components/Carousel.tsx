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

const Carousel = (props: CarouselProps) => {
  return (
    <>
      <AntCarousel
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        {...props}
      ></AntCarousel>
    </>
  );
};

export default Carousel;
