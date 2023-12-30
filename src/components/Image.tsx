import React from "react";
import { Image as AntImage, ImageProps } from "antd";

// export interface ImageProps
//   extends Omit<
//     React.ImgHTMLAttributes<HTMLImageElement>,
//     "placeholder" | "onClick"
//   > {
//   src?: string;
//   wrapperClassName?: string;
//   wrapperStyle?: React.CSSProperties;
//   prefixCls?: string;
//   previewPrefixCls?: string;
//   placeholder?: React.ReactNode;
//   fallback?: string;
//   rootClassName?: string;
//   preview?: boolean | ImagePreviewType;
//   /**
//    * @deprecated since version 3.2.1
//    */
//   onPreviewClose?: (value: boolean, prevValue: boolean) => void;
//   onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
//   onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
// }

const Image = (props: ImageProps) => {
  return <AntImage preview={false} {...props} />;
};

export default Image;
