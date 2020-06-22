import React from 'react';
import styled from '@emotion/styled';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import colors from '../utils/colors';
import HomePageCarousel from '../components/HomePageCarouselComponent';
import BannerCarousel from '../components/BannerCarouselComponent';

const Home = () => {
  return (
    <Wrapper>
      <NavComponent />
      <BannerCarousel />
      <HomePageCarousel />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        officia, sunt asperiores voluptate illo voluptatum, itaque natus
        mollitia, ipsum blanditiis odit? Magni, laboriosam. Id voluptatum
        quisquam delectus modi, impedit praesentium!{' '}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        officia, sunt asperiores voluptate illo voluptatum, itaque natus
        mollitia, ipsum blanditiis odit? Magni, laboriosam. Id voluptatum
        quisquam delectus modi, impedit praesentium!{' '}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        officia, sunt asperiores voluptate illo voluptatum, itaque natus
        mollitia, ipsum blanditiis odit? Magni, laboriosam. Id voluptatum
        quisquam delectus modi, impedit praesentium!{' '}
      </p>
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
