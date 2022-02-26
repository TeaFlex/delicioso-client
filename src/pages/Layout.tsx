import { Component, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default class Layout extends Component {
    render(): ReactNode {
        return (
            <>
                <Navbar />
                <Outlet />
            </>
        )
    }
}