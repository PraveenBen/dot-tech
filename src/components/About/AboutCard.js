import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Praveen T </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I'm Currently freelancing as Gen AI content trainer for ScaleAI company.
            <br />
            I am in my final semester of MCA at Christ Academy Institute for Advance Studies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Follow your heart,whatever it takes. Attitude is the crown you wear, Freedom is the gift you give to yourself"{" "}
          </p>
          <footer className="blockquote-footer">Praveen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
