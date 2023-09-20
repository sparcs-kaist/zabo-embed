export interface TextPromotion {
  type: "text";
  mainText: string;
  subText: string;
  serviceName: string;
  style: {
    primary: boolean;
    themeColor: string;
  };
  actionURL: string;
  actionText: string;
}

export interface ImagePromotion {
  type: "image";
  items: {
    imageURL: string;
    actionURL?: string;
  }[];
}

export type Promotion = TextPromotion | ImagePromotion;
