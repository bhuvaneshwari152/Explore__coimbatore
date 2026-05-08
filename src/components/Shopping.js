import React from 'react';
import '../styles.css';
import mall1 from '../assets/mall/brooke.png';
import mall2 from '../assets/mall/fun.png';
import mall3 from '../assets/mall/lulu.png';
import mall4 from '../assets/mall/prozone.png';
import mall5 from '../assets/mall/broad.png';

const malls = [
  { 
    name: "Brookefields Mall", 
    image: mall1, 
    description: "Brookefields Mall is one of Coimbatore’s most popular malls offering shopping, dining, and entertainment under one roof. It features a wide range of international and local brands.", 
    address: "67-71, Dr Krishnasamy Mudaliyar Rd, Brookefields, Sukrawar Pettai, Ram Nagar, Coimbatore, Tamil Nadu 641001",
    mapLink: "https://www.google.com/maps?q=Brookefields+Mall+Coimbatore"
  },
  { 
    name: "Fun Republic Mall", 
    image: mall2, 
    description: "Fun Republic Mall provides a perfect mix of entertainment and shopping experiences. It houses several brand outlets, restaurants, and a multiplex cinema.", 
    address: "Avinashi Rd, next to PSG Tech, Peelamedu, Coimbatore, Tamil Nadu 641004",
    mapLink: "https://www.google.com/maps?q=Fun+Republic+Mall+Coimbatore"
  },
  { 
    name: "Prozone Mall", 
    image: mall4, 
    description: "Prozone Mall is a large open-concept shopping center with a range of global and Indian brands, dining outlets, and entertainment options for all age groups.", 
    address: "SF 201, Sivanandapuram, Sathy Rd, Coimbatore, Tamil Nadu 641035",
    mapLink: "https://www.google.com/maps?q=Prozone+Mall+Coimbatore"
  },
  { 
    name: "Lulu Hypermarket", 
    image: mall3, 
    description: "Lulu Hypermarket in Coimbatore offers a premium shopping experience with groceries, fashion, electronics, and home goods, all in one spacious complex.", 
    address: "Lakshmi Mills 627, B1A, Avinashi Rd, GM Nagar, Pudur, Pappanaickenpalayam, Coimbatore, Tamil Nadu 641037",
    mapLink: "https://www.google.com/maps?q=Lulu+Hypermarket+Coimbatore"
  },
  { 
    name: "Broadway Mall", 
    image: mall5, 
    description: "Broadway Mall is a modern shopping and leisure destination featuring retail stores, eateries, and entertainment spaces in a comfortable setting.", 
    address: "96, Broadway Square, off Avinashi Road, near the Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014",
    mapLink: "https://www.google.com/maps?q=Broadway+Mall+Coimbatore"
  }
];

function Shopping() {
  return (
    <div style={{ minHeight: "100vh", padding: "50px 20px", background: "linear-gradient(to bottom, #fff9f5, #f9f9f9)", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ fontSize: "2.8rem", fontWeight: "700", textAlign: "center", color: "#d35400", marginBottom: "50px", textShadow: "1px 1px 5px rgba(0,0,0,0.1)" }}>
        🛍️ Top Shopping Malls in Coimbatore
      </h2>

      {Array.from({ length: Math.ceil(malls.length / 3) }).map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "30px", flexWrap: "wrap" }}>
          {malls.slice(rowIndex * 3, rowIndex * 3 + 3).map((mall, index) => (
            <div key={index} style={{ flex: "0 0 30%", maxWidth: "30%" }}>
              <div 
                style={{ 
                  backgroundColor: "#fff", 
                  borderRadius: "20px", 
                  overflow: "hidden", 
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)", 
                  cursor: "pointer", 
                  transition: "all 0.3s" 
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"; }}
              >
                <img 
                  src={mall.image} 
                  alt={mall.name} 
                  style={{ width: "100%", height: "220px", objectFit: "cover", transition: "transform 0.5s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
                  <h5 style={{ color: "#d35400", fontWeight: "700", marginBottom: "10px", textAlign: "center" }}>{mall.name}</h5>
                  <p style={{ fontSize: "0.95rem", color: "#555", textAlign: "justify", marginBottom: "10px" }}>{mall.description}</p>
                  <p style={{ fontSize: "0.85rem", color: "#777", marginBottom: "10px" }}>
                    <strong>📍 Address:</strong> {mall.address}
                  </p>
                  <a 
                    href={mall.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", backgroundColor: "#d35400", color: "#fff", padding: "8px 16px", borderRadius: "20px", fontWeight: "600", alignSelf: "center" }}
                  >
                    📍 Location
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Shopping;
