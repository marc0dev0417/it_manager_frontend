import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Skeleton from './Skeleton';

//Views =>
//import SignUp from './views/SignUp';
import PageHome from '../pages/PageHome';
import PageToDo from '../pages/PageToDo'


const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Skeleton view={<PageHome/>}/>}/>
                <Route path='/toDo' element={<Skeleton view={<PageToDo/>}/>}/>
                <Route path="*" element={<Skeleton view={<h1>404 Not found</h1>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router