import React from "react";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <NewArrival />
      <Banner />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
