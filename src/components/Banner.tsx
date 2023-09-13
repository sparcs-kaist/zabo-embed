import React from "react";
import { Icon } from "./Icon.tsx";
import { Background } from "./Background.tsx";
import styles from "./Banner.module.scss";

interface Props {
  mainText: string;
  subText: string;

}

export const Banner: React.FC<Props> = ({ mainText, subText }) => (
  <div id="zabo-embed" className={styles.banner}>
    <Icon/>

    <h1 style={{ fontWeight: 600, fontSize: 15 }}>
      {mainText}
    </h1>
    <p style={{ color: "#ffffffaa", fontSize: 14, fontWeight: 200 }}>
      {subText}
    </p>

    <a>자보 바로가기&nbsp;&nbsp;→</a>

    <Background/>
  </div>
);
