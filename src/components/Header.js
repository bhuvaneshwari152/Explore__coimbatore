import React from "react";
import { useNavigate } from "react-router-dom";
import headerBg from "../assets/coimbatore.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#fff",
      backgroundImage: `url(${headerBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      overflow: "hidden",
      padding: "0 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1,
      }} />

      <div style={{ zIndex: 2, animation: "fadeIn 1.5s ease-in-out" }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "20px", textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}>
          Welcome to Coimbatore
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "40px", textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}>
          Discover the best places, hotels, restaurants, and more
        </p>
        <button
          onClick={() => navigate("/home")}
          style={{
            padding: "14px 36px", fontSize: "1.2rem", fontWeight: "600",
            color: "#fff", backgroundColor: "#ff5722", border: "none",
            borderRadius: "10px", cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          }}
          onMouseEnter={e => { e.target.style.backgroundColor = "#e64a19"; e.target.style.transform = "scale(1.05)"; }}
          onMouseLeave={e => { e.target.style.backgroundColor = "#ff5722"; e.target.style.transform = "scale(1)"; }}
        >
          Explore Now
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Header;


