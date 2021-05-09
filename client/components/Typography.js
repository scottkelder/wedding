import React from "react";
import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

export const Headline = styled.h1`
  font-size: 2.5em;
  padding: 0;
  margin-top: 0;
  font-family: "Playfair Display", serif;
  font-weight: 400;
`;

export const Subheadline = styled.h2`
  font-size: 1.5em;
  padding: 0;
  font-family: "Playfair Display", serif;
  font-weight: 400;
`;

export const Paragraph = styled.p``;

export const Anchor = styled.a`
  color: black;
  text-decoration: none;

  :visited,
  :active {
    color: black;
  }
`;

export const Link = styled(RouterLink)`
  color: black;
  text-decoration: none;

  :visited,
  :active {
    color: black;
  }
`;

export const ExternalLink = ({ src, label, className }) => (
  <Anchor href={src} target="_blank" className={className}>
    {label}
  </Anchor>
);