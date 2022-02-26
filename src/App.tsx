import { Component, ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

export default class App extends Component {
    render(): ReactNode {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="book/" element={<NoPage placeholder='book'/>} />
                        <Route path="bookings/" element={<NoPage placeholder='bookings'/>} />
                        <Route path="profile/" element={<NoPage placeholder='profile'/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}