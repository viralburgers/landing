import React from "react";

// Components
import { HeroSlider } from "../components/HeroSlider";

// Sections
import { Promos } from "../sections/Promos";
import PlaceYourOrder from "../sections/PlaceYourOrder";
import Header from "../components/Header";
import MenuPresentation from "../sections/MenuPresentation";

const Home = () => {
  return (
    <main>
      <Header />
      <HeroSlider />
      <Promos />
      <MenuPresentation />
      <PlaceYourOrder />
    </main>
  );
};

export default Home;
