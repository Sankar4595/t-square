import React from "react";
import { Layout, Menu, Card, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Header, Content } = Layout;

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
    <AppContainer>
      <Content className="content-container">
        <h3 className="techbridge-title">
          Bridging the gap beyond borders to realize the full potential and
          unlock value.
        </h3>
        <div className="techbridge-grid">
          {techBridgeData.map((item, index) => (
            <Card key={index} title={item.title} className="techbridge-card">
              <p>{item.description}</p>
              <Button type="primary">Connect</Button>
            </Card>
          ))}
        </div>
      </Content>
    </AppContainer>
  );
};

export default TechBridgeUI;

const AppContainer = styled(Layout)`
  width: 100%;
  .content-container {
    padding: 20px;
    text-align: center;
    width: 100%;
    height: calc(100vh - 130px);
    overflow: auto;
  }
  .techbridge-title {
    font-size: 16px;
    color: #444;
    margin-bottom: 20px;
  }
  .techbridge-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    justify-content: center;
  }
  .techbridge-card {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 15px;
    text-align: left;
  }

  @media (max-width: 768px) {
    .techbridge-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
