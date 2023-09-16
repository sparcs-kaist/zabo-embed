import React from "react";

import { usePromotion } from "./api";
import { TextBanner, ImageBanner } from "./components";

export interface ZaboEmbedProps {
  test: string;
}

export const ZaboEmbed: React.FC<ZaboEmbedProps> = () => {
  const promotion = usePromotion();

  return promotion && promotion.type === "text"
    ? <TextBanner
      mainText={promotion.mainText}
      subText={promotion.subText}
      serviceName={promotion.serviceName}
      primary={promotion.style.primary}
      themeColor={promotion.style.themeColor}
      actionURL={promotion.actionURL}
      actionText={promotion.actionText}
    />
    : <ImageBanner
    />;
};
