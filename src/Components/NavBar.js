import React from "react";
import { NavBarContainer } from "../Styles/navbarStyle";
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../assets/logo.svg";
import TechBridgeUI from "./TechBridge";

const userEmail = "95sankar@gmail.com"; // Replace with dynamic data if needed

const accountMenu = (
  <Menu>
    <Menu.Item
      key="email"
      disabled
      style={{ cursor: "default", fontWeight: "bold" }}
    >
      {userEmail}
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="profile">My Profile</Menu.Item>
    <Menu.Item key="registration">My Registration</Menu.Item>
  </Menu>
);

const contactMenu = (
  <Menu>
    <Menu.Item key="suggestion" disabled style={{ fontWeight: "bold" }}>
      Our Suggestions
    </Menu.Item>
    <Menu.Item key="consulting">🌐 Visit us for consulting..</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="about">📘 About Us</Menu.Item>
    <Menu.Item key="join">👥 Join Us</Menu.Item>
    <Menu.Item key="support">💬 Help & Support</Menu.Item>
  </Menu>
);

const NavBar = () => {
  return (
    <NavBarContainer>
      <div className="top-message">
        <p>
          Empowering Global Opportunities with <b>Talents</b> and{" "}
          <b>Technology</b> Solutions
        </p>
        <Button>Know more..</Button>
      </div>
      <div className="navbar-header">
        <div className="logo">
          <img style={{ width: 40, height: 40 }} src={logo} alt="logo" />
          <h2>T-Square</h2>
        </div>
        <Menu
          mode="horizontal"
          style={{
            flex: 1,
            justifyContent: "center",
            background: "#373739",
            color: "#fff",
          }}
          className="menu-list"
        >
          <Menu.Item key="talent">Talent</Menu.Item>
          <Menu.Item key="technology">Technology</Menu.Item>
          <Dropdown
            overlay={<TechBridgeUI />}
            trigger={["click"]}
            placement="bottomCenter"
          >
            <Menu.Item key="techbridge">
              TechBridge <DownOutlined />
            </Menu.Item>
          </Dropdown>
          <Dropdown overlay={contactMenu} trigger={["click"]}>
            <Menu.Item key="contact">
              Contact <DownOutlined />
            </Menu.Item>
          </Dropdown>{" "}
        </Menu>
        <Dropdown overlay={accountMenu} trigger={["click"]}>
          <Button
            className="MyAccount"
            icon={<UserOutlined className="account-icon" />}
            type="default"
          >
            My Account
          </Button>
        </Dropdown>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
