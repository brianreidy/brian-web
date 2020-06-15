import React, { useState } from "react";
import styled from "styled-components";
import Card from "../_common/Card/";
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #d5dff0;
  padding: 2vh 5vh 0 5vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 0.4fr));

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
  }
`;

const Projects = () => {
  return (
    <Wrapper>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Wrapper>
  );
};

export default Projects;
