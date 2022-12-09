import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const UserMyReview = () => {
  return (
    <Layout>
      <Row className="profilePic">
        <Col md={{ span: 3, offset: 6 }}>
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            My Reviews
          </Button>
        </Col>
      </Row>
      <Row className="profileContainer">
        <Col md={{ span: 6, offset: 3 }}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                my review 1
              </span>
              <div>
                <Button>Edit</Button>
                <Button variant="danger" className="mx-2">
                  Delete
                </Button>
              </div>
            </Card.Header>
          </Card>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                my review 2
              </span>
              <div>
                <Button>Edit</Button>
                <Button variant="danger" className="mx-2">
                  Delete
                </Button>
              </div>
            </Card.Header>
          </Card>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                my review 3
              </span>
              <div>
                <Button>Edit</Button>
                <Button variant="danger" className="mx-2">
                  Delete
                </Button>
              </div>
            </Card.Header>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default UserMyReview;
