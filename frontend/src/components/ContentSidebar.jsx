import { Card, Carousel, Flex, Typography } from 'antd'
import { API_URL } from '../config'
import React, { useEffect, useState } from 'react'


const ContentSidebar = () => {

    const [bestSellers, setBestSellers] = useState([])
         
    useEffect(() => {
        fetchBestSellers()  
    }, []);
      
    const fetchBestSellers = async () => {
        try{
            const response = await fetch(`${API_URL}/sales/best-sellers`)
            const data = await response.json()
            setBestSellers(data.bestsellers || [])
        } catch(error){
            console.error("Error fetching best sellers:", error)
        }
    }

    const contentStyle = {
        height: '160px',
        color: '#F3F4F6',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#1E3A8A'
    }
    
    

  return (
    <div>
      <Card style={{padding: '20px'}}>
        <Flex vertical gap= 'large' justify='space-between' style={{paddingBottom: '10px'}}>
            <Typography.Title level={4}>Popular Pastries</Typography.Title>
        </Flex>

        {bestSellers.length > 0 ? (
            <Carousel autoplay={{dotDuration: true}} autoplaySpeed={5000}>
                {bestSellers.map((item, index) => (
                    <div key={index}>
                        <h3 style={contentStyle}>{item.article}</h3>
                    </div>
                ))}
            </Carousel>
        ):(
            <Typography.Text type='secondary'>No popular pastries available</Typography.Text>
        )}
        
      </Card>
    </div>
  )
}

export default ContentSidebar
