import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import TouristSpots from "./components/TouristSpots";
import Hotels from "./components/Hotels";
import Restaurants from "./components/Restaurants";
import Shopping from "./components/Shopping";
import Transportation from "./components/Transportation";
import Hospitals from "./components/Hospitals";

function App() {
  return (
    <Router>
      <Header />
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