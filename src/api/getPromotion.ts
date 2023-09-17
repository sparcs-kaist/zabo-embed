import type { Promotion } from "../interface";

interface Response {
  promotion?: Promotion;
}

export const getPromotion = async (): Promise<Promotion | null> => {
  const res = await fetch("http://localhost:3000/api/promotions/random");
  const data = await res.json() as Response;
  return data?.promotion || null;
}
