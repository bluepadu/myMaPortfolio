import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kickback from "../../Assets/Projects/kickback.png";
import gokleen from "../../Assets/Projects/gokleen.png";
import simpletire from "../../Assets/Projects/simpletire.png";
import equi from "../../Assets/Projects/equi.png";
import mypackspace from "../../Assets/Projects/mypackspace.png";
import joinsecret from "../../Assets/Projects/joinsecret.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My live <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={equi}
              isBlog={false}
              title="EQUI"
              description="MERN stack project that is about Canadian Individual Investment. Built for 1.5 year. Used React Hook, Storebook, Tailwind CSS, Charts, AWS Lambda and Figma. Based on web flow with JWT security. Developed inside a team with CI/CD agile environment."
              ghLink="#"
              demoLink="https://www.app.equi.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={joinsecret}
              isBlog={false}
              title="JOINSECRET"
              description="Next.js frontend project that provides different kinds of services in package to customers. Built for 3 months. Used Next.js, Tailwind CSS, Airtable, AWS Lambda and Figma."
              ghLink="#"
              demoLink="https://www.joinsecret.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simpletire}
              isBlog={false}
              title="SIMPLETIRE"
              description="MERN stack project that deals tire selling in Dallas area. Participated for 6 months. Used React, Node, AWS and CI/CD pipeline agile environment. Implemented very diversed business logic."
              ghLink="#"
              demoLink="https://simpletire.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickback}
              isBlog={false}
              title="KICKBACK"
              description="Vue project that supports vitual realistic meeting environment. Worked for 2 months. Used Vue, AWS Lambda."
              ghLink="#"
              demoLink="https://kickback.space/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mypackspace}
              isBlog={false}
              title="PACKSPACE"
              description="PHP project that provides packaging container platform for the US best packaging company. Worked for 6 months. Implemented very detailed requirements."
              ghLink="#"
              demoLink="https://mypackspace.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gokleen}
              isBlog={false}
              title="GOKLEEN"
              description="Laravel project deals with clients for cleaning. Built and Maintained for 2 years. Implemented 3 times of frontend design changes."
              ghLink="#"
              demoLink="https://www.gokleen.com.my"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
