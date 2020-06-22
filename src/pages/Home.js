import React from 'react';
import styled from '@emotion/styled';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import colors from '../utils/colors';

const Home = () => {
  return (
    <Wrapper>
      <NavComponent />

      <FooterComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 200vh;
  background: ${colors.background};
  color: ${colors.colorOne};
`;

export default Home;
