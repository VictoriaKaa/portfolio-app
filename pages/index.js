import React from "react";
import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import Typed from "react-typed";

import { Button, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.roles = [
      "A web developer",
      "Programmer",
      "Creative",
      "Passionate",
      "Curious",
      "Meticulous",
    ];
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <>
        <BaseLayout
          className="cover"
          {...this.props.auth}
          headerType="index"
          title="Victoria Klimova"
        >
          <div className="main-section">
            <Container>
              <Row>
                <Col md="12" xs="auto" className="welcome-wrapper">
                  <div className="welcome-title">
                    <h1>
                      Hello, I'm Victoria Klimova. <br />
                      <Typed
                        strings={this.roles}
                        typeSpeed={60}
                        backSpeed={60}
                        backDelay={1000}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                        className="self-typed"
                        loop
                      ></Typed>
                    </h1>
                  </div>

                  <div className="welcome-bio">
                    <h2>
                      I'm a web developer and programmer living in Minsk,
                      Belarus.
                    </h2>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </BaseLayout>
      </>
    );
  }
}

export default Index;
