import React from 'react';
import { Layout, Menu } from 'antd';

import './BasicLayout.scss';

const { Header, Content, Footer } = Layout;

const BasicLayout = (props) => {
  return (
    <div>
      <Header tyle={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        header
      </Header>
      <Content>
        {props.children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Dracarys@sHackathon Sea 2019</Footer>
    </div>
  );
}

export default BasicLayout;
