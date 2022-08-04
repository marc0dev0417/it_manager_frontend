import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ViewRender from './ViewRender';

//Views =>
import PageLogin from '../pages/PageLogin';
import PageSignUp from '../pages/PageSignUp'
import PageHome from '../pages/PageHome';
import PageToDo from '../pages/PageToDo'

import UserStore from '../viewmodels/auth/UserStore';

const Router = () =>{
    const userStore = UserStore.getUserStore()
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={!userStore.getIsLogged ? <ViewRender view={<PageHome/>}/> : <ViewRender view={<PageLogin/>}/>}/>
                <Route path='/SignUp' element={<ViewRender view={<PageSignUp/>}/>}/>
                <Route path='/Home' element={!userStore.getIsLogged ? <ViewRender view={<PageHome/>}/> : <ViewRender view={<PageLogin/>}/>}/>
                <Route path='/toDo' element={!userStore.getIsLogged ? <ViewRender view={<PageToDo/>}/> : <ViewRender view={<PageLogin/>}/>}/>
                <Route path="*" element={<ViewRender view={<h1>404 Not found</h1>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router