import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

/**
 * Member listing component
 * @author Practical IT <info@thePracticalIT.com>
 */
function MemberAdd(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameHandler = (event) => {
      console.log(event.target.value)
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    console.log(event.target.value)
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName == null || firstName == "") {
      console.log("validate the user");
    } else {
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: "jenny@some.com",
        city: "San Antonio",
        country: "USA",
        gender: "F",
      };
      let url = `${process.env.REACT_APP_BACKEND_URL}${process.env.REACT_APP_MEMBERS}`;
      axios
        .post(url, data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log("here");
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control
              onChange={firstNameHandler}
              type="text"
              placeholder="Enter firstname"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
             onChange={lastNameHandler} type="text" placeholder="Last name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>email</Form.Label>
          <Form.Control id="email" placeholder="Your Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Country</Form.Label>
          <Form.Control placeholder="Country" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default MemberAdd;
