import React from "react";
import {
  HeaderContainer,
  Service,
  
  
  HomeContactContainer,
  FooterContainer,
} from "../containers";
import { Listings, Nosotros } from "../pages";

const Home = () => {
  

  return (
    <>
      <HeaderContainer bg="true" source="/images/banners/banner4.jpg" />
      <Service />
      <Listings />
    
      <HomeContactContainer />
      <Nosotros />
      <FooterContainer />
    </>
  );
};

export default Home;
