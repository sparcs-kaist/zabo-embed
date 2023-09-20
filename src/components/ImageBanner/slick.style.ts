/**
 * To encapsulate slick-carousel styles
 *
 * encapsulates:
 * "slick-carousel/slick/slick.css";
 * "slick-carousel/slick/slick-theme.css";
 */

import { css, type Theme } from "@emotion/react";

export const slick = (theme: Theme) => css`
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
    
    & > div {
      display: flex;
      height: min-content;
      
      a, img {
        display: inline-block;
        width: 100%;
      }
    }
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dots {
    position: absolute;
    right: 0;
    bottom: 0;

    box-sizing: border-box;
    display: flex !important;
    flex-direction: row;
    justify-content: flex-end;
    
    gap: 8px;

    padding: 8px 10px;
    margin: 0;

    list-style: none;

    text-align: center;
  }

  .slick-dots li {
    position: relative;
    display: flex;
    padding: 0;
    cursor: pointer;
  }

  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    padding: 0;
    
    width: 10px;
    height: 10px;
    border-radius: 50%;
    
    background: ${theme.serviceColor};

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    opacity: .4;
  }

  .slick-dots li button:hover,
  .slick-dots li button:focus {
    opacity: .6;
  }

  .slick-dots li.slick-active button {
    opacity: 1;
  }
`;
