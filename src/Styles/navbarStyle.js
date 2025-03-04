import styled from "styled-components";

export const NavBarContainer = styled.div`
  .top-message {
    background-color: #428fe3;
    color: #fff;
    display: flex;
    justify-content: space-around;
    height: 70px;
    align-items: center;
    .ant-btn {
      width: 250px;
    }
  }
  p {
    padding: 0px;
    margin: 0px;
    font-size: 25px;
  }
  .logo {
    width: 200px;
    display: flex;
    color: #fff;
    justify-content: space-evenly;
    align-items: center;
  }
  .navbar-header {
    display: flex;
    background-color: #373739;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid #fff;
    padding: 0 20px;
  }
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
  .menu-container {
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: space-between;
  }
  .menu-list {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 40px;
  }
  .MyAccount {
    background-color: #373739;
    border: none !important;
    color: #fff;
  }
  .account-icon {
    font-size: 18px;
    padding: 10px;
    background-color: #428fe3;
    border-radius: 25px;
    font-weight: 500;
  }
  .MyAccount:hover,
  .MyAccount:focus,
  .MyAccount:active {
    background-color: #373739 !important;
    color: #fff !important;
    border: none !important;
    box-shadow: none !important;
  }

  .ant-menu-item {
    color: #fff;
    font-weight: 500;
    font-size: 21px;
  }
  .ant-menu-item-active::after {
    border-bottom-color: #373739 !important;
    color: #fff;
  }
  .ant-menu-item-selected {
    color: #fff !important;
  }
  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }
    .menu-container {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background: #373739;
      flex-direction: column;
    }
    .menu-container.visible {
      display: flex;
    }
    .menu-list {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .top-message {
      display: none;
    }
  }
`;
