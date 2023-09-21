import React from "react";

import { usePromotion } from "./api";
import { Scope, TextBanner, ImageBanner, LoadFont } from "./components";

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
    promotion && <>
      <LoadFont />
      <Scope customStyle={{ borderRadius: round, ...style }}>
        {promotion.type === "text"
          ? <TextBanner {...promotion} />
          : <ImageBanner serviceColor={serviceColor} {...promotion} />
        }
      </Scope>
    </>
  );
};
