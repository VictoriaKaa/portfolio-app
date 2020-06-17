import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Row, Col } from "reactstrap";
import AnimatedBackground from "../components/AnimatedBackground";

class About extends React.Component {
  render() {
    return (
      <BaseLayout
        title="Victoria Klimova - Learn More About Me"
        {...this.props.auth}
      >
        <BasePage className="about-page">
          <AnimatedBackground />
          <h1 className="title fadein">Welcome</h1>
          <h4 className="subtitle fadein">To About Page</h4>
          <p className="subsubTitle fadein">
            Feel free to read short description about me.
          </p>
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
                    I graduated from Belarusian State University in 2017,
                    Faculty of Applied Mathematics and Computer Science
                    (specialty "Computer Science").
                  </ul>
                </div>
                <div className="about-desc-item">
                  <div>JOB</div>
                  <ul>
                    <li>
                      I was working as a system analyst at OJSC "AGAT - Control
                      Systems" for 2 years, during that time I took first place
                      at the scientific and technical conference of young
                      specialists.
                    </li>
                    <li>Freelance experience (HTML coding)</li>
                    <li>Developing interesting projects</li>
                  </ul>
                </div>
                <div className="about-desc-item">
                  <div>ADDITIONAL</div>
                  <ul>
                    <li>actively self-educating</li>
                    <li>learning new frameworks / libraries</li>
                    <li>English pre-intermediate level, but I'm improving</li>
                    <li>developer since 2013</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col className="about-tech">
              <div className="about-tech-item">
                <div className="about-tech-title">LANGUAGES</div>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>Basic knowledge of Java, C++</li>
                  <li>Basic knowledge of mysql</li>
                </ul>
              </div>
              <div className="about-tech-item">
                <div className="about-tech-title">FRAMEWORKS & LIBS</div>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Next.js</li>
                  <li>Bootstrap</li>
                  <li>SCSS</li>
                </ul>
              </div>
              <div className="about-tech-item">
                <div className="about-tech-title">ADDITIONAL</div>
                <ul>
                  <li>Git</li>
                  <li>Webpack</li>
                </ul>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
