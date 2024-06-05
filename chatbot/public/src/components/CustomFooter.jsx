import React from 'react';
import { Layout } from 'antd';
import Picloader from '../Picloader.jsx';

const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >

            Ant Design ©{new Date().getFullYear()} Created by Nina Q
        </Footer>
    );
};

export default CustomFooter;
