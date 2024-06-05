import React, { useState, useEffect } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './App.css';
import Picloader from "./Picloader.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CustomHeader from "./components/CustomHeader.jsx";
import MainContent from "./components/MainContent.jsx";
import CustomFooter from "./components/CustomFooter.jsx";


const { Header, Content, Footer, Sider } = Layout;


const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [homePage, setHomePage] = useState(false);
    const [assistantPage, setAssistantPage] = useState(false);
    const setFeatures = (path) => {
        if (path.includes('home') || path === '/') {
            setHomePage(true);
        } else if (path.includes('assistant')) {
            setAssistantPage(true);
        }
    };
    //根据路径设置页面状态
    useEffect(() => {
        const pathname = window.location.pathname ?? '/';
        setFeatures(pathname);
    });


    return (
        <Layout className="layout">
            <Sidebar />
            <Layout className='layout'>
                <CustomHeader />
                <MainContent />
                <CustomFooter />
            </Layout>
        </Layout>
    );
};
export default App;
