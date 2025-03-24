import styled from "styled-components";
import banner from "../assets/banner.png";
import { Button } from "antd";

export const RegisterContainer = styled.div`
  width: 100%;
  height: calc(100vh - 130px);
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  .ant-form-item-explain-error {
    color: #fff;
    text-align: end;
  }
  .ant-form-item {
    margin-bottom: 14px !important;
    color: #fff !important;
  }
  .ant-row {
    display: flex;
    justify-content: space-evenly;
  }
  label {
    color: #fff !important;
  }
  .ant-input,
  .ant-input-affix-wrapper {
    width: 250px !important;
  }
  .ant-form-item .ant-form-item-control-input {
    text-align: end !important;
  }
  .container-left {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: end;
    height: 85%;
  }
  .container-right {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    /* align-items: end; */
    height: 95%;
    margin-top: 5px;
  }

  .card {
    width: 25%;
    background-color: #ebe6e2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    p {
      width: 60%;
      padding: 10px;
      margin: 0px;
    }
    a {
      color: #428fe3;
      font-weight: 500;
    }
  }
  .btn-social {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    padding: 20px 0;

    .container-left,
    .container-right {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: auto;
    }

    .card {
      width: 80%;
      margin: 10px 0;
      flex-direction: column;
      text-align: center;
    }
  }
  .optional-reg {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: #fff;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    hr {
      width: 35%;
      height: 5px;
      font-size: 50px;
      font-weight: 800;
      background-color: #fff;
      margin: 0px;
      border-radius: 8px;
    }
  }
  .get-start-btn {
    position: absolute;
    left: 30%;
  }
`;

export const VisionContainerReg = styled.div`
  background: #428fe3;
  padding: 0px 15px 0px 15px;
  width: 80%;
  height: 95%;
  border-radius: 15px;
  color: white;
  font-family: Arial, sans-serif;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  .ant-btn {
    position: absolute;
    bottom: -10px;
    /* right: 20px; */
    font-weight: bolder;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 15px;
    text-align: center;

    /* .ant-btn {
      position: static;
      margin-top: 10px;
    } */
  }
`;

export const TitleReg = styled(Button)`
  font-weight: bold;
  margin-bottom: 10px;
  position: relative !important;
  border-radius: 8px !important;
  text-align: center;
  font-size: 12px;
  /* &:after {
    content: "";
    display: block;
    width: 50px;
    height: 2px;
    background: white;
    margin-top: 5px;
  } */
`;

export const VisionTextReg = styled.p`
  font-size: 14px;
  line-height: 3;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    line-height: 2;
    font-size: 12px;
  }
`;
