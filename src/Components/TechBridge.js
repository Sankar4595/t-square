import React, { useEffect, useState } from "react";
import { Layout, Card, Button, Modal, Input, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../App";

const { Content } = Layout;

// const techBridgeData = [
//   {
//     title: "Consulting",
//     description:
//       "Expert guidance to offer tailored solutions that support your Talent & Tech journey across all levels",
//   },
//   {
//     title: "Tech Papers",
//     description:
//       "Expert guidance and support; aiming to create, refine, or submit technical papers to conferences, journals or institutions / platforms",
//   },
//   {
//     title: "Competency Programs",
//     description:
//       "Tailored competency development plan to enhance personal and professional growth which meets organization objectives",
//   },
//   {
//     title: "Academic Projects",
//     description:
//       "Expert assistance for various aspects of academic project, including research, submission strategy, ensuring high standards",
//   },
//   {
//     title: "Intellectual Properties",
//     description:
//       "Expert support for your inventions to ensure design trademarks, copyrights and assets are safeguarded against infringement",
//   },
//   {
//     title: "Research Articles",
//     description:
//       "Expert consultation to developing, refining, and submitting high quality research papers for publication",
//   },
// ];

const TechBridgeUI = ({ setModalVisible, techBridgeData, handleClickConnect ,fetchTechBridges }) => {
  const userRaw = localStorage.getItem("user");
  const userDetail = userRaw ? JSON.parse(userRaw) : null;



  const deleteTech = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}techbridge/deleteTechBridge/${id}`);
      message.success("TechBridge deleted successfully!");
      await fetchTechBridges()
    } catch (error) {
      console.log('error: ', error);
      message.error("Failed to delete TechBridge.");

    }
  }

  return (
    <AppContainer>
      <Content className="content-container">
        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 10 }}>
          <h3 className="techbridge-title">
            Bridging the gap beyond borders to realize the full potential and
            unlock value.
          </h3>
          {userDetail?.role === "Custodian" && (
            <Button type="primary" onClick={() => setModalVisible(true, "Add", "")}>
              Add TechBridge
            </Button>
          )}
        </div>

        <div className="techbridge-grid">
          {techBridgeData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              className="techbridge-card"
              extra={
                userDetail?.role === "Custodian" && (
                  <div style={{display:"flex",gap:15}}>
                    <EditOutlined onClick={() => setModalVisible(true, "Edit", item._id)} style={{ cursor: "pointer" }} />
                    <DeleteOutlined onClick={() => deleteTech(item._id)} style={{ cursor: "pointer" }} />
                  </div>
                )
              }
            >
              <p>{item.description}</p>
              <Button type="primary" onClick={() => handleClickConnect(`/course/${item?._id}`)}>Connect</Button>
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
