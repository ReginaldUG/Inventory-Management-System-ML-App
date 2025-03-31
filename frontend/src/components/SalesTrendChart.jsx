import { Card, Flex, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS, defaults } from 'chart.js/auto' 

const SalesTrendChart = () => {
    const [selectedTrend, setSelectedTrend] = useState('daily')
    const [trends, setTrends] = useState([])

    useEffect(() => {
        fetchTrends(selectedTrend)
    }, [selectedTrend])

    const fetchTrends = async (trendType) =>{
        try{
            const response = await fetch(`http://127.0.0.1:5000/sales/${trendType}`)
            const data = await response.json()
            setTrends(data.salestrends || [])
        } catch (error){
            console.error("Error fetching sales trends:", error)
        }
    }

    defaults.maintainAspectRatio = true

    const linedata = {
        labels: trends.map(item => item.date),
        datasets:[{
            label: "Sales",
            data: trends.map(item => Number(item.total_sales)),
            backgroundColor: 'transparent',
            borderColor: '#22D3EE',
            pointBorderColor: 'transparent',
            pointBorderWidth: 6,
            tension: 0.3
        }]
    }
    const options = {
        responsive: true,
        interaction:{
            mode: 'index',
            intersect: false
        },
        plugins: {
            title:{
                display: true,
                text: 'Last 7 days Sales'
            },
            tooltip:{
                enabled: true,
                callbacks:{
                    label: (item) => `Sales: ${item.raw}`
                },
            },
            legend: { display: false }
        },
        scales: {
            x: {
                grid: { display: false }
            },
            y: {
                suggestedMin: Math.min(...trends.map(item => Number(item.total_sales))) - 10,
                suggestedMax: Math.max(...trends.map(item => Number(item.total_sales))) + 10,
                ticks: {
                    stepSize: 50,  
                    callback: (value) => value.toFixed(0)  // Ensure whole numbers
                }
            }
        }
    } 

  return (
    <Card style={{padding: '20px'}}>
        <Flex justify='space-between' align='center'>
            <Typography.Title level={4}>
                Sales Trends
            </Typography.Title>

            <Select defaultValue='daily' style={{width: 120}} onChange={setSelectedTrend} options={[
                {value: 'daily', label: 'Daily'},
                {value: 'weekly', label: 'Weekly'}
            ]}
            />

        </Flex>
        <div className='linechart--card'>
            <Line data={linedata} options={options}></Line>        
        </div>
        
        
    </Card>
  )
}

export default SalesTrendChart
