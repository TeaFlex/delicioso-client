import { Component, ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from "react-auth-kit";

import './App.css';

import Home from './pages/home/Home';
import Layout from './pages/Layout';
import NoPage from './pages/noPage/NoPage';
import { refreshApi } from './services/refreshApi';
import Connection from './pages/connection/Connection';

export default class App extends Component {
    render(): ReactNode {
        return (
            <AuthProvider 
                authType={'localstorage'} 
                authName={'_auth'} 
                refresh={refreshApi}
                >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <RequireAuth loginPath="/connection">
                                <Layout />
                            </RequireAuth>
                        }>
                            <Route index element={<Home />} />
                            <Route path="book/" element={<NoPage placeholder='book'/>} />
                            <Route path="bookings/" element={<NoPage placeholder='bookings'/>} />
                            <Route path="profile/" element={<NoPage placeholder='profile'/>} />
                        </Route>
                        <Route path='/connection' element={<Connection />}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        )
    }
}