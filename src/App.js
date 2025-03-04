import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route element={<LandingPage />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
