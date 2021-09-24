import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    pull();
  }, []);
  const pull = () => {
    let url = `${process.env.REACT_APP_BACKEND_URL}/api/events`;
    axios.get(url).then((res) => {
      console.log(res.data);
      setEvents(res.data);
    });
  };
  return (
    <>
      <h1>Welcome home</h1>
      <Row xs={1} md={1}>
        {events &&
          events.map((eve, pos) => {
            return (
              <div className="hello" key={pos}>
                <Col>
                  <Link
                    to={{
                      pathname: "/event-details",
                      state: {
                        eventObject: eve,
                      },
                    }}
                  >
                    {eve.title}
                  </Link>
                </Col>
              </div>
            );
          })}
      </Row>
    </>
  );
}

export default Home;
