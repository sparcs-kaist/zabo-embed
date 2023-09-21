import React from "react";
import { css, Global } from "@emotion/react";

const fonts = css`
  @import url("https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css");
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap");
`;

export const LoadFont: React.FC = () => <Global styles={fonts} />;
