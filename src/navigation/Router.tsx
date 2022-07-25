import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Skeleton from './Skeleton';

//Views =>
import PageLogin from '../pages/PageLogin';
import PageSignUp from '../pages/PageSignUp'
import PageHome from '../pages/PageHome';
import PageToDo from '../pages/PageToDo'



const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Skeleton view={<PageLogin/>}/>}/>
                <Route path='/SignUp' element={<Skeleton view={<PageSignUp/>}/>}/>
                <Route path='/Home' element={<Skeleton view={<PageHome/>}/>}/>
                <Route path='/toDo' element={<Skeleton view={<PageToDo/>}/>}/>
                <Route path="*" element={<Skeleton view={<h1>404 Not found</h1>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router