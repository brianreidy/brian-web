import React, { useState } from "react";
import styled from "styled-components";
import Card from "../_common/Card/";
const Wrapper = styled.div`
  background-color: #d5dff0;
  padding: 2vh 5vh 0 5vh;
  flex: 1;
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
