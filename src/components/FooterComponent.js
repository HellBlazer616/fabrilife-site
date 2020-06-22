import React from 'react';
import { Layout } from 'antd';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

const FooterComponent = () => {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        textAlign: 'center',

        width: '100%',
      }}
    >
      <Links>
        <StyledLink to="#">How to Order</StyledLink>
        <StyledLink to="#">About Us</StyledLink>
        <StyledLink to="#">FAQ</StyledLink>
        <StyledLink to="#">Career</StyledLink>
        <StyledLink to="#">Contact Us</StyledLink>
        <StyledLink to="#">Our Policy</StyledLink>
      </Links>
      <p>Design ©2020 Created by HellBlazer616</p>
    </Footer>
  );
};

const Links = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 1rem;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  color: #2f2f2f;
  margin: 10px;
`;

export default FooterComponent;
