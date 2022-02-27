import { Component, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Content from "../components/content/Content";
import Navbar from "../components/navbar/Navbar";

export default class Layout extends Component {
    render(): ReactNode {
        return (
            <>
                <Navbar />
                <Content>
                    <Outlet />
                </Content>
            </>
        )
    }
}