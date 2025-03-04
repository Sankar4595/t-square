import React from "react";
import { Card, Button } from "antd";

const techBridgeData = [
  {
    title: "Consulting",
    description:
      "Expert guidance to offer tailored solutions that support your Talent & Tech journey across all levels",
  },
  {
    title: "Tech Papers",
    description:
      "Expert guidance and support; aiming to create, refine, or submit technical papers to conferences, journals or institutions / platforms",
  },
  {
    title: "Competency Programs",
    description:
      "Tailored competency development plan to enhance personal and professional growth which meets organization objectives",
  },
  {
    title: "Academic Projects",
    description:
      "Expert assistance for various aspects of academic project, including research, submission strategy, ensuring high standards",
  },
  {
    title: "Intellectual Properties",
    description:
      "Expert support for your inventions to ensure design trademarks, copyrights and assets are safeguarded against infringement",
  },
  {
    title: "Research Articles",
    description:
      "Expert consultation to developing, refining, and submitting high quality research papers for publication",
  },
];

const TechBridgeUI = () => {
  return (
    <div className="techbridge-container">
      <h3 className="techbridge-title">
        Bridging the gap beyond borders to realize the full potential and unlock
        value.
      </h3>

      <div className="techbridge-grid">
        {techBridgeData.map((item, index) => (
          <Card key={index} title={item.title} className="techbridge-card">
            <p>{item.description}</p>
            <Button type="primary">Connect</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TechBridgeUI;
