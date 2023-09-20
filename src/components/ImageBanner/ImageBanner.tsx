import React, { PropsWithChildren } from "react";
import Slider from "react-slick";
import { Global, ThemeProvider } from "@emotion/react";

import type { ImagePromotion } from "../../interface";
import { slick } from "./slick.style";

interface Props extends Omit<ImagePromotion, "type"> {
  serviceColor: string;
}

export const ImageBanner: React.FC<Props> = ({ serviceColor, items }) => (
  <ThemeProvider theme={{ serviceColor }}>
    <Slider dots autoplay autoplaySpeed={5000} arrows={false}>
      {items.map(promotion => (
        <Link href={promotion.actionURL}>
          <img src={promotion.imageURL} />
        </Link>
      ))}
    </Slider>
    <Global styles={slick} />
  </ThemeProvider>
);

interface LinkProps extends PropsWithChildren {
  href?: string;
}

const Link: React.FC<LinkProps> = ({ href, children }) =>
  href ? <a href={href}>{children}</a> : children;
