import React from "react";
import styled from "@emotion/styled";
import { css, ThemeProvider } from "@emotion/react";

import { ServiceLogo } from "../icons/ServiceLogo";
import { SparcsIcon } from "../icons/SparcsIcon";
import { Arrow } from "../icons/Arrow";
import type { TextPromotion } from "../../interface";

export const TextBanner: React.FC<Omit<TextPromotion, "type">> = React.memo(props => (
  <ThemeProvider theme={props.style}>
    <Banner>
      <ServiceLogo serviceName={props.serviceName} />

      <Text>
        <h1>{props.mainText}</h1>
        <p>{props.subText}</p>
      </Text>

      <Button href={props.actionURL}>
        <span>{props.actionText}</span>
        <Arrow />
      </Button>

      <SparcsIcon />
      {/*</div>*/}
    </Banner>
  </ThemeProvider>
));

const Banner = styled.div(
  ({ theme }) => css`
    all: unset;
    
    position: relative;
    font-family: NanumSquare, sans-serif;
    line-height: 1;

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

const Button = styled.a`
  all: unset;

  background-color: ${({ theme }) => theme.primary
    ? "rgba(255, 255, 255, 0.25)"
    : theme.themeColor};
  text-decoration: none;
  color: #ffffff;

  border-radius: 4px;

  font-size: 11px;
  font-weight: 400;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 6px;
  padding: 8px 12px;
`;

const Text = styled.div(
  ({ theme }) => css`
    all: unset;
    
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 6px;
    color: ${theme.primary ? "inherit" : "#333333"};

    * {
      margin: 0;
    }

    & > h1 {
      all: unset;
      
      font-size: 16px;
      font-weight: 700;
    }

    & > p {
      all: unset;
      
      font-size: 14px;
      font-weight: 400;
      opacity: 0.6;
    }
  `,
);
