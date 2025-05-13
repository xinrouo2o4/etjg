// src/components/AppLayout.jsx
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  BellOutlined, InfoCircleOutlined, ExperimentOutlined, AppstoreOutlined, UserOutlined, UserAddOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export default function AppLayout({ children }) {
  const navigate = useNavigate();

  const menuItems = [
    { key: 'news', icon: <BellOutlined />, label: '消息公告', path: '/news' },
    { key: 'carbon-check', icon: <InfoCircleOutlined />, label: '了解碳盤查', path: '/carbon-check' },
    { key: 'calculator', icon: <ExperimentOutlined />, label: '指引試算', path: '/calculator' },
    { key: 'services', icon: <AppstoreOutlined />, label: '資訊服務', path: '/services' },
  ];

  return (
    <Layout>
      <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div onClick={() => navigate('/')} style={{ color: 'white', fontSize: '24px', cursor: 'pointer' }}>
          E碳究竟
        </div>
        <Menu theme="dark" mode="horizontal" selectable={false} style={{ flex: 1, marginLeft: 20 }}>
          {menuItems.map(item => (
            <Menu.Item key={item.key} icon={item.icon} onClick={() => navigate(item.path)}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
        <div>
          <button onClick={() => navigate('/login')}><UserOutlined /> 登入</button>
          <button onClick={() => navigate('/register')}><UserAddOutlined /> 註冊</button>
        </div>
      </Header>

      <Content style={{ padding: '24px 48px' }}>
        {/* 可加上面包屑 */}
        {/* <Breadcrumb style={{ margin: '16px 0' }}>...</Breadcrumb> */}
        <div style={{ background: '#fff', minHeight: 280, padding: 24, borderRadius: 8 }}>
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
