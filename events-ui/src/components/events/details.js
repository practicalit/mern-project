import { Button, Card, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function EventDetails() {
  let location = useLocation();
  //useParams -reading
  return (
    <>
      <Card style={{ width: "100%" }}>
        <Card.Img
          style={{ variant: "top", height: "350px" }}
          src="https://cdn.pixabay.com/photo/2014/09/11/12/33/network-441682__340.jpg"
        />
        <Card.Body>
          <Card.Title>{location.state.eventObject.title}</Card.Title>
          <Card.Text>{location.state.eventObject.description}</Card.Text>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              defaultChecked={location.state.eventObject.active}
              type="checkbox"
              label="Active"
            />
          </Form.Group>
          <Card.Text>Venue: {location.state.eventObject.venue}</Card.Text>
          <Button variant="primary">Attend</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default EventDetails;
