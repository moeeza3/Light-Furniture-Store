import React from 'react'
import Banner from '../components/Banner'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NewArrival from '../components/NewArrival'


const Home = () => {
  return (
    <div className="home">
       {/* <Hero/>  */}
      
      {/* <NewArrival/>
      <Footer/> */}
      {/* <NewArrival/> */}
      {/* <Footer/> */}
      <Hero/>
      <NewArrival/>
      <Banner/>
      <Footer/>
      {/* <Contact/> */}
    </div>
  )
}

export default Home