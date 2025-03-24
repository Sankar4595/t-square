import React, { useState } from "react";
import { NavBarContainer } from "../Styles/navbarStyle";
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../assets/logo.svg";
import TechBridgeUI from "./TechBridge";
import { useNavigate } from "react-router-dom";

const userEmail = "95sankar@gmail.com"; // Replace with dynamic data if needed

const AccountMenu = () => {
  const navigate = useNavigate();
  return (
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
      <Menu.Item key="registration" onClick={() => navigate("/register")}>
        My Registration
      </Menu.Item>
    </Menu>
  );
};

const ContactMenu = () => {
  return (
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
};

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

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
        <Button
          className="menu-toggle"
          icon={<MenuOutlined />}
          onClick={() => setMenuVisible(!menuVisible)}
        />
        <div className={`menu-container ${menuVisible ? "visible" : ""}`}>
          <Menu
            mode="horizontal"
            className="menu-list"
            style={{ background: "#373739", color: "#fff" }}
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
            <Dropdown
              overlay={<ContactMenu />}
              trigger={["click"]}
              placement="bottomCenter"
            >
              <Menu.Item key="contact">
                Contact <DownOutlined />
              </Menu.Item>
            </Dropdown>{" "}
          </Menu>
          <Dropdown overlay={<AccountMenu />} trigger={["click"]}>
            <Button
              className="MyAccount"
              icon={<UserOutlined className="account-icon" />}
              type="default"
            >
              My Account
            </Button>
          </Dropdown>
        </div>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
