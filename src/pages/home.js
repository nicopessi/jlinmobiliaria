import React from "react";
import {
  HeaderContainer,
  FeaturedListingContainer,
  FeaturedAgentsContainer,
  HomeContactContainer,
  FooterContainer,
  Service,
} from "../containers";

const Home = () => {
  return (
    <>
      <HeaderContainer bg="true" source="/images/banners/banner4.jpg" />
      <Service />
      <FeaturedListingContainer />
      <FeaturedAgentsContainer />
      <HomeContactContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
