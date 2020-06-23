import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Row, Col } from "reactstrap";
import { Link } from "../routes";

class About extends React.Component {
  render() {
    return (
      <BaseLayout
        title="Victoria Klimova - Learn More About Me"
        {...this.props.auth}
      >
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <BasePage className="about-page">
          <h1 className="title fadein">Welcome</h1>
          <h4 className="subtitle fadein">To About Page</h4>
          <Row className="mt-5">
            <Col md="4">
              <div className="left-side">
                <img
                  alt="Background picture"
                  src="/static/images/me.jpg"
                  width="320"
                  height="427"
                />
              </div>
            </Col>
            <Col md="8">
              <div className="fadein">
                <div className="about-desc-title">
                  My name is Victoria Klimova and I am a web developer.{" "}
                </div>
                <div className="about-desc-item">
                  <div>EDUCATION</div>
                  <ul>
                    I graduated from Belarusian State University in 2017 with a
                    Bachelor's Degree in Computer Science (Faculty of Applied
                    Mathematics and Computer Science).
                  </ul>
                </div>
                <div className="about-desc-item">
                  <div>EXPERIENCE</div>
                  <ul>
                    <li>
                      I was a system analyst for OJSC "AGAT - Control Systems"
                      for 2 years, during that time I took first place in the
                      scientific and technical conference of young specialists.
                    </li>
                    <li>Freelance experience (HTML coding)</li>
                    <li>
                      Developed some{" "}
                      <Link route="/works">
                        <a>projects</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="about-desc-item">
                  <div>SKILLS</div>
                  <ul>
                    <li>actively self-educating</li>
                    <li>learning new frameworks / libraries</li>
                    <li>looking forward to new ideas</li>
                    <li>English intermediate level</li>
                    <li>developer since 2013</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="about-tech">
            <Col md="4 auto" className="about-tech-item">
              <div className="about-tech-title">LANGUAGES</div>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>Basic knowledge of Java, C++</li>
                <li>Basic knowledge of mysql</li>
              </ul>
            </Col>
            <Col md="4" className="about-tech-item">
              <div className="about-tech-title">FRAMEWORKS & LIBS</div>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Next.js</li>
                <li>Bootstrap</li>
                <li>SCSS</li>
              </ul>
            </Col>
            <Col md="4" className="about-tech-item">
              <div className="about-tech-title">ADDITIONAL</div>
              <ul>
                <li>Git</li>
                <li>Webpack</li>
              </ul>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
