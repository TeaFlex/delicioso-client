import { Component, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, RequireAuth } from "react-auth-kit";

import './App.css';

import Home from './pages/home/Home';
import Layout from './pages/Layout';
import { refreshApi } from './services/refreshApi';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import CheckApiUp from './helpers/CheckApiUp';
import Book from './pages/book/Book';
import Bookings from './pages/bookings/Bookings';

export default class App extends Component {
    render(): ReactNode {
        return (
            <CheckApiUp>
                <AuthProvider 
                    authType={'localstorage'} 
                    authName={'_auth'} 
                    refresh={refreshApi}
                    >
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={
                                <RequireAuth loginPath="/login">
                                    <Layout />
                                </RequireAuth>
                            }>
                                <Route index element={<Home />} />
                                <Route path="book/" element={<Book />} />
                                <Route path="bookings/" element={<Bookings />} />
                                <Route path="profile/" element={<Profile />} />
                            </Route>
                            <Route path='*' element = {<Navigate to={'/'}/>} />
                            <Route path='/login' element={<Login />}/>
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </CheckApiUp>
        )
    }
}