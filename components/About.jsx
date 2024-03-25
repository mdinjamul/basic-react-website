import React, { useContext, useEffect } from "react";
import { AppContext } from "../src/context";
import HeroSection from "./HeroSection";

const About = () => {
  const { updateAboutPage } = useContext(AppContext);

  // Call updateAboutPage function from context
  useEffect(() => updateAboutPage(), []);

  return <HeroSection />;
};

export default About;
