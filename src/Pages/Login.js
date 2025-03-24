import React from "react";
import {
  RegisterContainer,
  TitleReg,
  VisionContainerReg,
} from "../Styles/registrationStyle";
import { Button, Form, Input, Radio } from "antd";
import google from "../assets/google.svg";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (event) => {
    try {
      const res = await axios.post(`${API_URL}users/login`, event);
      console.log("res: ", res);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      navigate("/");
    }
  };
  return (
    <RegisterContainer>
      <div className="container-left"></div>
      <div className="container-right">
        <VisionContainerReg>
          <div className="btn-social">
            <TitleReg
              icon={<img width={15} height={15} src={google} alt="google" />}
            >
              Sign in or Login with Google
            </TitleReg>

            <div className="optional-reg">
              <hr /> Or <hr />
            </div>
          </div>
          <Form onFinish={onFinish} layout="horizontal">
            <Form.Item
              label="Email Id"
              name="email"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input placeholder="e.g. John@example.com" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password placeholder="Must be at least 6 characters" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="get-start-btn"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </VisionContainerReg>
      </div>
    </RegisterContainer>
  );
};

export default Login;
