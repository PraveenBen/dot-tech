import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Car_rentals from "../../Assets/Projects/Car_Rentals.png";
import editor from "../../Assets/Projects/codeEditor.png";
import SuryAI from "../../Assets/Projects/SuryAI.png";
import Social_media from "../../Assets/Projects/Social_media.png";
import Market_analysis from "../../Assets/Projects/Market_analysis.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SuryAI}
              isBlog={false}
              title="SuryAI"
              description="Rooftop Solar power detection using Machine Learning. Bharathiya Anthariksh hackathon project hosted by ISRO. It is trained using Mizoram housing dataset from GEE engine to a U-Net model so it can detect solar power in that area and provide Cost and power saving estimations"
              ghLink="https://github.com/PraveenBen/Machine-Learning-Rooftop-SolarPower-detection"
              demoLink="https://suryai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Market_analysis}
              isBlog={false}
              title="Market Analysis Tool"
              description="It is web scraping tool which scrapes the data from the web and then analyze the data to provide the user Price, Rating and reviws of a product user searchs online in a CSV sheet. It uses the data from the web to predict the future of the stock market."
              ghLink="https://github.com/PraveenBen/Market_analysis_toole"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sentiment Analysis"
              description="Assignment project for Internship recruitment. It is a sentiment analysis tool which uses the data from the companies smaple datasheet to predict the sentiment of the user. It analyse the datasheet with the set of stop words given by the company."
              ghLink="https://github.com/PraveenBen/Black-coffer"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Car_rentals}
              isBlog={false}
              title="Rental car system"
              description="Undergratuation project. It is a web application which is used to rent a car. It is a full stack project which is built using HTML, CSS, JS, PHP and MySQL. It is a simple project which is used to rent a car. User can Rent/Buy cars update user, admin and generate bills, maintain records"
              ghLink="https://github.com/PraveenBen/rental_car_system"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Social_media}
              isBlog={false}
              title="Social Media"
              description="Again a Undergradutaion project developed using PHP and MySQL. It allows users to Chat, post and add comments. It will also maintain records of eaxh individual and keeps a friendly environment"
              ghLink="https://github.com/PraveenBen/Social_media"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
