import React, { useState } from "react";

const places = [
  {
    id: 1,
    name: "Marudamalai Temple",
    category: "Temple",
    description: "A famous hilltop temple dedicated to Lord Murugan, offering panoramic views of Coimbatore city.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Marudamalai_Temple_Coimbatore.jpg/640px-Marudamalai_Temple_Coimbatore.jpg",
    emoji: "🛕",
    timing: "6:00 AM – 8:30 PM",
    location: "Marudamalai Hill",
  },
  {
    id: 2,
    name: "Gass Forest Museum",
    category: "Museum",
    description: "One of the oldest forest museums in Asia with rare wood specimens, animals, and ecological exhibits.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Gass_Forest_Museum.jpg",
    emoji: "🌿",
    timing: "9:00 AM – 5:00 PM",
    location: "Mettupalayam Road",
  },
  {
    id: 3,
    name: "Brookefields Mall",
    category: "Shopping",
    description: "A premium shopping destination featuring top brands, restaurants, and entertainment options.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600",
    emoji: "🛍️",
    timing: "10:00 AM – 10:00 PM",
    location: "Brookefields, Krishnaswamy Road",
  },
  {
    id: 4,
    name: "Kovai Kutralam",
    category: "Nature",
    description: "A scenic waterfall surrounded by lush greenery, perfect for a refreshing day trip near the city.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    emoji: "💧",
    timing: "Open 24 hours",
    location: "Singanallur – 25 km",
  },
  {
    id: 5,
    name: "VOC Park & Zoo",
    category: "Nature",
    description: "A popular city park with a mini zoo, boating, and beautiful green spaces for family outings.",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=600",
    emoji: "🦁",
    timing: "9:00 AM – 6:00 PM",
    location: "Avinashi Road",
  },
  {
    id: 6,
    name: "Perur Pateeswarar Temple",
    category: "Temple",
    description: "An ancient Shiva temple known for its magnificent Dravidian architecture and sacred history.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Perur_temple.jpg/640px-Perur_temple.jpg",
    emoji: "🛕",
    timing: "6:00 AM – 12:00 PM, 4:00 PM – 9:00 PM",
    location: "Perur, 6 km from City",
  },
  {
    id: 7,
    name: "Black Thunder Theme Park",
    category: "Entertainment",
    description: "South India's largest water and amusement park with thrilling rides and water attractions.",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=600",
    emoji: "🎢",
    timing: "10:30 AM – 6:00 PM",
    location: "Mettupalayam, 36 km",
  },
  {
    id: 8,
    name: "Isha Yoga Center",
    category: "Spiritual",
    description: "A serene spiritual center founded by Sadhguru, home to the iconic Adiyogi statue and yoga programs.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600",
    emoji: "🧘",
    timing: "6:00 AM – 8:00 PM",
    location: "Velliangiri Foothills, 30 km",
  },
];

const categories = ["All", "Temple", "Museum", "Shopping", "Nature", "Entertainment", "Spiritual"];

