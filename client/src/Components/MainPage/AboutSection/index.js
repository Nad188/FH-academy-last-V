import React from "react";
import { Button } from "../../buttonElements";
import {
  BtnWrap,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./AboutSectionElements";

const InfoSection = ({
  lightBg,
  id,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonlabel,
  img1,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow>
            <div>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darktext={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home">{buttonlabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </div>
            <div>
              <ImgWrap>
                <Img src={img1} alt={alt}  />
              </ImgWrap>
            </div>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
