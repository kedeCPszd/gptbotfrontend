
import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import Picloader from "./Picloader.jsx";

const { Content } = Layout;

const MainContent = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Content
            style={{
                margin: '0 16px',
            }}
        >

            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                Bill is a cat.
            </div>
            <Picloader />
        </Content>
    );
};

export default MainContent;
