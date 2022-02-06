import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  dispaly: grid;
  z-index: 1;
  height:700px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
 display:flex

  
`;


export const TextWrapper = styled.div`
margin-top:120px;
  max-width: 540px;
  padding-top: 120px;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 30px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 64px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Icons=styled.div `
display:grid;
grid-template-columns:auto auto auto
`
export const ImgWrap = styled.div`
  max-width: 550px;
  height: 100%;
`;

export const ImgWrap2=styled.div `
max-width:200px;
height:100%
`

export const Img = styled.img`
  width: 100%;
  margin: 120px 0px 10px 40px;
  padding-right: 0;
`;

export const ImgI = styled.img `
width:100%;
padding-right:0px;
margin:80px;

`
