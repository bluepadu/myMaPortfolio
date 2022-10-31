import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mason </span>
            from <span className="purple"> Toronto, Cananda.</span>
            <br />I am a full stack and blockchain engineer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Prepare much and win at a go!"{" "}
          </p>
          <footer className="blockquote-footer">Mason</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
