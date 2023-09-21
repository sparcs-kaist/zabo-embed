import React, { type PropsWithChildren } from "react";

import root from "react-shadow/emotion";
import styled from "@emotion/styled";

interface Props extends PropsWithChildren {
  customStyle?: React.CSSProperties;
}

export const Scope: React.FC<Props> = ({
  customStyle,
  children,
}) => (
  <section style={{
    overflow: "hidden",
    ...customStyle,
  }}>
    <root.div>
      <Reset>{children}</Reset>
    </root.div>
  </section>
);

const Reset = styled.div`
  @import url("https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css");
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap");
  
  all: revert;
  line-height: initial;
  overflow: hidden;
`;
