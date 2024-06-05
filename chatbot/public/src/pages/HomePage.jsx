import React, { useState, useEffect } from 'react';
import { Layout, theme } from 'antd';
import './App.css';
import Picloader from "./Picloader.jsx";
import Sidebar from "../components/Sidebar.jsx";
import CustomHeader from "../components/CustomHeader.jsx";
import CustomFooter from "../components/CustomFooter.jsx";
import MainContent from "../components/MainContent.jsx";
import Assistant from "./Assistant.jsx";

const { Header, Content, Footer, Sider } = Layout;

const HomePage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [homePage, setHomePage] = useState(false);
    const [assistantPage, setAssistantPage] = useState(false);

    const setFeatures = (path) => {
        if (path.includes('home') || path === '/') {
            setHomePage(true);
            setAssistantPage(false);
        } else if (path.includes('assistant')) {
            setHomePage(false);
            setAssistantPage(true);
        }
    };

    //根据路径设置页面状态
    useEffect(() => {
        const pathname = window.location.pathname ?? '/';
        setFeatures(pathname);
    }, [window.location.pathname]); // 添加依赖项

    return (
        <Layout className="layout">
            <Sidebar setPageProps={{ setHomePage, setAssistantPage }} />
            <Layout className='layout'>
                <CustomHeader />
                <main>
                    {homePage && <MainContent />}
                    {assistantPage && <Assistant />}
                </main>
                <CustomFooter />
            </Layout>
        </Layout>
    );
};

export default HomePage;
