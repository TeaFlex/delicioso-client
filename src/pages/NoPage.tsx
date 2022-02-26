import { Component, ReactNode } from "react";
import { Outlet } from "react-router-dom";

export default class NoPage extends Component {
    render(): ReactNode {
        return (
            <div>NoPage</div>
        )
    }
}