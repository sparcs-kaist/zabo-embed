import React from "react";

import { usePromotion } from "./api";
import { Scope, TextBanner, ImageBanner } from "./components";

export interface ZaboEmbedProps {
  serviceColor: string;
  round?: number;
  style?: React.CSSProperties;
}

export const ZaboEmbed: React.FC<ZaboEmbedProps> = ({
  serviceColor,
  round = 6,
  style,
}) => {
  const promotion = usePromotion();

  return (
    promotion && <Scope
      customStyle={{ borderRadius: round, ...style }}
    >
      {promotion.type === "text"
        ? <TextBanner {...promotion} />
        : <ImageBanner serviceColor={serviceColor} {...promotion} />
      }
    </Scope>
  );
};
