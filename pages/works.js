import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Row, Col } from "reactstrap";
import AnimatedBackground from "../components/AnimatedBackground";

class Works extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="Work" className="work">
          <AnimatedBackground />
          <Row>
            <Col className="work-page">
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="#"
                  >
                    <span>Portfolio</span>
                    <span className="work-hidden-info">
                      <span>React, Next.js, Node.js, Express, MongoDB</span>
                      <span> | </span>
                      <span> You are using this app right now!
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://victoriakaa.github.io/journal/#/"
                  >
                    <span>Journal</span>
                    <span className="work-hidden-info">
                      <span>React, Redux</span>
                      <span> | </span>
                      <span>
                        Daily planner based running list. Saving info with
                        cookies.
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://victoriakaa.github.io/agency-template/#/"
                  >
                    <span>Agency Template</span>
                    <span className="work-hidden-info">
                      <span>React, Redux</span>
                      <span> | </span>
                      <span>Agency Template SPA.</span>
                    </span>
                  </a>
                </li>
                
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/VictoriaKaa/network"
                  >
                    <span>Network (code)</span>
                    <span className="work-hidden-info">
                      <span>React, Redux</span>
                      <span> | </span>
                      <span>The project uses back-end and was written from youtube cource.</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://victoriakaa.github.io/colors/#/"
                  >
                    <span>Color picker</span>
                    <span className="work-hidden-info">
                      <span>React, redux</span>
                      <span> | </span>
                      <span>Here you can pick favorite colors and sort them. Using cookies.</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://victoriakaa.github.io/creative-agency-landing-page/"
                  >
                    <span>Creative agency (landing page)</span>
                    <span className="work-hidden-info">
                      <span>Html, Css, Bootstrap, JQuery, Owl Carousel</span>
                      <span> | </span>
                      <span>Landing Page based on psd mockup.</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://victoriakaa.github.io/travel-blog/"
                  >
                    <span>Travel blog (landing page)</span>
                    <span className="work-hidden-info">
                      <span>Html, Css</span>
                      <span> | </span>
                      <span>Landing page based on psd mockup.</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://victoriakaa.github.io/Todo-List/"
                  >
                    <span>Todo list</span>
                    <span className="work-hidden-info">
                      <span>React, redux</span>
                      <span> | </span>
                      <span>Simple todo-list using cookies.</span>
                    </span>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Works;
