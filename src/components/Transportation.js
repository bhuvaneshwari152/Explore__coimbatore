import React from 'react';
import '../styles.css';

import airport from '../assets/trans/airport.png';
import gandhipuram from '../assets/trans/gandhipuram.png';
import ukkadam from '../assets/trans/ukkadam.png';
import junction from '../assets/trans/junction.png';
import pollachi from '../assets/trans/pollachi.png';
import singanallur from '../assets/trans/singanallur.png';

const transport = [
  { 
    name: "Coimbatore International Airport", 
    location: "Peelamedu, Avinashi Road",
    mapLink: "https://www.google.com/maps?q=Coimbatore+Airport",
    image: airport,
    description: "Main airport connecting Coimbatore to major Indian cities. Handles domestic and limited international flights with modern facilities."
  },
  { 
    name: "Coimbatore Junction", 
    location: "Gopalapuram, Oppanakara Street",
    mapLink: "https://www.google.com/maps?q=Coimbatore+Junction+Railway+Station",
    image: junction,
    description: "One of the busiest railway stations in South India, known for its cleanliness and connectivity to major cities like Chennai, Bengaluru, Mumbai, and Delhi."
  },
  { 
    name: "Gandhipuram Central Bus Stand", 
    location: "100 Feet Road, Gandhipuram",
    mapLink: "https://www.google.com/maps?q=Gandhipuram+Bus+Stand",
    image: gandhipuram,
    description: "The central bus terminal in Coimbatore for intercity and intracity travel. It connects passengers to major destinations across Tamil Nadu with 24-hour service."
  },
  { 
    name: "Ukkadam Bus Terminal", 
    location: "Trichy Road, Ukkadam",
    mapLink: "https://www.google.com/maps?q=Ukkadam+Bus+Stand",
    image: ukkadam,
    description: "A key bus terminal serving routes toward Pollachi, Palakkad, and southern Tamil Nadu. Recently upgraded with modern infrastructure and passenger facilities."
  },
  { 
    name: "Singanallur Bus Stand", 
    location: "Trichy Road, Singanallur",
    mapLink: "https://www.google.com/maps?q=Singanallur+Bus+Stand",
    image: singanallur,
    description: "Located on Trichy Road, this terminal serves buses to Tirupur, Erode, and Trichy. It’s known for its organized platform layout and easy accessibility."
  },
  { 
    name: "Pollachi Bus Stand", 
    location: "Pollachi Town",
    mapLink: "https://www.google.com/maps?q=Pollachi+Bus+Stand",
    image: pollachi,
    description: "A major hub for travelers heading toward Coimbatore, Valparai, and rural Tamil Nadu regions. Known for frequent bus schedules and regional connectivity."
  }
];

function Transportation() {
  return (
    <div style={{ minHeight: "100vh", padding: "50px 20px", background: "linear-gradient(to bottom, #f0f8ff, #e6f2ff)", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ fontSize: "2.8rem", fontWeight: "700", textAlign: "center", color: "#0d6efd", marginBottom: "50px", textShadow: "1px 1px 5px rgba(0,0,0,0.1)" }}>
        🚍 Transportation in Coimbatore ✈️
      </h2>

      {Array.from({ length: Math.ceil(transport.length / 3) }).map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "30px", flexWrap: "wrap" }}>
          {transport.slice(rowIndex * 3, rowIndex * 3 + 3).map((place, index) => (
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
                  src={place.image} 
                  alt={place.name} 
                  style={{ width: "100%", height: "230px", objectFit: "cover", transition: "transform 0.5s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
                  <h5 style={{ color: "#0d6efd", fontWeight: "700", marginBottom: "10px", textAlign: "center" }}>{place.name}</h5>
                  <p style={{ fontSize: "0.9rem", color: "#555", textAlign: "justify", marginBottom: "8px" }}>
                    📍 <strong>Location:</strong> {place.location}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "#777", textAlign: "justify", marginBottom: "12px" }}>
                    {place.description}
                  </p>
                  <a 
                    href={place.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", backgroundColor: "#0d6efd", color: "#fff", padding: "8px 16px", borderRadius: "20px", fontWeight: "600", alignSelf: "center" }}
                  >
                    View on Map
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

export default Transportation;
