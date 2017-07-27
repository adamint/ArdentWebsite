import React from "react";

import Container from "../../components/Container";

import { Hero, Robot, HeroText, HeroButton, HeroDiscoverMore } from "./styles";

import robotImage from "./robot.png";
import downArrowIcon from "./down-arrow.svg";

export default () =>
  <Hero>
    <Container>
      <Robot>
        <img src={robotImage} alt="Ardent Robot" />
      </Robot>
      <HeroText>AN ALL-PURPOSE, CUSTOMIZABLE AND FUN DISCORD BOT</HeroText>
      <div className="hero-divider" />
      <div className="hero-buttons">
        <HeroButton>Dashboard</HeroButton>
        <HeroButton>Invite to Discord</HeroButton>
        <HeroButton>Web Console</HeroButton>
      </div>
      <HeroDiscoverMore>
        <span>discover more</span>
        <br />
        <img src={downArrowIcon} />
      </HeroDiscoverMore>
    </Container>
  </Hero>;
