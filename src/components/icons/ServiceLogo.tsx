import React from "react";
import { SparcsIcon } from "./SparcsIcon.tsx";

import styles from "./ServiceLogo.module.scss";


interface Props {
  serviceName: string;
}

export const ServiceLogo: React.FC<Props> = ({ serviceName }) => (
  <div className={styles.serviceLogo}>
    <SparcsIcon />
    <span>{serviceName}</span>
  </div>
);
