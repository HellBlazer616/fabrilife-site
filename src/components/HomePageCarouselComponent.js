import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from '@emotion/styled';
import { Button } from 'antd';
import img from '../utils/assets/background.jpg';
import img2 from '../utils/assets/background2.jpg';
import img3 from '../utils/assets/background3.jpg';
import colors from '../utils/colors';

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

const HomePageCarousel = () => {
  return (
    <Section>
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        // ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={5000}
        keyBoardControl
        customTransition="transform 1s cubic-bezier(0.025, 0.45, 0.45, 0.95)"
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium amet ab fugit et maxime ullam reiciendis enim
            </h1>
            {/* <Button size="large">Some Text</Button> */}
          </article>
        </div>
        <div className="pic pic--2" />
        <div className="pic pic--3" />
      </Carousel>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 10px;
  z-index: -1;
  cursor: pointer;
  & .pic {
    width: 100%;
    margin: auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: rgb(247, 247, 247);
    background-size: cover;
    overflow: hidden;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
  & .pic--1 {
    background-image: url(${img});
  }
  & .pic--2 {
    background-image: url(${img2});
  }
  & .pic--3 {
    background-image: url(${img3});
  }
`;

export default HomePageCarousel;
