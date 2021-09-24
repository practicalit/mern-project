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
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const firstNameHandler = (event) => {
    console.log(event.target.value);
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };

  const emailHandler = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const countryHandler = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  };

  const cityHandler = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };
  const genderHandler = (event) => {
    console.log(event.target.value);
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName === null || firstName === "") {
      console.log("validate the user");
    } else {
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        city: city,
        country: country,
        gender: gender,
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
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Label>First name</Form.Label>
            <Form.Control
              onChange={firstNameHandler}
              type="text"
              placeholder="Enter First Name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={lastNameHandler}
              type="text"
              placeholder="Enter Last Name"
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={emailHandler}
            type="text"
            placeholder="Your Email"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            onChange={countryHandler}
            type="text"
            placeholder="Country"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={cityHandler} type="text" placeholder="City" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            onChange={genderHandler}
            type="text"
            placeholder="Gender"
          />
        </Form.Group>

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
