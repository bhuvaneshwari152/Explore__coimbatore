import React from 'react';
import '../styles.css';

import kovai from '../assets/hospital/kovai.png';
import gg from '../assets/hospital/gem.png';
import gknm from '../assets/hospital/gknm.png';
import kg from '../assets/hospital/kg.png';
import kongu from '../assets/hospital/kongu.png';
import ng from '../assets/hospital/ng.png';
import psg from '../assets/hospital/psg.png';
import sriram from '../assets/hospital/sriram.png';
import ganga from '../assets/hospital/ganga.png';

const hospitals = [
  {
    name: "Kovai Medical Center and Hospital",
    image: kovai,
    description: "Kovai Medical Center and Hospital is a leading multi-specialty hospital in Coimbatore. It offers advanced treatments in cardiology, neurology, orthopedics, and emergency care with experienced doctors and modern infrastructure.",
    specialties: "Cardiology, Neurology, Orthopedics, Emergency Care, Oncology",
    address: "Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014",
    mapLink: "https://www.google.com/maps/place/Kovai+Medical+Center+and+Hospital/"
  },
  {
    name: "Ganga Hospital",
    image: ganga,
    description: "Ganga Hospital is a renowned tertiary care hospital in Coimbatore, specializing in orthopedics, trauma, and critical care. It is recognized for advanced treatment protocols, skilled surgeons, and state-of-the-art facilities.",
    specialties: "Orthopedics, Trauma Care, Critical Care, Plastic Surgery, Spine Surgery",
    address: "No. 313, 3rd Street, Peedampadu, Coimbatore, Tamil Nadu 641006",
    mapLink: "https://www.google.com/maps/place/Ganga+Hospital/"
  },
  {
    name: "GEM Hospital",
    image: gg,
    description: "GEM Hospital is a leading healthcare provider specializing in laparoscopic and robotic surgeries. It offers advanced treatments in various specialties, ensuring high-quality care for patients.",
    specialties: "Laparoscopic Surgery, Robotic Surgery, General Surgery",
    address: "45, Pankaja Mills Rd, Ramanathapuram, Coimbatore, Tamil Nadu 641045",
    mapLink: "https://www.google.com/maps/place/GEM+Hospital+Coimbatore/"
  },
  {
    name: "G. Kuppuswamy Naidu Memorial Hospital",
    image: gknm,
    description: "GKNM Hospital is a reputed multi-specialty healthcare provider offering quality care in cardiology, nephrology, gastroenterology, and pediatrics. The hospital emphasizes patient safety, advanced diagnostics, and modern treatment protocols.",
    specialties: "Cardiology, Nephrology, Gastroenterology, Pediatrics",
    address: "No. 47, GKNM Road, Coimbatore, Tamil Nadu 641018",
    mapLink: "https://www.google.com/maps/place/G.Kuppuswamy+Naidu+Memorial+Hospital/"
  },
  {
    name: "KG Hospital",
    image: kg,
    description: "KG Hospital provides high-quality healthcare services with specialties in urology, orthopedic surgery, and critical care.",
    specialties: "Urology, Orthopedic Surgery, Critical Care",
    address: "Mettupalayam Road, Coimbatore, Tamil Nadu 641014",
    mapLink: "https://www.google.com/maps/place/KG+Hospital/"
  },
  {
    name: "Kongunad Hospital",
    image: kongu,
    description: "Kongunad Hospital provides comprehensive care in internal medicine, obstetrics, gynecology, and dermatology, with modern facilities and experienced staff ensuring high-quality patient care.",
    specialties: "Internal Medicine, Obstetrics & Gynecology, Dermatology",
    address: "Sivanandha Puram, Saravanampatti, Coimbatore, Tamil Nadu 641035",
    mapLink: "https://www.google.com/maps/place/Kongunad+Hospital/"
  },
  {
    name: "NG Hospital",
    image: ng,
    description: "NG Hospital provides excellent medical services with a focus on neurology, cardiology, and orthopedics. They maintain a patient-centric approach and modern facilities for precise diagnosis and treatment.",
    specialties: "Neurology, Cardiology, Orthopedics",
    address: "Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004",
    mapLink: "https://www.google.com/maps/place/NG+Hospital+&+Research+Centre/"
  },
  {
    name: "PSG Hospitals",
    image: psg,
    description: "PSG Hospitals is a renowned institution offering multi-specialty care including surgery, oncology, pediatrics, and critical care. It is known for its skilled medical team, advanced technology, and patient-first approach.",
    specialties: "Surgery, Oncology, Pediatrics, Critical Care",
    address: "Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004",
    mapLink: "https://www.google.com/maps/place/PSG+Hospitals+Coimbatore/"
  },
  {
    name: "Sri Ramakrishna Hospital",
    image: sriram,
    description: "Sri Ramakrishna Hospital provides modern medical care in cardiology, gastroenterology, and general medicine. They focus on efficient patient care and cutting-edge treatments with professional staff.",
    specialties: "Cardiology, Gastroenterology, General Medicine",
    address: "Avinashi Road, Coimbatore, Tamil Nadu 641014",
    mapLink: "https://www.google.com/maps/place/Sri+Ramakrishna+Hospital+Coimbatore/"
  }
];

function Hospitals() {
  return (
    <div className="spots-page" style={{ backgroundColor: "#f9f9f9", minHeight: "100vh", padding: "30px" }}>
      <h2 className="page-title text-center mb-4 fw-bold" style={{ color: "#d32f2f" }}>
        🏥 Hospitals in Coimbatore 🏥
      </h2>

      <div className="row">
        {hospitals.map((hospital, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-lg border-0 rounded-4" style={{ backgroundColor: "white" }}>
              <img
                src={hospital.image}
                className="card-img-top rounded-top-4"
                alt={hospital.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">{hospital.name}</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  {hospital.description}
                </p>
                <p className="card-text"><strong>Specialties:</strong> {hospital.specialties}</p>
                <p className="card-text"><strong>Address:</strong> {hospital.address}</p>
                <a
                  href={hospital.mapLink}
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

export default Hospitals;
