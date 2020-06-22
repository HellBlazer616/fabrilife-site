import React from 'react';
import { Drawer, Empty } from 'antd';

import useWindowDimension from '../utils/hooks/useWindowDimensions';

const CartDrawerComponent = ({ openCartDrawer, isCartDrawerVisible }) => {
  const { width: windowWidth } = useWindowDimension();
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={openCartDrawer}
      visible={isCartDrawerVisible}
      key="cartDrawer"
      width={windowWidth < 800 ? windowWidth - 10 : 650}
      closable
      // bodyStyle={width < 800 ? w'100vw' : 650}
    >
      <Empty
        description={<h3>Your cart is empty</h3>}
        style={{ marginTop: '50%' }}
      />
    </Drawer>
  );
};

export default CartDrawerComponent;
