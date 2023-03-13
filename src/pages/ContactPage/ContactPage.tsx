import React from "react";
import { GitHub, Linkedin } from "react-feather";
import A from "../../components/A";
import H3 from "../../components/H3";
import P from "../../components/P";
import SpanPadding from "../../components/SpanPadding";
import { StyledContactPage, StyledLinksWrapper } from "./ContactPage.css";

const ContactPage = () => {
  return (
    <StyledContactPage id="about">
      <H3>Made by Kacper</H3>
      <P>kacperkuczewski@yahoo.com</P>
      <StyledLinksWrapper>
        <A href="https://www.linkedin.com/in/kacper-kuczewski/" target="_blank">
          <Linkedin /> <SpanPadding>LinkedIN</SpanPadding>
        </A>
        <A href="https://github.com/superkacper4" target="_blank">
          <GitHub />
          <SpanPadding>Live</SpanPadding>
        </A>
      </StyledLinksWrapper>
    </StyledContactPage>
  );
};

export default ContactPage;
