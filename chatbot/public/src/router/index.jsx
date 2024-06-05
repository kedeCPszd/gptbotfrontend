import React from 'react';
import Main from '../pages/main.jsx'
import { Route, Routes } from 'react-router-dom';
import MainContent from "../components/MainContent.jsx";
import Sidebar from "../components/Sidebar.jsx";
import App from "../App.jsx";
import HomePage from "../pages/HomePage.jsx";

const mainPath = '/';
const homePath = '/home';
const assistantPath = '/assistant';
function Momos () {
        return(
            /*路由配置*/

                <Routes>
                    <Route exact path={mainPath} element={<HomePage />} />
                    <Route exact path={homePath} element={<HomePage />} />
                    <Route exact path={assistantPath} element={<HomePage />} />
                </Routes>

);

}
export default Momos;