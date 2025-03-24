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

const MyRegistration = () => {
  const navigate = useNavigate();
  const onFinish = async (event) => {
    try {
      const res = await axios.post(`${API_URL}users/signup`, event);
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

            <Form.Item
              label="Mobile Number"
              name="mobile"
              rules={[{ required: true, message: "Mobile number is required" }]}
            >
              <Input placeholder="+91 9000000000" />
            </Form.Item>

            <Form.Item label="Register as" name="role">
              <Radio.Group>
                <Radio value="Custodian">Custodian</Radio>
                <Radio value="Talent">Talent</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Years of Exp"
              name="experience"
              rules={[{ required: true, message: "Experience is required" }]}
            >
              <Input placeholder="01" />
            </Form.Item>

            <Form.Item label="Designation" name="designation">
              <Input placeholder="Consult" />
            </Form.Item>

            <Form.Item label="Institution" name="institution">
              <Input placeholder="Vellore Institute of Technology" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="get-start-btn"
              >
                Get started
              </Button>
            </Form.Item>
          </Form>
        </VisionContainerReg>
      </div>
    </RegisterContainer>
  );
};

export default MyRegistration;
