import { Flex, Typography } from "antd";
import MainContent from "../components/MainContent";
import SideContent from "../components/SideContent";

const Dashboard = () => {
    return(
        <>
        <Flex direction="column" gap='large'>            
            <Typography.Title level={3} type='primary'>
                Dashboard
            </Typography.Title>
        </Flex>
        <Flex direction="row" gap="large">
            <MainContent/>
            <SideContent/>
        </Flex>
        </>
        
        
    )
}

export default Dashboard;