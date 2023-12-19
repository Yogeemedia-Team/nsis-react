import React, { useState } from "react";
import Swal from 'sweetalert2';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

// core components
import SimpleFooter from "components/Footers/SimpleFooter.js";
import DemoNavbar from "components/Navbars/DemoNavbar.js";

async function loginUser(credentials) {
  return fetch("https://developer.yogeemedia.cloud/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });

    if (response.status && response.data && response.data.access_token) {
      Swal.fire({
        title: 'Success',
        text: response.message,
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        localStorage.setItem('accessToken', response.data.access_token);
        // Assuming user data is available in the response, you can store it in localStorage as well
        localStorage.setItem('user', JSON.stringify(response.data));
        window.location.href = '/profile-page';
      });
    } else {
      Swal.fire({
        title: 'Failed',
        text: response.message,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
    
  };

  return (
    <>
      <DemoNavbar />
      <section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="pt-lg-7">
          <Row className="justify-content-center">
            <Col lg="5">
              <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Sign in with credentials</small>
                  </div>
                  <Form role="form" noValidate onSubmit={handleSubmit}>
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span>Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit">
                        Sign in
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>Forgot password?</small>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>Create new account</small>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <SimpleFooter />
    </>
  );
}
