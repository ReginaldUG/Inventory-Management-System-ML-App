import { Flex } from "antd";
import MainContent from "../components/MainContent";
import SideContent from "../components/SideContent";

const Dashboard = () => {
    return(
        <Flex gap='large'>       
            <MainContent/>
            <SideContent/>
            
        </Flex>
        
    )
}

export default Dashboard;