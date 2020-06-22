import React, { useState } from 'react';
import { Menu, Button, Badge } from 'antd';
import { Link } from '@reach/router';
import {
  AppstoreOutlined,
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  DownOutlined,
  ShoppingTwoTone,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import SearchComponent from './SearchComponent';
import CartDrawerComponent from './CartDrawerComponent';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';
import color from '../utils/colors';

const { SubMenu } = Menu;

const NavComponent = () => {
  const [currentMenu, setCurrentMenu] = useState('brand');
  const [isSearchDrawerVisible, setIsSearchDrawerVisible] = useState(false);
  const [isCartDrawerVisible, setIsCartDrawerVisible] = useState(false);
  const { width: windowWidth } = useWindowDimensions();

  const handleMenuClick = (e) => {
    setCurrentMenu(e.key);
  };

  const showCart = () => {
    setIsCartDrawerVisible(!isCartDrawerVisible);
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
            <Link to="/login">Login</Link>
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
        <SubMenu
          key="shop"
          title="Shop"
          icon={
            <ShoppingTwoTone
              twoToneColor={color.primary}
              style={{ fontSize: 18 }}
            />
          }
        >
          <Menu.Item key="men">Mens's T-Shirt</Menu.Item>
          <Menu.Item key="Women">Women's T-Shirt</Menu.Item>
          <Menu.Item key="kid">Kids's T-Shirt</Menu.Item>
          <Menu.Item key="event">Event T-Shirt</Menu.Item>
        </SubMenu>
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
          {/* <Tooltip title="open cart"> */}
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
          {/* </Tooltip> */}
        </Badge>
      </CartButton>
      <CartDrawerComponent
        isCartDrawerVisible={isCartDrawerVisible}
        openCartDrawer={showCart}
      />
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
  border: 1px solid #f4f1f0;

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
