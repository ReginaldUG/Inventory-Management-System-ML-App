import { useState, useEffect } from 'react';
import './App.css'
import Dashboard from './pages/Dashboard';
import { Button, Layout } from 'antd';
import SideBar from './components/SideBar';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'
import { Content } from 'antd/es/layout/layout';
import CustomHeader from './components/Header';

const {Header, Sider} = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed]  = useState(false)

  return (
    <Layout>
      <Sider collapsed={collapsed} collapsible trigger={null} theme='light' className='sider'>
        <SideBar/>

        <Button type='text'
          className='trigger-btn'
          onClick={()=> setCollapsed(!collapsed)}
          icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }/>
      </Sider>
      <Layout>
        <Header className='header'>
          <CustomHeader/>
        </Header>
        <Content className='content'>
          <Dashboard/>
        </Content>
      </Layout>

    </Layout>
  );
}

export default App;
