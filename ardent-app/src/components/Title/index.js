import React from "react";
import { Wrapper, Text } from "./styles.js";

export default props =>
  <Wrapper>
    <div className="line-left" />
    <span>
      {props.text}
    </span>
    <div className="line-right" />
  </Wrapper>;
