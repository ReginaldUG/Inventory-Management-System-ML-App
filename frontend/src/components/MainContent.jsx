import { Flex, Table, Typography } from 'antd'
import React from 'react'
import TableCard from './TableCard'
import SalesTrendChart from './SalesTrendChart'

const MainContent = () => {
  return (
    <div style={{flex: 1}}>
        <Flex vertical gap='1rem'>
            <SalesTrendChart/>
            <TableCard/>
            
        </Flex>
    </div>
  )
}

export default MainContent
