import React from "react";
import "./App.css";
import Header from "./Components/Header";
import CarouselBox from "./Components/HomeC/CarouselBox";
import CardsBoxAbout from "./Components/HomeC/CardsBoxAbout";
import CardBoxLights from "./Components/HomeC/CardsBoxLights";
import Footer from "./Components/Footer";
import Divider from "./Components/HomeC/Divider";

function App() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="App">
      <Header windowWidth={windowWidth} />
      <CarouselBox windowWidth={windowWidth} />
      <CardsBoxAbout />
      <Divider />
      <CardBoxLights />
      <Footer />
    </div>
  );
}

export default App;
