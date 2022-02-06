import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FouterWrap,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FouterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='#'></FooterLink>
              <FooterLink to='#'></FooterLink>
              <FooterLink to='#'></FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='#'></FooterLink>
              <FooterLink to='#'></FooterLink>
              <FooterLink to='#'></FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='#'></FooterLink>
              <FooterLink to='#'></FooterLink>
              <FooterLink to='#'></FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FouterWrap>
    </FooterContainer>
  );
};

export default Footer;
