import { useEffect, useState } from "react";
import { NavBarContainer } from "../Styles/navbarStyle";
import { Button, Menu, Dropdown, message } from "antd";
import { DownOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../assets/logo.svg";
import TechBridgeUI from "./TechBridge";
import { useNavigate } from "react-router-dom";
import { Modal, Input } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../App";

const AccountMenu = () => {
  const navigate = useNavigate();
  const userRaw = localStorage.getItem("user");
  const userDetail = userRaw ? JSON.parse(userRaw) : null;
  const onLogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/")
  }
  return (
    <Menu>
      {userDetail ? (
        <>
          <Menu.Item
            key="email"
            disabled
            style={{ cursor: "default", fontWeight: "bold" }}
          >
            {userDetail.email}
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="logout" onClick={() => onLogOut()}>
            Log out
          </Menu.Item>
        </>

      ) : (
        <>
          <Menu.Item key="login" onClick={() => navigate("/login")}>
            Login
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="registration" onClick={() => navigate("/register")}>
            My Registration
          </Menu.Item>

        </>
      )}
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
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [action, setAction] = useState("");
  const [editId, setEditId] = useState("");
  const userRaw = localStorage.getItem("user");
  const userDetail = userRaw ? JSON.parse(userRaw) : null;
  const [techBridgeData, setTechBridgeData] = useState([]);

  const navigate = useNavigate();
  const handleAddAndEditTechBridge = async () => {
    const payload = {
      title,
      description,
      createdBy: userDetail?._id,
    };

    try {
      let response;
      if (action === "Add") {
        response = await axios.post(`${API_URL}techbridge/addTechBridge`, payload);
        message.success("TechBridge added successfully!");
      } else {
        response = await axios.put(`${API_URL}techbridge/updateTechBridge/${editId}`, payload);
        message.success("TechBridge updated successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }

    // Reset form
    setTitle("");
    setDescription("");
    setModalVisible(false);
  };

  const [techBridgeDropdownOpen, setTechBridgeDropdownOpen] = useState(false);

  useEffect(() => {
    // When modal opens, close the TechBridge dropdown and load data if editing
    if (modalVisible) {
      if (editId !== "") {
        const fetchTechBridge = async () => {
          try {
            const response = await axios.get(`${API_URL}techbridge/getTechBridge/${editId}`);
            console.log('response: ', response);
            setTitle(response.data.title);
            setDescription(response.data.description); // <-- Corrected this line
          } catch (error) {
            console.error("Failed to fetch TechBridge:", error);
          }
        };

        fetchTechBridge();
      } else {
        setTitle("");
        setDescription("");
      }
      setTechBridgeDropdownOpen(false);
    }
  }, [modalVisible]);

  const handleClickConnect = (event) => {
    setTechBridgeDropdownOpen(false);
    navigate(event);
  }

  const fetchTechBridges = async () => {
    try {
      const response = await axios.get(`${API_URL}techbridge/getAllTechBridges`);
      console.log('response: ', response);
      setTechBridgeData(response.data); // adjust as needed if response format differs
    } catch (error) {
      console.error("Failed to fetch TechBridges:", error);
    }
  };
  useEffect(() => {
    if (techBridgeDropdownOpen) {
      fetchTechBridges();
    }
  }, [techBridgeDropdownOpen]);

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
              overlay={<TechBridgeUI 
                setModalVisible={(event, action, id) => {
                setTechBridgeDropdownOpen(!event)
                setAction(action);
                if (action === "Edit") {
                  setEditId(id)
                } else {
                  setEditId("");
                  setTitle("");
                  setDescription("");
                }
                setModalVisible(event);
              }}
                techBridgeData={techBridgeData}
                handleClickConnect={handleClickConnect}   fetchTechBridges={fetchTechBridges}/>
              }
              trigger={["click"]}
              placement="bottomCenter"
              open={techBridgeDropdownOpen}
              onOpenChange={(open) => setTechBridgeDropdownOpen(true)}
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
      <Modal
        title={`${action === "Add" ? "Add" : "Edit"} TechBridge`}
        open={modalVisible}
        onOk={handleAddAndEditTechBridge}
        onCancel={() => setModalVisible(false)}
        okText={action === "Add" ? "Add" : "Edit"}
      >
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        <Input.TextArea
          rows={4}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Modal>
    </NavBarContainer>
  );
};

export default NavBar;
