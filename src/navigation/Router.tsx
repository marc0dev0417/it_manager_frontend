import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ViewRender from './ViewRender';

//Views =>
import PageLogin from '../pages/PageLogin';
import PageSignUp from '../pages/PageSignUp'
import PageHome from '../pages/PageHome';
import PageToDo from '../pages/PageToDo'

import UserStore from '../viewmodels/auth/UserStore';

const Router = () => {
    const userStore = UserStore.getUserStore()
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<ViewRender view={<PageHome />} />} />
                <Route path='/login' element={<ViewRender view={<PageLogin />} />} />
                <Route path='/signUp' element={<ViewRender view={<PageSignUp />} />} />
                <Route path='/toDo' element={<ViewRender view={<PageLogin />} />} />
                <Route path="*" element={<ViewRender view={<h1>404 Not found</h1>} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router