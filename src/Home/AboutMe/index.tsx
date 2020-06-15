import React, { useState } from "react";
import styled from "styled-components";
import "./index.css";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #d5dff0;
  padding: 2vh 5vh 0 5vh;
`;
const a = styled.a``;
const Body = styled.h1`
  padding: 0.5rem 0 0.5rem 0;
  font-family: typeface-roboto;
  color: #424242;
  width: 66.6667%;
  @media (max-width: 700px) {
    width: 100%;
    font-size: 1.4em;
  }
`;

const AboutMe = () => {
  return (
    <Wrapper>
      <Body>
        my name is brian reidy. i currently work as a junior react-native
        developer for{" "}
        <a href="https://patch.com" target="_blank">
          patch
        </a>
        . i previously studied mechanical engineering at georgia tech. i love
        riding bicycles especially fixed geared bikes. i am currently riding a
        48/15T, steel aventon{" "}
        <a
          href="https://www.aventon.com/products/aventon-andreas-complete-bike"
          target="_blank"
        >
          andreas
        </a>
        . my newest hobby is gardening. so far i have planted a bunch of
        different things from basil to bok choy. oh oh, and lastly i love bean
        boots, jean jackets, and trains.
      </Body>
    </Wrapper>
  );
};

export default AboutMe;
