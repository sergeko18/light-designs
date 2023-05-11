import React from "react";
import "./App.css";
import Header from "./Components/Header";
import CarouselBox from "./Components/CaruselBox";
import CardsBoxAbout from "./Components/CardsBoxAbout";
import CardBoxLights from "./Components/CardsBoxLights";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselBox />
      <CardsBoxAbout />
      <CardBoxLights />
      <Footer />
    </div>
  );
}

export default App;
