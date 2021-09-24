import { Button, Card, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function EventDetails() {
  let location = useLocation();
  //useParams -reading
  return (
    <>
      <Card style={{ width: "100%" }}>
      <Card.Img variant="top"style= {{ height: "400px" }} src='https://media.istockphoto.com/vectors/teamwork-icon-business-concept-team-work-union-logo-on-white-vector-id961742626?k=20&m=961742626&s=612x612&w=0&h=WU1b9UVXZy8G4WGmZ0dOf38kfeHZGHZrp7CSHX2Tc_Y='/>
        <Card.Body>
          <Card.Title>{location.state.eventObject.title}</Card.Title>
          <Card.Text>{location.state.eventObject.description}</Card.Text>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check defaultChecked={location.state.eventObject.active} type="checkbox" label="Active" />
          </Form.Group>
  <Card.Text>Venue: {location.state.eventObject.venue}</Card.Text>
          <Button variant="primary">Attend</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default EventDetails;
