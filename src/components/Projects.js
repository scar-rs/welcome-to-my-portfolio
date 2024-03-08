import React from "react";
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "PlastEco",
      description: "Revolutionizing plastic waste management for a sustainable future",
      technologies: "PHP, MySql, HTML, CSS, Javascript, JQuery",
      demoLink: "",
      SourceLink: "https://github.com/scar-rs/Major-Project",
      imgUrl: projImg1, // Use projImg1 for the first major project
    },
    {
      title: "Alarm Clock",
      description: "A simple alarm clock implementation",
      technologies: "Python,tkinter",
      demoLink: "https://example.com/demo",
      SourceLink: "https://github.com/example/business-startup",
      imgUrl: projImg2,
    },
    {
      title: "Figma Design",
      description: "Website in figma for food wastage management system",
      technologies: "Figma",
      demoLink: "https://www.figma.com/",
      SourceLink: "",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="projects" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Check out some of my projects below.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Major Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mini Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Figma Designs</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects
                            .filter((project, index) => index === 0) // Filter only the first project
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} isMajorProject={true} />
                            ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects
                            .filter((project, index) => index === 1) // Filter only the second project
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} isMajorProject={true}/>
                            ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                        {projects
                            .filter((project, index) => index === 2) // Filter third and fourth projects
                            .map((project, index) => (
                             <ProjectCard key={index} {...project} isMajorProject={true}/>
                         ))}

                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
