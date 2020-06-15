import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import TabBar from "./TabBar";
import AboutMe from "./AboutMe/";
import Projects from "./Projects";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #d5dff0;
`;

const Home = () => {
  const [value, setValue] = useState(0);

  return (
    <Wrapper>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <TabBar value={value} setValue={setValue} />
      {value === 0 && <AboutMe />}
      {value === 1 && <Projects />}
    </Wrapper>
  );
};

export default Home;
