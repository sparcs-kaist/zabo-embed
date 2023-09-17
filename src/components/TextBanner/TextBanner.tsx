import React from "react";
import styled from "@emotion/styled";
import { css, ThemeProvider } from "@emotion/react";

import { ServiceLogo } from "../icons/ServiceLogo";
import { SparcsIcon } from "../icons/SparcsIcon";
import { Arrow } from "../icons/Arrow";
import type { TextPromotion } from "../../api/interface";

export const TextBanner: React.FC<Omit<TextPromotion, "type">> = React.memo(props => (
  <ThemeProvider theme={props.style}>
    <Banner>
    {/*  <div style={bannerStyle}>*/}

      <ServiceLogo serviceName={props.serviceName} />

      <Text>
        <h1>{props.mainText}</h1>
        <p>{props.subText}</p>
      </Text>

      <a href={props.actionURL}>
        <span>{props.actionText}</span>
        <Arrow />
      </a>

      <SparcsIcon />
      {/*</div>*/}
    </Banner>
  </ThemeProvider>
));

const Banner = styled.div(
  ({ theme }) => css`
    position: relative;
    font-family: NanumSquare, sans-serif;

    border-radius: 6px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 24px;
    gap: 8px;

    color: ${theme.primary ? "#ffffff" : theme.themeColor};
    background-color: ${theme.primary ? theme.themeColor : "#ffffff"};
    border: ${theme.primary ? "none" : "1px solid #ececec"};

    & > a {
      background-color: ${theme.primary
        ? "rgba(255, 255, 255, 0.25)"
        : theme.themeColor};
      text-decoration: none;
      color: #ffffff;

      border-radius: 4px;
      font-size: 11px;
      font-weight: 400;
      display: flex;
      flex-direction: row;
      gap: 6px;
      padding: 8px 12px;
    }

    & > svg {
      width: 65px;
      height: 140px;
      position: absolute;
      top: 20px;
      right: 37px;
      opacity: 0.18;
    }
  `,
);

const Text = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 6px;
    color: ${theme.primary ? "inherit" : "#333333"};

    * {
      margin: 0;
    }

    & > h1 {
      font-size: 16px;
      font-weight: 700;
    }

    & > p {
      font-size: 14px;
      font-weight: 400;
      opacity: 0.6;
    }
  `,
);
