import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from '@emotion/styled';

import img from '../utils/assets/background.jpg';
import img2 from '../utils/assets/background2.jpg';
import img3 from '../utils/assets/background3.jpg';
import man from '../utils/assets/man.jpg';
import woman from '../utils/assets/woman.jpg';
import kid from '../utils/assets/kid.jpg';
import colors from '../utils/colors';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,

    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const LandingPageCategoryComponent = () => {
  return (
    <Section>
      <h1 style={{ margin: '2rem', textAlign: 'center' }}>
        Trendy Tees that you just can't miss !
      </h1>

      <Carousel
        swipeable
        draggable
        responsive={responsive}
        // ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={5000}
        keyBoardControl
        customTransition="transform 1s cubic-bezier(0.025, 0.45, 0.45, 0.95)"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        autoPlay
        infinite
      >
        <div className="container">
          <div className="image__container">
            <img className="pic pic--1" src={kid} alt="" />
          </div>
          <h1
            style={{
              // textAlign: 'center',
              color: colors.contrast,
              // margin: '0 auto',
              fontSize: 25,
            }}
          >
            MUSIC
          </h1>
          {/* <Button size="large">Some Text</Button> */}
        </div>
        <div className="container">
          <div className="image__container">
            <img className="pic pic--2" src={man} alt="" />
          </div>
          <h1
            style={{
              // textAlign: 'center',
              color: colors.contrast,
              // margin: '0 auto',
              fontSize: 25,
            }}
          >
            GAMING
          </h1>
        </div>
        <div className="container">
          <div className="image__container">
            <img className="pic pic--3" src={woman} alt="" />
          </div>
          <h1
            style={{
              // textAlign: 'center',
              color: colors.contrast,
              // margin: '0 auto',
              fontSize: 25,
            }}
          >
            FOOTBALL
          </h1>
        </div>
        <div className="container">
          <div className="image__container">
            <img className="pic pic--1" src={man} alt="" />
          </div>
          <h1
            style={{
              // textAlign: 'center',
              color: colors.contrast,
              // margin: '0 auto',
              fontSize: 25,
            }}
          >
            SCIENCE
          </h1>
          {/* <Button size="large">Some Text</Button> */}
        </div>
        <div className="container">
          <div className="image__container">
            <img className="pic pic--2" src={kid} alt="" />
          </div>
          <h1
            style={{
              // textAlign: 'center',
              color: colors.contrast,
              // margin: '0 auto',
              fontSize: 25,
            }}
          >
            SUPERHERO
          </h1>
        </div>
        <div className="container">
          <div className="image__container">
            <img className="pic pic--3" src={woman} alt="" />
          </div>
          <h1
            style={{
              // textAlign: 'center',
              color: colors.contrast,
              // margin: '0 auto',
              fontSize: 25,
            }}
          >
            TV SHOW
          </h1>
        </div>
      </Carousel>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 10rem;
  z-index: -1;
  cursor: pointer;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    & .image__container {
      overflow: hidden;
      width: 90%;
      :hover {
        cursor: pointer;
        opacity: 0.9;

        & .pic {
          transform: scale(1.1);
          transition: transform 6s cubic-bezier(0.025, 0.45, 0.45, 0.95);
        }
      }
    }
  }
  & .pic {
    width: 100%;
    margin: auto;
    min-height: 70vh;
    display: flex;
    align-items: center;
    background-color: rgb(247, 247, 247);
    background-size: cover;
    overflow: hidden;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
`;

export default LandingPageCategoryComponent;
