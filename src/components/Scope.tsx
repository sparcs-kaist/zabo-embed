import React, { type PropsWithChildren } from "react";

import root from "react-shadow/emotion";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

interface Props extends PropsWithChildren {
  style?: React.CSSProperties;
}

export const Scope: React.FC<Props> = ({ style, children }) => (
  <section style={style}>
    <root.div>
      <Global styles={loadFonts} />
      <Reset>{children}</Reset>
    </root.div>
  </section>
);

const loadFonts = css`
  @import url("https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css");
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap");
`;

const Reset = styled.div`
  all: initial;
  line-height: initial;
  overflow: hidden;
  // TODO
`;
