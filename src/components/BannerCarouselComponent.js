import React from 'react';
import Carousel from 'react-multi-carousel';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const BannerCarousel = () => {
  return (
    <Section>
      <Carousel
        responsive={responsive}
        // ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={2000}
        keyBoardControl
        customTransition="all .5 ease"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        autoPlay
        infinite
      >
        <div className="pic pic--1">
          <article style={{ margin: 'auto' }}>
            <h1
              style={{
                textAlign: 'center',
                color: colors.contrast,
                margin: 'auto',
                fontSize: 25,
              }}
            >
              5% off on order more than $100
            </h1>
            {/* <Button size="large">Some Text</Button> */}
          </article>
        </div>
        <div className="pic pic--2">
          <article style={{ margin: 'auto' }}>
            <h1
              style={{
                textAlign: 'center',
                color: colors.contrast,
                margin: 'auto',
                fontSize: 25,
              }}
            >
              Sale
            </h1>
            {/* <Button size="large">Some Text</Button> */}
          </article>
        </div>
        <div className="pic pic--3">
          <article style={{ margin: 'auto' }}>
            <h1
              style={{
                textAlign: 'center',
                color: colors.contrast,
                margin: 'auto',
                fontSize: 25,
              }}
            >
              Some Other Text
            </h1>
            {/* <Button size="large">Some Text</Button> */}
          </article>
        </div>
      </Carousel>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 70px;
  position: relative;

  & .pic {
    width: 100%;
    min-height: 7vh;
    display: flex;
    align-items: center;
    background-color: #f1f1f1;
    background-size: cover;
    overflow: hidden;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
`;

export default BannerCarousel;
