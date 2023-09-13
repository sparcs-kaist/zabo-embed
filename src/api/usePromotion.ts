import { useEffect, useState } from "react";
import type { Promotion } from "./interface.ts";
import { getPromotion } from "./getPromotion.ts";

export const usePromotion = () => {
  const [promotion, setPromotion] = useState<Promotion | null>(null);

  useEffect(() => {
    getPromotion().then(
      promotion => promotion && setPromotion(promotion)
    );
  }, []);

  return promotion;
};
