import React from "react";
import { Col } from "react-bootstrap";
import ChangePasswordForm from "../components/ChangePasswordForm";
import MyCard from "../components/UI/MyCard";
import Layout from "../layout/Layout";

function UpdatePassword() {
  return (
    <Layout>
      <Col md={12} lg={12} className="d-flex justify-content-center">
        <MyCard style={{width:'50%', height:'550px',backgroundColor: "white"}}>
          <ChangePasswordForm />
        </MyCard>
      </Col>
    </Layout>
  );
}

export default UpdatePassword;
