import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import TopResturant from "./components/TopResturant";
import OnlineDelivery from "./components/OnlineDelivery";
import PlaceToEatAcrossCities from "./components/PlaceToEatAcrossCities";
import CuisineNearMe from "./components/CuisineNearMe";
import ExploreEveryRes from "./components/ExploreEveryRes";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/Theme";

function App() {

  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const element = document.documentElement;

  useEffect(() => {
    if (themeMode === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className=" dark:bg-[#212121] dark:text-white">
          <Header />
          <Category />
          <TopResturant />
          <OnlineDelivery />
          <PlaceToEatAcrossCities />
          <CuisineNearMe />
          <ExploreEveryRes />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