const foods = [
  { name: "Parotta & Salna", emoji: "🫓", where: "Selvam Parotta Stall, RS Puram" },
  { name: "Kari Dosai", emoji: "🥞", where: "Annapoorna Hotel, Town Hall" },
  { name: "Coimbatore Kozhi Varuval", emoji: "🍗", where: "Murugan Idli Shop" },
  { name: "Sothi Kulambu", emoji: "🍲", where: "Sri Krishna Bhavan, Gandhipuram" },
  { name: "Filter Coffee", emoji: "☕", where: "Annapoorna, multiple branches" },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPlace, setSelectedPlace] = useState(null);

  const filtered = activeCategory === "All"
    ? places
    : places.filter((p) => p.category === activeCategory);

  return (
    <div style={styles.app}>
      {/* Hero */}
      <header style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <p style={styles.heroTag}>🌴 Tamil Nadu, India</p>
          <h1 style={styles.heroTitle}>Explore Coimbatore</h1>
          <p style={styles.heroSub}>
            The Manchester of South India — where culture, nature & cuisine meet
          </p>
        </div>
      </header>

      {/* Filter Tabs */}
      <nav style={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              ...styles.tab,
              ...(activeCategory === cat ? styles.tabActive : {}),
            }}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Places Grid */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🗺️ Top Places to Visit</h2>
        <div style={styles.grid}>
          {filtered.map((place) => (
            <div
              key={place.id}
              style={styles.card}
              onClick={() => setSelectedPlace(place)}
            >
              <div style={styles.cardImageWrap}>
                <div style={{ ...styles.cardEmoji }}>{place.emoji}</div>
              </div>
              <div style={styles.cardBody}>
                <span style={styles.badge}>{place.category}</span>
                <h3 style={styles.cardTitle}>{place.name}</h3>
                <p style={styles.cardDesc}>{place.description}</p>
                <p style={styles.cardMeta}>📍 {place.location}</p>
                <p style={styles.cardMeta}>🕐 {place.timing}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Food Section */}
      <section style={{ ...styles.section, background: "#fff8f0" }}>
        <h2 style={styles.sectionTitle}>🍽️ Must-Try Foods</h2>
        <div style={styles.foodGrid}>
          {foods.map((food, i) => (
            <div key={i} style={styles.foodCard}>
              <span style={styles.foodEmoji}>{food.emoji}</span>
              <div>
                <p style={styles.foodName}>{food.name}</p>
                <p style={styles.foodWhere}>📍 {food.where}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Facts */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📋 Quick Facts</h2>
        <div style={styles.factsGrid}>
          {[
            { label: "Best Time to Visit", value: "Oct – Feb", icon: "🌤️" },
            { label: "Language", value: "Tamil", icon: "🗣️" },
            { label: "Currency", value: "Indian Rupee (₹)", icon: "💰" },
            { label: "Airport", value: "Coimbatore Intl. Airport", icon: "✈️" },
            { label: "Famous For", value: "Textiles & Engineering", icon: "🏭" },
            { label: "Distance from Chennai", value: "~500 km", icon: "🚂" },
          ].map((fact, i) => (
            <div key={i} style={styles.factCard}>
              <span style={styles.factIcon}>{fact.icon}</span>
              <p style={styles.factLabel}>{fact.label}</p>
              <p style={styles.factValue}>{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Made with ❤️ for Coimbatore | Explore. Experience. Enjoy.</p>
      </footer>

      {/* Modal */}
      {selectedPlace && (
        <div style={styles.modalOverlay} onClick={() => setSelectedPlace(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setSelectedPlace(null)}>✕</button>
            <div style={styles.modalEmoji}>{selectedPlace.emoji}</div>
            <span style={styles.badge}>{selectedPlace.category}</span>
            <h2 style={styles.modalTitle}>{selectedPlace.name}</h2>
            <p style={styles.modalDesc}>{selectedPlace.description}</p>
            <div style={styles.modalInfo}>
              <p>📍 <strong>Location:</strong> {selectedPlace.location}</p>
              <p>🕐 <strong>Timing:</strong> {selectedPlace.timing}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#1a1a2e",
    minHeight: "100vh",
    background: "#f7f7f7",
  },
  hero: {
    position: "relative",
    background: "linear-gradient(135deg, #1a3c5e 0%, #0f2c4a 50%, #16213e 100%)",
    padding: "80px 20px",
    textAlign: "center",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at center, rgba(255,165,0,0.15) 0%, transparent 70%)",
  },
  heroContent: { position: "relative", zIndex: 1 },
  heroTag: { color: "#ffd700", fontSize: "14px", fontWeight: 600, letterSpacing: "2px", marginBottom: "10px" },
  heroTitle: {
    fontSize: "clamp(32px, 6vw, 64px)",
    fontWeight: 800,
    color: "#ffffff",
    margin: "0 0 16px",
    letterSpacing: "-1px",
  },
  heroSub: { color: "#a8c6e0", fontSize: "18px", maxWidth: "600px", margin: "0 auto" },
  tabs: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    padding: "20px",
    justifyContent: "center",
    background: "#fff",
    borderBottom: "1px solid #e0e0e0",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  tab: {
    padding: "8px 18px",
    borderRadius: "20px",
    border: "2px solid #e0e0e0",
    background: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
    color: "#555",
    transition: "all 0.2s",
  },
  tabActive: {
    background: "#1a3c5e",
    color: "white",
    border: "2px solid #1a3c5e",
  },
  section: { padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" },
  sectionTitle: { fontSize: "26px", fontWeight: 700, marginBottom: "24px", color: "#1a3c5e" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "white",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    border: "1px solid #eee",
  },
  cardImageWrap: {
    height: "120px",
    background: "linear-gradient(135deg, #e8f4fd, #c9e8ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardEmoji: { fontSize: "52px" },
  cardBody: { padding: "16px" },
  badge: {
    display: "inline-block",
    padding: "3px 10px",
    background: "#fff3e0",
    color: "#e65100",
    borderRadius: "12px",
    fontSize: "11px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "8px",
  },
  cardTitle: { fontSize: "17px", fontWeight: 700, margin: "0 0 8px", color: "#1a3c5e" },
  cardDesc: { fontSize: "13px", color: "#666", lineHeight: 1.5, margin: "0 0 10px" },
  cardMeta: { fontSize: "12px", color: "#888", margin: "3px 0" },
  foodGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
  },
  foodCard: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: "white",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #ffe0b2",
    boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
  },
  foodEmoji: { fontSize: "36px" },
  foodName: { fontSize: "15px", fontWeight: 700, margin: "0 0 4px", color: "#1a3c5e" },
  foodWhere: { fontSize: "12px", color: "#888", margin: 0 },
  factsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "16px",
  },
  factCard: {
    background: "white",
    padding: "20px 16px",
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid #e8e8e8",
    boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
  },
  factIcon: { fontSize: "28px", display: "block", marginBottom: "8px" },
  factLabel: { fontSize: "11px", color: "#999", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.5px" },
  factValue: { fontSize: "14px", fontWeight: 700, color: "#1a3c5e", margin: 0 },
  footer: {
    textAlign: "center",
    padding: "24px",
    background: "#1a3c5e",
    color: "#a8c6e0",
    fontSize: "14px",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    padding: "20px",
  },
  modal: {
    background: "white",
    borderRadius: "20px",
    padding: "32px",
    maxWidth: "480px",
    width: "100%",
    position: "relative",
    textAlign: "center",
  },
  closeBtn: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "#f0f0f0",
    border: "none",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 700,
  },
  modalEmoji: { fontSize: "64px", marginBottom: "12px" },
  modalTitle: { fontSize: "24px", fontWeight: 800, color: "#1a3c5e", margin: "8px 0" },
  modalDesc: { color: "#555", lineHeight: 1.6, margin: "12px 0 16px" },
  modalInfo: {
    background: "#f7f9fc",
    borderRadius: "10px",
    padding: "14px",
    textAlign: "left",
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#444",
  },
};