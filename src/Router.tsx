import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Skeleton from './views/Skeleton';

//Views =>
import PageHome from './pages/PageHome';


const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Skeleton view={<PageHome/>}/>}/>
                <Route path="*" element={<Skeleton view={<h1>404 Not found</h1>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router