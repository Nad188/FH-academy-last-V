import React from "react";
import Icon1 from "../../../images/svg-3.svg";
import Icon2 from "../../../images/svg-4.svg";
import Icon3 from "../../../images/svg-5.svg";
import Icon4 from "../../../images/svg-6.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServiceSectionElements";

const ServiceSection = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <ServicesH2> Le succès</ServicesH2>
          <ServicesP>
            {" "}
            Encore plus solidaire pour vous faire atteindre vos objectifs
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>Des exercices</ServicesH2>
          <ServicesP>
            Des milliers de cours et des exercices interactifs qui s’adaptent à
            ton niveau !
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2> Cours en Live</ServicesH2>
          <ServicesP>
            Les vidéos enregistrées sont disponible 24h/24 et 7j/7 et avec une
            durée illimitée !
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4}></ServicesIcon>
          <ServicesH2>UTILISATION SIMPLE</ServicesH2>
          <ServicesP>
            Une utilisation simple et efficace, à la portée de tous et en
            quelques clics
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServiceSection;
