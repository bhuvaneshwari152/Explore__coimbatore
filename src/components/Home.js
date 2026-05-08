import React from "react";
import { useNavigate } from "react-router-dom";
import touristImage from "../assets/home/tour.png";
import hotelImage from "../assets/home/hotel.png";
import restaurantImage from "../assets/home/res.png";
import shoppingImage from "../assets/home/shop.png";
import transportImage from "../assets/home/tran.png";
import hospitalImage from "../assets/home/hospital.png";
function Home() {
  const navigate = useNavigate();
  const features = [
    { name: "Places to Visit", route: "/tourist-spots", image: touristImage },
    { name: "Hotels", route: "/hotels", image: hotelImage },
    { name: "Restaurants", route: "/restaurants", image: restaurantImage },
    { name: "Shopping Malls", route: "/shopping", image: shoppingImage },
    { name: "Transportation", route: "/transportation", image: transportImage },
    { name: "Hospitals", route: "/hospitals", image: hospitalImage },
  ];
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          color: "#ffffff",
          textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          marginBottom: "50px",
          textAlign: "center",
          letterSpacing: "1px",
        }}
      >
        Explore Coimbatore
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "35px",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => navigate(feature.route)}
            style={{
              position: "relative",
              borderRadius: "20px",
              backdropFilter: "blur(12px)",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 35px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.2)";
            }}
          >
            {}
            <img
              src={feature.image}
              alt={feature.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                filter: "brightness(0.9)",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />

            {}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
                color: "#fff",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  marginBottom: "6px",
                }}
              >
                {feature.name}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  opacity: 0.9,
                  margin: 0,
                }}
              >
                Tap to explore details
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
