import styled from "styled-components";

import BG from "./background.jpg";

export const Hero = styled.div`
  height: 700px;
  background: no-repeat top url(${BG});
  background-size: cover;
  padding: 120px 0px;
  > section > .hero-divider {
    height: 2px;
    width: 80%;
    background-color: #e7eaef;
    margin: auto;
  }
  > section > .hero-buttons {
    text-align: center;
    margin-top: 40px;
    > form {
      display: inline-block;
    }
  }
`;

export const Robot = styled.div`
  > img {
    display: block;
    margin: auto;
    height: 142px;
  }
  margin-bottom: 40px;
`;

export const HeroText = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 26px;
  width: 55%;
  margin: auto;
  color: #2b3e4e;
  letter-spacing: 5px;
  margin-bottom: 40px;
  > img {
    height: 20px;
  }
`;

export const HeroButton = styled.button`
  background: none;
  border: 2px #a8b9c0 solid;
  border-radius: 22px;
  padding: 12px 32px;
  margin: 0 30px;
  color: #5d7183;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 12px;
  cursor: pointer;
`;


