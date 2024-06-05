import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/ChaGPTEmbed.css';

import ChatGPTEmbed from "../components/ChatGPTEmbed.jsx";

const Assistant = () => {


    return (
        <>
            <ChatGPTEmbed />
        </>
    );
};

export default Assistant;