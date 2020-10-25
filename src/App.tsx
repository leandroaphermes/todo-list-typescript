import React from 'react';
import { GlobalStyled } from './styles/global'

import Header from './components/Header/Header';

import { Container } from './styles'
import List from './components/List/List';

function App() {
  return (
    <>
      <GlobalStyled />
      <Container>
        <Header />
        <List />
      </Container>
    </>
  );
}

export default App;
