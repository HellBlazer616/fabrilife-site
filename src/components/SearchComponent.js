/* eslint-disable react/prop-types */
import React from 'react';
import { Drawer, Input } from 'antd';
import styled from '@emotion/styled';

const { Search } = Input;

const SearchComponent = ({
  openSearchDrawer,
  isSearchDrawerVisible,
  setIsSearchDrawerVisible,
}) => {
  const onSearch = (e) => {
    console.log(e);
    setIsSearchDrawerVisible(!isSearchDrawerVisible);
  };

  return (
    <Drawer
      placement="top"
      closable={false}
      onClose={openSearchDrawer}
      visible={isSearchDrawerVisible}
      key="searchDrawer"
      height={100}
      style={{ background: 'transparent' }}
    >
      <SearchWrapper>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </SearchWrapper>
    </Drawer>
  );
};

const SearchWrapper = styled.div`
  width: 80%;
  margin: auto;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export default SearchComponent;
