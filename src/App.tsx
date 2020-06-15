import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import "./App.css";
import { interpolate, useTrail, animated } from "react-spring";

const Quote = styled.i`
  text-transform: lowercase;
  color: #424242;
  font-family: typeface-roboto;
  min-height: 75px;
  max-width: 335px;
`;

const StyledButton = styled(Button)`
  background-color: #d5dff0;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  padding: 7px 14px;

  border: 2px solid white;
  border-radius: 15px;
  &:hover {
    background-color: #e8edf7;
  }
  & .MuiButton-label {
    color: #424242;
    text-transform: none;
    font-family: typeface-roboto;
    font-weight: 800;
  }
`;

const App = ({ history }: { history: any }) => {
  const config = { mass: 5, tension: 2000, friction: 200 };
  const [toggle, set] = useState(true);
  const items = "brian reidy";
  const trail = useTrail(1, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          key={items[index]}
          className="trails-text"
          style={{
            ...rest,
            transform: interpolate([x], (x) => `translate3d(0,${x}px,0)`),
          }}
        >
          <animated.div style={{ height }}>{items}</animated.div>
        </animated.div>
      ))}

      <Quote>
        “Experience is the name everyone gives to their mistakes.” – Oscar Wilde
      </Quote>
      <StyledButton
        onClick={() => {
          set(false);
          setTimeout(function () {
            history.push("./home");
          }, 100);
        }}
      >
        my work
      </StyledButton>
    </div>
  );
};

export default App;
