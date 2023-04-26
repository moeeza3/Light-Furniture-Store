import React, { useEffect } from "react";
import data from "./api/data";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/slices/apiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingelProduct from "./components/SingelProduct";
import { Globalstyle } from "./Globalstyle";
// import 'bootstrap/dist/css/bootstrap.min.css';
const theme = {
  colors: {
    firstcolor: "#1A1A1A",
    secondcolor: "#4D4D4D",
    thirdcolor: "#ced4da",
    fourthcolor: "#FFFFFF",
  },
  fontSize: {
    h1: "36px",
    h2: "30px",
    h3: "24px",
    h4: "18px",
    h5: "14px",
    h6: "12px",
  },
  fontdisplay: {
    display1: "96px",
    display2: "88px",
    display3: "72px",
    display4: "56px",
    displaywt: "300",
  },
  media: {
    desktop: "1200px",
    tab: "992px",
    mobile: "768px",
    small: "576px",
    vsmall: "480px",
  },
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(data));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Globalstyle />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home/:id" element={<SingelProduct />} />
            <Route path="/shop/:name" element={<SingelProduct />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
