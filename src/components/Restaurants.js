import React from 'react';
import '../styles.css';

import anandhaas from '../assets/res/anand.png';
import annapoorna from '../assets/res/annapoorna.png';
import haribhavan from '../assets/res/hari.png';
import kovaikitchen from '../assets/res/kovaikitchen.png';
import urban from '../assets/res/urban.png';
import lemeridien from '../assets/res/le.png';
import arya from '../assets/res/arya.png';
import welcomcafe from '../assets/res/cafe.png';
import kailash from '../assets/res/kailash.png';

const restaurants = [
  {
    name: "Shree Anandhaas",
    image: anandhaas,
    description:
      "Popular vegetarian restaurant serving authentic South Indian and North Indian dishes with a clean, family-friendly ambiance.",
    address: "Avinashi Road, Coimbatore, Tamil Nadu 641004",
    mapLink:
      "https://www.google.com/maps/place/Shree+Anandhaas,+Avinashi+Rd,+Peelamedu,+Coimbatore,+Tamil+Nadu+641004"
  },
  {
    name: "Sree Annapoorna",
    image: annapoorna,
    description:
      "Iconic vegetarian chain offering delicious South Indian meals, snacks, and freshly brewed filter coffee.",
    address: "R.S. Puram, Coimbatore, Tamil Nadu 641002",
    mapLink:
      "https://www.google.com/maps/place/Sree+Annapoorna,+R.S.+Puram,+Coimbatore,+Tamil+Nadu+641002"
  },
  {
    name: "Hari Bhavan Restaurant",
    image: haribhavan,
    description:
      "Family-friendly restaurant offering both vegetarian and non-vegetarian South Indian cuisine at affordable prices.",
    address: "Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004",
    mapLink:
      "https://www.google.com/maps/place/Hari+Bhavan+Restaurant,+Avinashi+Rd,+Peelamedu,+Coimbatore,+Tamil+Nadu+641004"
  },
  {
    name: "Kovai Kitchen (Hilton)",
    image: kovaikitchen,
    description:
      "Upscale restaurant inside Hilton offering a lavish South Indian and continental buffet experience.",
    address: "Hilton Hotel, Avinashi Road, Coimbatore, Tamil Nadu 641014",
    mapLink:
      "https://www.google.com/maps/place/Kovai+Kitchen+-+Hilton+Coimbatore"
  },
  {
    name: "Urban Bar-B-Que",
    image: urban,
    description:
      "Trendy buffet restaurant offering grilled meats, seafood, and desserts with a vibrant atmosphere.",
    address: "Peelamedu, Coimbatore, Tamil Nadu 641004",
    mapLink:
      "https://www.google.com/maps/place/Urban+Bar-B-Que,+Peelamedu,+Coimbatore"
  },
  {
    name: "Le Meridien Coimbatore",
    image: lemeridien,
    description:
      "Luxury 5-star hotel with elegant fine dining options serving Indian and international cuisines.",
    address: "762, Avinashi Road, Neelambur, Coimbatore, Tamil Nadu 641062",
    mapLink:
      "https://www.google.com/maps/place/Le+Meridien+Coimbatore"
  },
  {
    name: "Nagarkovil Arya Bhavan",
    image: arya,
    description:
      "Well-known for authentic Tamil vegetarian meals, traditional breakfast items, and friendly service.",
    address: "Cross Cut Road, Gandhipuram, Coimbatore, Tamil Nadu 641012",
    mapLink:
      "https://www.google.com/maps/place/Nagarkovil+Arya+Bhavan,+Cross+Cut+Rd,+Gandhipuram,+Coimbatore,+Tamil+Nadu"
  },
  {
    name: "WelcomCafe Kovai (ITC)",
    image: welcomcafe,
    description:
      "Elegant all-day dining restaurant at Welcomhotel by ITC serving traditional South Indian and continental dishes.",
    address: "Welcomhotel, West Club Road, Race Course, Coimbatore, Tamil Nadu 641018",
    mapLink:
      "https://www.google.com/maps/place/WelcomCafe+Kovai+-+ITC+Hotel,+Race+Course,+Coimbatore"
  },
  {
    name: "Kailash Parbat",
    image: kailash,
    description:
      "North Indian vegetarian restaurant known for its chaats, thalis, and Mumbai-style street food.",
    address: "Brookefields Mall, Coimbatore, Tamil Nadu 641001",
    mapLink:
      "https://www.google.com/maps/place/Kailash+Parbat,+Brookefields+Mall,+Coimbatore"
  }
];

function Restaurants() {
  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#d32f2f" }}>
        🍽️ Top Restaurants in Coimbatore 🍽️
      </h2>

      <div className="row">
        {restaurants.map((res, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card shadow-lg border-0 rounded-4"
              style={{ backgroundColor: "#fff" }}
            >
              <img
                src={res.image}
                className="card-img-top rounded-top-4"
                alt={res.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">
                  {res.name}
                </h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  {res.description}
                </p>
                <p className="card-text">
                  <strong>Address:</strong> {res.address}
                </p>
                <a
                  href={res.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger mt-2"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
