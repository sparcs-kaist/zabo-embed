import React from "react";
import classNames from "classnames";

import styles from "./TextBanner.module.scss";

import { ServiceLogo } from "../icons/ServiceLogo.tsx";
import { SparcsIcon } from "../icons/SparcsIcon.tsx";
import { Arrow } from "../icons/Arrow.tsx";

interface Props {
  mainText: string;
  subText: string;
  serviceName: string;
  primary?: boolean;
  themeColor: string;
  actionURL: string;
  actionText: string;
}

export const TextBanner: React.FC<Props> = ({
  mainText,
  subText,
  serviceName,
  primary,
  themeColor,
  actionURL,
  actionText,
}) => (
  <div
    style={{ "--theme": themeColor }}
    className={classNames(
      styles.banner,
      { primary },
    )}
  >
    <ServiceLogo serviceName={serviceName}/>

    <div className={styles.text}>
      <h1>{mainText}</h1>
      <p>{subText}</p>
    </div>

    <a href={actionURL}>
      <span>{actionText}</span>
      <Arrow/>
    </a>

    <SparcsIcon/>
  </div>
);
