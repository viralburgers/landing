import React from "react";

// Components
import { HeroSlider } from "../components/HeroSlider";
import Header from "../components/Header";
import MenuPresentation from "../sections/MenuPresentation";

// Sections
import { Promos } from "../sections/Promos";
import PlaceYourOrder from "../sections/PlaceYourOrder";

// Services
import { getBurgers } from "@/services/burgers";

export default async function Page() {
  const Burgers = await getBurgers();

  return (
    <main>
      <Header />
      <HeroSlider data={Burgers} />
      <Promos />
      <MenuPresentation />
      <PlaceYourOrder />
    </main>
  );
}
