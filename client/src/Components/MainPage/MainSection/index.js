import React, { useState } from "react";
import Video from "../../../videos/video.mp4";
import { Button } from "../../buttonElements";

import {
  ArrowForward,
  ArrowRight,
  SectionBg,
  SectionBtnWrapper,
  SectionContainer,
  SectionContent,
  SectionH1,
  SectionP,
  VideoBg,
} from "./MainSectionElements";

const MainSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <SectionContainer>
      <SectionBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </SectionBg>
      <SectionContent>
        <SectionH1>FHacademy</SectionH1>
        <SectionP>
          FH academy est use plate-forme d'apprentissage axée sur le étudiants
          qui propose un suivi individuel et personnalisé à ses abonnés
        </SectionP>
        <SectionBtnWrapper>
          <Button
            to="/signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </SectionBtnWrapper>
      </SectionContent>
    </SectionContainer>
  );
};

export default MainSection;
