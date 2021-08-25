import './App.css';

import React from 'react';
import { Container} from 'react-bootstrap';
import Header from './components/header';
import Body from './components/body';
import PageFooter from './components/page-footer';

function App() {
  
  return (
<Container>
  <Header />
  <Body />
  <PageFooter />
</Container>
  );
}

export default App;
