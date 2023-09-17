import React from "react";
import { SparcsIcon } from "./SparcsIcon";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface Props {
  serviceName: string;
}

export const ServiceLogo: React.FC<Props> = ({ serviceName }) => (
  <Container>
    <SparcsIcon />
    <span>{serviceName}</span>
  </Container>
);

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    color: ${theme.primary ? "rgba(255, 255, 255, 0.6)" : theme.themeColor};

    span {
      font-family: "Raleway", sans-serif;
      font-weight: 800;
      font-size: 16px;
    }

    & > svg {
      width: 11px;
      height: 22px;
    }
  `,
);
