import './App.css';
import {useState, useEffect} from 'react';

import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    pull();
  }, [])
  const pull = () => {
    let url = `${process.env.REACT_APP_BACKEND_URL}/api/events`;
    axios.get(url)
    .then(res => {
      console.log(res.data);
      setEvents(res.data)
    });
  }
  return (
<Container>
  <Alert variant="primary">
    Fullstack Tutorial
  </Alert>
  <Row xs={2} md={4} lg={6}>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row xs={1} md={2}>
  {
    events && events.map(eve => {
    return <Col>{eve.title}</Col>
  })}
  </Row>
</Container>
  );
}

export default App;
