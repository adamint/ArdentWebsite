import styled from "styled-components";

export const Header = styled.header`
  height: 75px;
  background-color: white;
  border-bottom: 2px solid #8ab5d7;
  > section {
    height: 75px;
  }
`;

export const Logo = styled.div`
  display: inline-block;
  height: 100%;
  > img {
    height: 48px;
    border-radius: 100%;
  }
  > span {
    font-weight: 500;
    vertical-align: baseline;
    margin-right: 15px;
    color: #778089;
    font-size: 14px;
  }
`;

export const Nav = styled.div`
  display: inline-block;
  float: right;
`;
