import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

function getItem(label, key, icon, children, path) {
    return {
        key,
        icon,
        children,
        label,
        path, // 添加 path 属性
    };
}

const items = [
    getItem('Overview', '1', <PieChartOutlined />, null, '/home'),
    getItem('ChatGPTBot', '2', <DesktopOutlined />, null, '/assistant'),
    getItem('Connect', 'sub1', <UserOutlined />, [
        getItem('Contact me', '3' ),
        getItem('Github', '4'),
    ]),
];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const onMenuClick = (e) => {
        const findPath = (items, key) => {
            for (let item of items) {
                if (item.key === key) {
                    return item.path;
                }
                if (item.children) {
                    const childPath = findPath(item.children, key);
                    if (childPath) {
                        return childPath;
                    }
                }
            }
        };

        const path = findPath(items, e.key);
        if (path) {
            navigate(path);
        }
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <div className="sider-header">
                Your ChatGPT
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items}
                onClick={onMenuClick} // 添加 onClick 事件处理函数
            />
        </Sider>
    );
};

export default Sidebar;

