import React from "react";

import Container from "../../components/Container";

import { Hero, Robot, HeroText, HeroButton, HeroDiscoverMore } from "./styles";

import robotImage from "./robot.png";
import discordBotLogo from "./discord-bot-logo.svg";
import downArrowIcon from "./down-arrow.svg";

export default () =>
  <Hero>
    <Container>
      <Robot>
        <img src={robotImage} alt="Ardent Robot" />
      </Robot>
      <HeroText>
        <span>AN ALL-PURPOSE, CUSTOMIZABLE AND FUN DISCORD BOT </span>
        <img src={discordBotLogo} />
      </HeroText>
      <div className="hero-divider" />
      <div className="hero-buttons">
        <HeroButton>Dashboard</HeroButton>
        <form action='https://discordapp.com/oauth2/authorize?scope=bot\&\client_id=339101087569281045\&\permissions=3235872'>
            <HeroButton>Invite to Discord</HeroButton>
        </form>
        <HeroButton>Web Console</HeroButton>
      </div>
    </Container>
  </Hero>;
