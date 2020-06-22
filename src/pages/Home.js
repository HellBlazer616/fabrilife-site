import React from 'react';
import styled from '@emotion/styled';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import colors from '../utils/colors';
import HomePageCarousel from '../components/HomePageCarouselComponent';
import BannerCarousel from '../components/BannerCarouselComponent';
import LandingPageCategoryComponent from '../components/LandingPageCategoryComponent';

const Home = () => {
  return (
    <Wrapper>
      <NavComponent />
      <BannerCarousel />
      <HomePageCarousel />

      <LandingPageCategoryComponent />
      <FooterComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${colors.background};
  color: ${colors.colorOne};
`;
// const CarouselWrapper = styled.section`
//   /* Change it */
//   min-height: 100vh;
//   width: 100%;
// `;

export default Home;
