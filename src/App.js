import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import TouristSpots from "./components/TouristSpots";
import Hotels from "./components/Hotels";
import Restaurants from "./components/Restaurants";
import Shopping from "./components/Shopping";
import Transportation from "./components/Transportation";
import Hospitals from "./components/Hospitals";

function BackBar() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/home") return null;

  return (
    <div style={{
      background: "#1a3c5e",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      position: "sticky",
      top: 0,
      zIndex: 999,
    }}>
      <button
        onClick={() => navigate("/home")}
        style={{
          background: "#ff5722",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "8px 20px",
          fontWeight: "600",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        ← Back to Home
      </button>
      <span style={{ color: "white", fontWeight: "700", fontSize: "18px" }}>
        Explore Coimbatore
      </span>
    </div>
  );
}

function App() {
  return (
    <Router>
      <BackBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tourist-spots" element={<TouristSpots />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/hospitals" element={<Hospitals />} />
      </Routes>
    </Router>
  );
}

export default App;
