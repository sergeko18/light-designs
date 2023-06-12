import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Subcategory from "./Pages/Subcategory";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ItemsPage from "./Pages/ItemsPage";
import AppCategory from "./Pages/Subcategory/AppCategory";

export type ActiveCategoryType = {
  id: string;
  name: string;
  subcategories: [{ id: string; name: string; imageURL: string }];
};

function App() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [ActiveCategory, setActiveCategory] =
    React.useState<ActiveCategoryType>({
      id: "0",
      name: "Loading",
      subcategories: [{ id: "Loading", name: "Loading", imageURL: "Loading" }],
    });

  // React.useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="App">
      <Header windowWidth={windowWidth} />
      <Routes>
        <Route path="/" element={<Home windowWidth={windowWidth} />} />
        <Route
          path="/categories/:id"
          element={
            <Categories
              ActiveCategory={ActiveCategory}
              setActiveCategory={setActiveCategory}
            />
          }
        />
        <Route path="/subcategory/:id" element={<Subcategory />} />
        <Route path="/appcategory/:id" element={<AppCategory />} />
        <Route path="/itemspage/:id" element={<ItemsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
