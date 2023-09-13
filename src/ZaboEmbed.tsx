import React from "react";

import { usePromotion } from "./api/usePromotion.ts";
import { Banner } from "./components/Banner.tsx";

export interface ZaboEmbedProps {
  test: string;
}

export const ZaboEmbed: React.FC<ZaboEmbedProps> = () => {
  const promotion = usePromotion();

  return promotion && <Banner
    mainText={promotion.mainText}
    subText={promotion.subText}
  />;
};
