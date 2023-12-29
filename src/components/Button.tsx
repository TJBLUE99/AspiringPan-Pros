import React from "react";
import { Button as AntButton, ButtonProps } from "antd";

/*
declare const ButtonTypes: readonly ["default", "primary", "dashed", "link", "text"];

declare const ButtonShapes: readonly ["default", "circle", "round"];

export type SizeType = 'small' | 'middle' | 'large' | undefined;

interface BaseButtonProps {
    type?: ButtonType;
    icon?: React.ReactNode;
    shape?: ButtonShape;
    size?: SizeType;
    disabled?: boolean;
    loading?: boolean | {
        delay?: number;
    };
    prefixCls?: string;
    className?: string;
    rootClassName?: string;
    ghost?: boolean;
    danger?: boolean;
    block?: boolean;
    children?: React.ReactNode;
    [key: `data-${string}`]: string;
    classNames?: {
        icon: string;
    };
    styles?: {
        icon: React.CSSProperties;
    };
}
*/

const Button = (props: ButtonProps) => {
  return (
    <>
      <AntButton style={{ textTransform: "uppercase" }} {...props} />
    </>
  );
};

export default Button;
