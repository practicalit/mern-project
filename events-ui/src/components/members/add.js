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
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  const firstNameHandler = (event) => {
      console.log(event.target.value)
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    console.log(event.target.value)
    setLastName(event.target.value);
  };

  const EmailHandler = (event) => {
    console.log(event.target.value)
  setEmail(event.target.value);
};

const CityHandler = (event) => {
  console.log(event.target.value)
setCity(event.target.value);
};

const CountryHandler = (event) => {
  console.log(event.target.value)
setCountry(event.target.value);
};

const genderHandler = (event) => {
  console.log(event.target.value)
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
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              onChange={firstNameHandler}
              type="text"
              placeholder="Enter Firstname"
            />
          </Form.Group>
            </Row>

            <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
             onChange={lastNameHandler} type="text" placeholder="Enter Last name" />
          </Form.Group>
          </Row>
        
          <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          onChange={EmailHandler} type="text" placeholder="Enter Email" />
        </Form.Group>
        </Row>

       <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control 
          onChange={CountryHandler} type="text" placeholder="Country" />
        </Form.Group>
        </Row>
         
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control 
            onChange={CityHandler} type="text" placeholder="City" />
          
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control 
            onChange={genderHandler} type="text" placeholder="Gender" />
          
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
