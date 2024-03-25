import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Services from "../components/Services";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../components/Error";
import GoToTop from "../components/GoToTop";
import { GlobalStyle } from "../components/styled/GlobalStyle";

export const App = () => {
  const theme = {
    colors: {
      heading: "#444444",
      text: "#444444",
      white: "#ffffff",
      black: "#2125529",
      helper: "#8490ff",
      bg: "#f8f8f8",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252)100%)",
      shadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <GoToTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
