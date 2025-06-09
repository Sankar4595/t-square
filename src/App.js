import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import LandingPage from "./Pages/LandingPage";
import MyRegistration from "./Pages/MyRegistration";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CoursePage from "./Pages/CoursePage";

export const API_URL = "https://t-square-backend.onrender.com/";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<MyRegistration />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<CoursePage />} path="/course/:id" />
      </Routes>
    </div>
  );
}

export default App;
