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
<<<<<<< HEAD
      <HeroText>
        <span>AN ALL-PURPOSE, MULTILINGUAL AND FUN </span>
        <img src={discordBotLogo} />
      </HeroText>
=======
      <HeroText>AN ALL-PURPOSE, CUSTOMIZABLE AND FUN DISCORD BOT</HeroText>
>>>>>>> fbb7b0cf358d69353d8b4a3b6a2cc198aa025a97
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
