import '../styles.css';

import spot1 from '../assets/siruvani.png'; 
import spot2 from '../assets/marudhamalai.png';
import spot3 from '../assets/adiyogi.png';
import spot4 from '../assets/black.png';
import spot5 from '../assets/dam.png';
import spot6 from '../assets/kovaikondttam.png';
import spot7 from '../assets/monkey.png';
import spot8 from '../assets/perur.png';
import spot9 from '../assets/velli.png';
import spot10 from '../assets/voc.png';
import spot11 from '../assets/musium.png';
import spot12 from '../assets/ranga.png';

const spots = [
  { name: "Siruvani Waterfalls", image: spot1, description: "Siruvani Waterfalls is a beautiful natural wonder surrounded by lush greenery. Famous for its sweet water, it is an ideal spot for relaxation, photography, and light trekking.", location: "https://www.google.com/maps?q=Siruvani+Waterfalls+Coimbatore" },
  { name: "Marudamalai Temple", image: spot2, description: "Marudamalai Temple is a sacred hill temple dedicated to Lord Murugan. It provides spiritual peace, a serene atmosphere, and breathtaking hill views that attract both devotees and tourists.", location: "https://www.google.com/maps?q=Marudamalai+Temple+Coimbatore" },
  { name: "Adiyogi Shiva Statue", image: spot3, description: "Standing 112 feet tall, the Adiyogi Shiva statue is a global symbol of inner peace and meditation. The nearby Isha Yoga Center further enhances its divine and serene aura.", location: "https://www.google.com/maps?q=Adiyogi+Shiva+Statue+Coimbatore" },
  { name: "Black Thunder Water Park", image: spot4, description: "Black Thunder Water Park is one of India’s largest water theme parks, nestled in the Nilgiri foothills. It is a perfect destination for families to enjoy thrilling rides and exciting water adventures.", location: "https://www.google.com/maps?q=Black+Thunder+Water+Park+Coimbatore" },
  { name: "Kodiveri Falls", image: spot5, description: "Kodiveri Falls, near Coimbatore, is surrounded by lush greenery and rocky landscapes. Visitors can enjoy the serene ambiance, the gentle roar of the water, and a refreshing escape from the city.", location: "https://www.google.com/maps?q=Kodiveri+Dam+Coimbatore" },
  { name: "Kovai Kondattam", image: spot6, description: "Kovai Kondattam is a fun-filled amusement park featuring water rides, wave pools, and family zones. It is one of the most popular entertainment destinations in Coimbatore.", location: "https://www.google.com/maps?q=Kovai+Kondattam+Coimbatore" },
  { name: "Monkey Falls", image: spot7, description: "Monkey Falls is a stunning natural waterfall located near the Aliyar Dam. It is an ideal spot for nature lovers, picnics, and refreshing dips in crystal-clear mountain water.", location: "https://www.google.com/maps?q=Monkey+Falls+Coimbatore" },
  { name: "Perur Patteeswarar Temple", image: spot8, description: "Perur Temple is an ancient temple dedicated to Lord Shiva, showcasing exquisite Dravidian architecture and a rich centuries-old spiritual heritage.", location: "https://www.google.com/maps?q=Perur+Temple+Coimbatore" },
  { name: "Velliangiri Hills", image: spot9, description: "Known as the “Kailash of the South,” the Velliangiri Hills are a major pilgrimage destination. They offer breathtaking trekking trails and a spiritual experience for seekers.", location: "https://www.google.com/maps?q=Velliangiri+Hills+Coimbatore" },
  { name: "VOC Park and Zoo", image: spot10, description: "VOC Park and Zoo, located in the heart of the city, is a family-friendly attraction featuring a mini zoo, beautiful gardens, and play areas for children.", location: "https://www.google.com/maps?q=VOC+Park+and+Zoo+Coimbatore" },
  { name: "Gedee Car Museum", image: spot11, description: "The Gedee Museum houses an impressive collection of vintage cars and mechanical innovations, making it a must-visit destination for automobile enthusiasts.", location: "https://www.google.com/maps?q=Gedee+Museum+Coimbatore" },
  { name: "Shri Ranganathaswamy Temple", image: spot12, description: "Ranganathaswamy Temple is a historic temple in Coimbatore, renowned for its intricate sculptures and rich spiritual heritage, attracting visitors from across South India.", location: "https://www.google.com/maps?q=Ranganathaswamy+Temple+Coimbatore" }
];

function PlacesToVisit() {
  return (
    <div style={{ minHeight: "100vh", padding: "40px 20px", background: "linear-gradient(to bottom, #e0f7fa, #f9f9f9)", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ color: "#00796b", fontSize: "2.8rem", textShadow: "1px 1px 4px rgba(0,0,0,0.1)", marginBottom: "50px", textAlign: "center" }}>
        ✨ Places to Visit in Coimbatore ✨
      </h2>

      {/* Container for rows */}
      {Array.from({ length: Math.ceil(spots.length / 3) }).map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "30px", flexWrap: "wrap" }}>
          {spots.slice(rowIndex * 3, rowIndex * 3 + 3).map((spot, index) => (
            <div key={index} style={{ flex: "0 0 30%", maxWidth: "30%" }}>
              <div style={{ backgroundColor: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 5px 15px rgba(0,0,0,0.1)", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"; }}
              >
                <img src={spot.image} alt={spot.name} style={{ width: "100%", height: "220px", objectFit: "cover", transition: "transform 0.5s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{ padding: "20px" }}>
                  <h5 style={{ color: "#00796b", fontWeight: "700", marginBottom: "10px" }}>{spot.name}</h5>
                  <p style={{ fontSize: "0.95rem", color: "#555", textAlign: "justify", marginBottom: "15px" }}>{spot.description}</p>
                  <a href={spot.location} target="_blank" rel="noopener noreferrer"
                     style={{ textDecoration: "none", backgroundColor: "#00796b", color: "#fff", padding: "8px 16px", borderRadius: "20px", fontWeight: "600" }}>
                    Location
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

export default PlacesToVisit;
