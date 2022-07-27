import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ViewRender from './ViewRender';

//Views =>
import PageLogin from '../pages/PageLogin';
import PageSignUp from '../pages/PageSignUp'
import PageHome from '../pages/PageHome';
import PageToDo from '../pages/PageToDo'



const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ViewRender view={<PageLogin/>}/>}/>
                <Route path='/SignUp' element={<ViewRender view={<PageSignUp/>}/>}/>
                <Route path='/Home' element={<ViewRender view={<PageHome/>}/>}/>
                <Route path='/toDo' element={<ViewRender view={<PageToDo/>}/>}/>
                <Route path="*" element={<ViewRender view={<h1>404 Not found</h1>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router