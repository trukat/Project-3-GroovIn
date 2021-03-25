import React from "react";
import '../App.css';
import HeadSection from '../components/HeadSection';
import Footer from '../components/Footer';
import Cards from '../components/Cards';


const Home = (props) => {
  return (
    <>
      <HeadSection />
      <Cards />
      <Footer />

    </>
  );
};

export default Home;
