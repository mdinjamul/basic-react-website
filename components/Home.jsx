import React, { useContext, useEffect } from "react";
import { AppContext } from "../src/context";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Services from "./Services";

const Home = () => {
  const { updateHomePage } = useContext(AppContext);

  // Call updateHomePage function from context
  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
