import { Flex, Table, Typography } from 'antd'
import React from 'react'
import TableCard from './TableCard'
import SalesTrendChart from './SalesTrendChart'

const MainContent = () => {
  return (
    <div style={{flex: 1}}>
        <Flex vertical gap='2.3rem'>
            <Typography.Title level={2} type='primary'>
                Dashboard
            </Typography.Title>

            <SalesTrendChart/>
            <TableCard/>
            
        </Flex>
    </div>
  )
}

export default MainContent
