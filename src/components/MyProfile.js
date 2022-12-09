import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";


const MyProfile = () => {

  return (
    <Container>
        <Row className="profileContainer">
        <Col md={{ span: 3, offset: 6 }}>
          <img src={require('../images/person.png')} />
          </Col>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email"              
                ></Form.Control>
              </Form.Group>              
              <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Button type="submit" varient="primary">
                Update your profile
              </Button>
            </Form>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          </Col>
        </Row>

    </Container>
  );
};

export default MyProfile;