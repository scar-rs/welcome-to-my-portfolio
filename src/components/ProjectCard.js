import React from "react";
import { Col, Button, Container } from "react-bootstrap";

export const ProjectCard = ({ title, description, technologies, imgUrl, isMajorProject, demoLink, SourceLink }) => {
  return (
    <Container className={`text-center ${isMajorProject ? "proj-container-centered" : ""}`}>
      <Col xs={12} sm={6} md={6} lg={4}>
        <div className={`proj-imgbx ${isMajorProject ? "centered" : ""}`}>
          <img src={imgUrl} alt={title} className="proj-img" />
          <div className="proj-overlay"></div>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <p className="description">{description}</p>
            <p className="technologies">Technologies: {technologies}</p>
            <div style={{ marginTop: '10px' }}>
              <a href={demoLink} target = "_blank" rel = "noopener noreferrer"><button className="btn btn-primary mr-2">Demo</button></a>
              <a href={SourceLink} target ="_blank" rel= "noopener noreferrer"><button className="btn btn-secondary" style={{ marginLeft: '10px' }}>Source</button></a>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
};
