import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";

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
