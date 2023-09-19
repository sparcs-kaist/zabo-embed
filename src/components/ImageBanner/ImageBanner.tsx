import React from "react";
import Slider from "react-slick";
import { Global, ThemeProvider } from "@emotion/react";

import type { ImagePromotion } from "../../interface";
import { slick } from "./slick.style";

interface Props extends Omit<ImagePromotion, "type"> {
  serviceColor: string;
}

export const ImageBanner: React.FC<Props> = ({ serviceColor, items }) => (
  <ThemeProvider theme={{ serviceColor }}>
    <Slider dots arrows={false}>
      {items.map(promotion => (
        <img src={promotion.imageURL} />
      ))}
    </Slider>
    <Global styles={slick} />
  </ThemeProvider>
);
