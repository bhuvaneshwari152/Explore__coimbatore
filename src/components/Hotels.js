import React from "react";
import "../styles.css";

import hotel1 from "../assets/hotel/welcome.png";
import hotel2 from "../assets/hotel/radisson.png";
import hotel3 from "../assets/hotel/lemer.png";
import hotel4 from "../assets/hotel/viva.png";
import hotel5 from "../assets/hotel/fair.png";
import hotel16 from "../assets/hotel/Hilton.png";
import hotel6 from "../assets/hotel/residency.png";
import hotel7 from "../assets/hotel/lemon.png";
import hotel8 from "../assets/hotel/Ibis.png";
import hotel9 from "../assets/hotel/cag.png";
import hotel10 from "../assets/hotel/Zone.png";
import hotel19 from "../assets/hotel/green.png";
import hotel11 from "../assets/hotel/Treebo.png";
import hotel12 from "../assets/hotel/jansi.png";
import hotel13 from "../assets/hotel/vintage.png";
import hotel14 from "../assets/hotel/spr.png";
import hotel15 from "../assets/hotel/thangam.png";
import hotel18 from "../assets/hotel/comfort.png";

const hotelCategories = [
  {
    category: "Luxury and Premium Hotels",
    hotels: [
      {
        name: "Welcomhotel By ITC Hotels",
        image: hotel1,
        description:
          "Elegant rooms with city views and premium amenities. Offers fine dining and spa facilities.",
        address: "1266/14, West Club Road, Race Course, Gopalapuram, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Welcomhotel+by+ITC+Hotels+Coimbatore",
        priceRange: "₹8,000 - ₹12,000 per night",
        amenities: ["Wi-Fi", "Spa", "Swimming Pool", "Gym", "Restaurant"],
      },
      {
        name: "Radisson Blu",
        image: hotel2,
        description:
          "5-star hotel offering modern rooms, fine dining, and spa services for business and leisure guests.",
        address: "164/165, Avinashi Road,Peelamedu, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Radisson+Blu+Coimbatore",
        priceRange: "₹10,000 - ₹12,000 per night ",
        amenities: ["Wi-Fi", "Spa", "Swimming Pool", "Restaurant", "Bar"],
      },
      {
        name: "Le Méridien",
        image: hotel3,
        description:
          "Upscale rooms with modern interiors and excellent dining options. Includes spa and pool access.",
        address: "762 Avinashi Road, Neelambur Village, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Le+Meridien+Coimbatore",
        priceRange: "₹8,500 - ₹10,000 per night",
        amenities: ["Wi-Fi", "Gym", "Restaurant", "Swimming Pool"],
      },
      {
        name: "Vivanta",
        image: hotel4,
        description:
          "Luxury hotel with stylish rooms and multi-cuisine restaurants. Perfect for elegant stays.",
        address: "105, Race Course Road, Gopalapuram, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Vivanta+Coimbatore",
        priceRange: "₹8,500 - ₹13,000 per night",
        amenities: ["Wi-Fi", "Gym", "Restaurant", "Banquet Hall", "Pool"],
      },
      {
        name: "Fairfield by Marriott",
        image: hotel5,
        description:
          "Elegant hotel with modern amenities and premium service in the city’s central location.",
        address: "81, Avinashi Road, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Fairfield+by+Marriott+Coimbatore",
        priceRange: "₹7,500 - ₹11,000 per night",
        amenities: ["Wi-Fi", "Gym", "Restaurant", "Swimming Pool"],
      },
      {
        name: "Hilton West Global",
        image: hotel16,
        description:
          "5-star hotel with luxurious rooms and world-class dining experiences. Perfect for luxury travelers.",
        address: "No. 22, South Street, Avarampalayam, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Hilton+Coimbatore",
        priceRange: "₹8,000 - ₹10,000 per night",
        amenities: ["Wi-Fi", "Gym", "Spa", "Restaurant", "Swimming Pool", "Bar"],
      },
    ],
  },
  {
    category: "Mid-Range Hotels",
    hotels: [
      {
        name: "The Residency Towers",
        image: hotel6,
        description:
          "Comfortable rooms with excellent dining and modern services. Ideal for business or leisure trips.",
        address: "1076 Avinashi Road, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=The+Residency+Towers+Coimbatore",
        priceRange: "₹4,000 - ₹6,000 per night",
        amenities: ["Wi-Fi", "Restaurant", "Room Service"],
      },
      {
        name: "Lemon Tree Hotel",
        image: hotel7,
        description:
          "Affordable hotel offering neat rooms, fresh interiors, and warm hospitality for travelers.",
        address: "173/3 & 174/4, Sri Rangulu Naidu Farms, Kalapatti, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Lemon+Tree+Hotel+Coimbatore",
        priceRange: "₹3,000 - ₹4,500 per night",
        amenities: ["Wi-Fi", "Restaurant", "Room Service"],
      },
      {
        name: "Ibis Coimbatore City Centre",
        image: hotel8,
        description:
          "Well-maintained hotel in the city center with essential facilities and great connectivity.",
        address: "1084 2 Puliyakulam Road, Lakshmi Mills Circle, Krishnarayapuram, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Ibis+Coimbatore+City+Centre",
        priceRange: "₹3,500 - ₹4,500 per night",
        amenities: ["Wi-Fi", "Restaurant", "Room Service"],
      },
      {
        name: "Hotel Green Park",
        image: hotel19,
        description:
          "Modern mid-range hotel offering comfortable rooms, free Wi-Fi, and a convenient location.",
        address: "Pollachi Main Road, Othakalmandapam, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Hotel+Green+Park+Coimbatore",
        priceRange: "₹2,500 - ₹4,000 per night",
        amenities: ["Free Wi-Fi", "Room Service", "Restaurant", "Air Conditioning"],
      },
      {
        name: "Hotel CAG Pride",
        image: hotel9,
        description:
          "Mid-range hotel offering clean rooms and courteous service. Great value for families and groups.",
        address: "312, Bharathiyar Road,New Siddhapudur, Gandhipuram, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Hotel+CAG+Pride+Coimbatore",
        priceRange: "₹3,000 - ₹4,500 per night",
        amenities: ["Wi-Fi", "Room Service", "Restaurant"],
      },
      {
        name: "Zone by The Park",
        image: hotel10,
        description:
          "Trendy hotel designed for modern travelers. Includes vibrant interiors and a business-friendly environment.",
        address: "33/3, Lakshmi Mills Jn, Avinashi Road, Puliakulam, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Zone+by+The+Park+Coimbatore",
        priceRange: "₹3,500 - ₹4,500 per night",
        amenities: ["Wi-Fi", "Restaurant", "Gym"],
      },
    ],
  },
  {
    category: "Budget and Value Hotels",
    hotels: [
      {
        name: "Treebo Skyry Residency Tidel Park",
        image: hotel11,
        description:
          "Economical stay offering essential facilities and clean rooms. Best suited for short trips.",
        address: "Tidel Park, Peelamedu, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Treebo+Skyry+Residency+Coimbatore",
        priceRange: "₹1,200 - ₹2,500 per night",
        amenities: ["Wi-Fi", "Room Service", "Air Conditioning"],
      },
      {
        name: "FabHotel Jansi Deluxe",
        image: hotel12,
        description:
          "Budget-friendly hotel in Gandhipuram with clean rooms and all essential amenities for comfort.",
        address:
          "201, 5th Street, Cross Cut Road, Gandhipuram, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=FabHotel+Jansi+Deluxe+Coimbatore",
        priceRange: "₹2,000 - ₹3,500 per night",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Daily Housekeeping"],
      },
      {
        name: "Hotel Vintage Classic",
        image: hotel13,
        description:
          "Affordable rooms for short stays with basic amenities. Clean and convenient for all travelers.",
        address: "299-A, 2nd Street, Gandhipuram, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Hotel+Vintage+Classic+Coimbatore",
        priceRange: "₹1,000 - ₹2,000 per night",
        amenities: ["Wi-Fi", "Room Service"],
      },
      {
        name: "Hotel SPR Inn",
        image: hotel14,
        description:
          "Basic yet comfortable stay offering clean rooms at reasonable prices in prime location.",
        address: "42, Narayanaguru Mission Road, Saibaba Colony, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Hotel+SPR+Inn+Coimbatore",
        priceRange: "₹800 - ₹1,500 per night",
        amenities: ["Wi-Fi", "Room Service"],
      },
      {
        name: "SPOT ON Thangam Lodge",
        image: hotel15,
        description:
          "Simple lodge with neat rooms and essential facilities. Perfect for short economical stays.",
        address: "Sathy Road, 100 Feet Road Junction, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Thangam+Lodge+Coimbatore",
        priceRange: "₹600 - ₹1,200 per night",
        amenities: ["Wi-Fi"],
      },
      {
        name: "Comfort Inn",
        image: hotel18,
        description:
          "Affordable hotel with clean rooms and helpful staff. Great choice for solo or family travelers.",
        address: "Nanjappa Road, Coimbatore, Tamil Nadu",
        mapLink: "https://www.google.com/maps?q=Comfort+Inn+Coimbatore",
        priceRange: "₹1,000 - ₹1,800 per night",
        amenities: ["Wi-Fi", "Room Service"],
      },
    ],
  },
];

function Hotels() {
  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#d32f2f" }}>
        🏨 Hotels in Coimbatore 🏨
      </h2>

      {hotelCategories.map((category, catIndex) => (
        <div key={catIndex} className="mb-5">
          <h4
            className="fw-bold text-center mb-3"
            style={{ fontSize: "1.6rem", color: "#1976d2" }}
          >
            {category.category}
          </h4>
          <div className="row justify-content-center g-4">
            {category.hotels.map((hotel, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow-lg border-0 rounded-4 h-100">
                  <img
                    src={hotel.image}
                    className="card-img-top rounded-top-4"
                    alt={hotel.name}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">
                      {hotel.name}
                    </h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      {hotel.description}
                    </p>
                    <p className="mb-1">
                      <strong>Address:</strong> {hotel.address}
                    </p>
                    <p className="mb-1">
                      <strong>Price Range:</strong> {hotel.priceRange}
                    </p>
                    <p className="mb-1">
                      <strong>Amenities:</strong> {hotel.amenities.join(", ")}
                    </p>
                    <a
                      href={hotel.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm mt-2"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hotels;
