import React, { useState } from 'react';
import { Menu, Button, Tooltip, Badge, Avatar, Drawer } from 'antd';
import {
  AppstoreOutlined,
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  DownOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import SearchComponent from './SearchComponent';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';

const { SubMenu } = Menu;

const NavComponent = () => {
  const [currentMenu, setCurrentMenu] = useState('brand');
  const [isSearchDrawerVisible, setIsSearchDrawerVisible] = useState(false);
  const { width: windowWidth } = useWindowDimensions();

  const handleMenuClick = (e) => {
    setCurrentMenu(e.key);
  };

  const showCart = (e) => {
    console.log(e);
  };

  const openSearchDrawer = () => {
    setIsSearchDrawerVisible(!isSearchDrawerVisible);
  };

  return (
    <header>
      <StyledMenu
        onClick={handleMenuClick}
        mode="horizontal"
        selectedKeys={[currentMenu]}
        overflowedIndicator={
          <DownOutlined style={{ fontSize: 18, margin: 'auto' }} />
        }
      >
        <Menu.Item key="brand" icon={<AppstoreOutlined />}>
          Brand Icon
        </Menu.Item>
        <SubMenu
          key="user"
          title=""
          style={{ float: 'right' }}
          icon={
            <Button
              icon={<UserOutlined style={{ margin: 0 }} />}
              shape="circle"
            />
          }
        >
          <Menu.Item key="login" title="Login">
            Login
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          className="search__button"
          key="search"
          title="Search"
          onClick={openSearchDrawer}
          onKeyDown={openSearchDrawer}
        >
          <Button
            shape={windowWidth > 320 ? 'circle' : null}
            block={windowWidth <= 332}
            icon={<SearchOutlined style={{ margin: 0 }} />}
            onClick={openSearchDrawer}
          >
            {windowWidth < 320 ? 'Search' : null}
          </Button>
        </Menu.Item>
        <Menu.Item key="mail" icon={<AppstoreOutlined />}>
          Create
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          Shop
        </Menu.Item>

        {/* <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
      </StyledMenu>
      <SearchComponent
        openSearchDrawer={openSearchDrawer}
        isSearchDrawerVisible={isSearchDrawerVisible}
        setIsSearchDrawerVisible={setIsSearchDrawerVisible}
      />
      <CartButton
        onClick={showCart}
        style={{ margin: '0 20px' }}
        type="button"
        aria-label="cart-button"
        className="cart-button"
        role="button"
        tabIndex={0}
      >
        <Badge count={0} showZero>
          <Tooltip title="open cart">
            <Button
              type="primary"
              shape="circle"
              icon={
                <ShoppingCartOutlined
                  style={{ fontSize: '25px', margin: 'auto' }}
                />
              }
              size="large"
              block
            />
          </Tooltip>
        </Badge>
      </CartButton>
    </header>
  );
};

const StyledMenu = styled(Menu)`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;

  & .search__button {
    float: right;
  }
`;

const CartButton = styled.div`
  border: none;
  background: inherit;
  margin: 0px 20px;
  position: fixed;
  right: 0px;
  bottom: 40%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export default NavComponent;
