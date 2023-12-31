import { useEffect, useState } from "react";
import type { Promotion } from "../interface";
import { getPromotion } from "./getPromotion";

export const usePromotion = () => {
  const [promotion, setPromotion] = useState<Promotion | null>(null);

  useEffect(() => {
    getPromotion()
      .then(promotion => promotion && setPromotion(promotion))
      .catch();
  }, []);

  return promotion;
};
