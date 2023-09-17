import React from "react";

import { usePromotion } from "./api";
import { Scope, TextBanner, ImageBanner } from "./components";

export interface ZaboEmbedProps {
  style?: React.CSSProperties;
}

export const ZaboEmbed: React.FC<ZaboEmbedProps> = ({ style }) => {
  const promotion = usePromotion();

  return (
    promotion && <Scope style={style}>
      {promotion.type === "text"
        ? <TextBanner {...promotion} />
        : <ImageBanner />
      }
    </Scope>
  );
};
