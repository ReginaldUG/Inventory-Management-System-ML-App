import React from 'react'
import { useState, useEffect } from 'react';
import {Button, Card, Flex, Table, Typography} from 'antd'
import {BiRightArrowAlt, BiShareAlt} from 'react-icons/bi'
import { API_URL } from '../config';

const {Title} = Typography
const TableCard = () => {

    const [predictions, setPredictions] = useState([])
    
    useEffect(() => {
        fetchPredictions()  
    }, []);

    const fetchPredictions = async () => {
        try{
            const response = await fetch(`${API_URL}/predictions`)
            const data = await response.json()
            setPredictions(data.salespredictions || [])
        } catch(error){
            console.error("Error fetching predictions:", error)
        }
    }

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
           title: 'Article',
           dataIndex: 'article',
           key: 'article',
        },
        {
           title: 'Quantity',
           dataIndex: 'quantity',
           key: 'quantity',
        }
    ]

    const tableData = predictions.map((prediction, index) => ({
        key: index,
        date: prediction.date,
        article: prediction.article,
        quantity: prediction.quantity
    }))

  return (
    <div style={{margin: '20px 0'}}>
      <Card style={{padding: '20px'}}>
        <Flex justify='space-between' align='center'>
            <Title level={4} >
                Sales Predictions
            </Title>

            <Button type='primary' style={{display: 'flex', alignItems: 'center'}}>
                <BiRightArrowAlt className='icons'/>
            </Button>
        </Flex>
        <Table columns={columns} dataSource={tableData} style={{marginTop: 10}} pagination={tableData.length>4 ? {pageSize: 4} : false}/>
      </Card>
    </div>
  )
}

export default TableCard
