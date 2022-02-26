import { Component, ReactNode } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

interface Page {
    path: string;
    label: string;
}

export default class Navbar extends Component {
    render(): ReactNode {
        const pages: Page[] = [
            {label: "Home", path: '/'},
            {label: "Book a table", path:"book/"},
            {label: "Your bookings", path:"bookings/"},
            {label: "Profile", path:"profile/"},
        ]
        return (
            <nav id="navbar">
                {pages.map((el, i) => {
                    return (
                        <Link key={i} to={el.path}>{el.label}</Link>
                    );
                })}
            </nav>
        )
    }
}