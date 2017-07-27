import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(({ ...props }) => <NavLink {...props} />)`
    text-transform: uppercase;
    font-size: 12px;
    margin-left: 50px;
    font-style: normal;
    text-decoration: none;
    font-weight: 600;
    line-height: 100%;
    color: #a8acab;
    letter-spacing: 1px;
    &.active {
      color: #657575;
    }
`;

const Link = ({ ...props }) => {
  return <StyledNavLink {...props} />;
};

export default Link;
