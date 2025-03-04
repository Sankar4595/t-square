import React from "react";
import {
  LandingContainer,
  Title,
  VisionContainer,
  VisionText,
} from "../Styles/landingStyle";
import { Button } from "antd";

const LandingPage = () => {
  const cardData = [
    {
      experience: "1.6laks+",
      content: "Projects Deleivered",
    },
    {
      experience: "160cr+",
      content: "Begineer Benfitied",
    },
    {
      experience: "22yrs+",
      content: "Professional Benfitied",
    },
  ];
  return (
    <LandingContainer>
      <div className="container-left">
        {cardData?.map((item, index) => (
          <div key={index} className="card">
            <a href="#">{item.experience}</a>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className="container-right">
        <VisionContainer>
          <Title>Our Vision</Title>
          <VisionText>
            Build a transformative talent & technology ecosystem that nurtures
            growth at every stage, from students to staffs to professionals and
            schools to colleges to enterprises, fortifying the foundation of
            excellence across all levels to fulfil the need of global demands.
          </VisionText>
          <Button>Get started</Button>
        </VisionContainer>
      </div>
    </LandingContainer>
  );
};

export default LandingPage;
