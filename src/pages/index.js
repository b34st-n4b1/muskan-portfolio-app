import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import { aboutData } from "../components/InfoSection/Data";
import { contactData } from "../components/Contact/contactData";
import ImageGallery from "../components/ImageGallery";
import Songs from "../components/Songs";
import ContactMe from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...aboutData} />
      <Songs />
      <ImageGallery />
      <ContactMe {...contactData} />
      <Footer />
    </>
  );
}

export default Home;
