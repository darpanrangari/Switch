import React, { useState } from "react";
import styled from "styled-components";

// Styled-components for the toggle switch
const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 34px;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 3px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.4s;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.2);
  }
};
`;
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Slider} {
    background-color: #107987; /* Change the background color when checked */
  }
  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;

const Toggle = () => {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
    console.log(!checked);
  };

  return (
    <SwitchContainer>
      <Input type="checkbox" checked={checked} onChange={toggleSwitch} />
      <Slider />
    </SwitchContainer>
  );
};

export default Toggle;
