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
  }
  .ant-menu-item {
    color: #fff;
    font-weight: 500;
    font-size: 21px;
  }
  .menu-list {
    justify-content: left !important;
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

  .techbridge-container {
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 700px;
  }
  .techbridge-title {
    font-size: 14px;
    text-align: center;
    color: #444;
    margin-bottom: 10px;
  }
  .techbridge-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .techbridge-card {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 10px;
  }
`;
