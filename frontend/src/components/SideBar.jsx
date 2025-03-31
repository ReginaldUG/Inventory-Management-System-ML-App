import { Flex } from 'antd'
import React from 'react'
import {FaAccusoft} from 'react-icons/fa6'
import { Menu } from 'antd'
import {AreaChartOutlined, DashboardOutlined, ProductOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons'


const SideBar = () => {
  return (
    <>
        <Flex align='center' justify='center'>
            <div className='logo'>
                <FaAccusoft/>
            </div>
        </Flex>

        <Menu theme='light' defaultSelectedKeys={['1']} mode='inline' className='menu-bar' items={[
            {
                key: '1',
                icon: <DashboardOutlined/>,
                label: 'Dashboard'
            },
            {
                key: '2',
                icon: <AreaChartOutlined/>,
                label: 'Inventory'
            },
            {   
                key: '3',
                icon: <ProductOutlined/>,
                label: 'Products'
            },
            {
                key: '4',
                icon: <SettingOutlined/>,
                label: 'Setting'
            },
            {
                key: '5',
                icon: <UserOutlined/>,
                label: 'User'
            },
        ]}/>
    </>
  )
}

export default SideBar
