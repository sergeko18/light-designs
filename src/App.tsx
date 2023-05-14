import React from "react";
import "./App.css";
import Header from "./Components/Header";
import CarouselBox from "./Components/HomeC/CarouselBox";
import CardsBoxAbout from "./Components/HomeC/CardsBoxAbout";
import CardBoxLights from "./Components/HomeC/CardsBoxLights";
import Footer from "./Components/Footer";
import Divider from "./Components/HomeC/Divider";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselBox />
      <CardsBoxAbout />
      <Divider />
      <CardBoxLights />
      <Footer />
    </div>
  );
}

export default App;
