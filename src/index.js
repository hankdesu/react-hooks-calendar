import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';
import Calendar from './Calendar';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

ReactDOM.render(
  <Container>
    <Calendar />
  </Container>,
  document.getElementById('root')
);
