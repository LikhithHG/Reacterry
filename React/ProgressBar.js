import styled from 'styled-components'
import React from 'react';

const ProgressBar = ({ percent = 12 }) => {

  const progressPercent = Math.min(Math.max(0, percent), 100);

  return (
    <Wrapper data-testid="wrapper">
      <FilledBar data-testid="progress" percent = {progressPercent}/>
    </Wrapper>
  );
};

export default ProgressBar;

//styled-components is a popular library for styling React components with scoped and dynamic styles written in JavaScript

const Wrapper = styled.div`
  width: %;
  height: 20px;
  border-radius: 5px;
  background-color: lightgrey;
`;

const FilledBar = styled.div`
  height: 100%;
  background-color: green;
  border-radius: 5px;
  width: ${props => props.percent}%;
`;