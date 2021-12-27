import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  bottom: -35px;
  width: 100%;
`;

export const Footer = () => {
  return (
    <FooterStyle>
      Designed And Build With React, Styled Components, Material-UI, Zustand And
      Vite
    </FooterStyle>
  );
};
