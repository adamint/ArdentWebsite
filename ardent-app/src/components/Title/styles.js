import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin: 40px 0px;
  > .line-left {
    background-color: #ccd0cf;
    display: inline-block;
    width: 150px;
    height: 3px;
    margin-right: 50px;
    vertical-align: super;
  }
  > .line-right {
    background-color: #ccd0cf;
    display: inline-block;
    width: 150px;
    height: 3px;
    margin-left: 50px;
    vertical-align: super;
  }
  > span {
    color: #2e3f54;
    font-size: 26px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
