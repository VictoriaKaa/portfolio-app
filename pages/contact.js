import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Row, Col } from "reactstrap";

class Contact extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <BasePage title="My contacts" className="contact">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className="contact-title">
                For any enquiries, or just to say hello, get in touch and
                contact me.
              </div>
              <div className="contact-text">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                   +375 29 108 06 71
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope-square"></i>{" "}
                  victoriaklimova96@gmail.com
                </div>
                <div className="contact-item">
                  <a target="_blank" href="https://github.com/VictoriaKaa">
                  <i className="fab fa-git"></i>
                     My github
                  </a>
                </div>
                <div className="contact-item">
                  <a target="_blank" href="https://www.linkedin.com/in/victoria-klimova-438ba31a2/">
                  <i className="fab fa-linkedin-in"></i>
                    My linkedin
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </BasePage>
        <style jsx>
          {`
            @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
          `}
        </style>
      </BaseLayout>
    );
  }
}

export default Contact;
