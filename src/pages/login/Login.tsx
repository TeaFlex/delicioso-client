import { Component, ReactNode } from "react";
import './Login.css';

export default class Login extends Component {
    render(): ReactNode {
        return (
            <div className="center-window full-h" id="connection">
                <form action="" className="block">
                    <span>Login</span>
                </form>
            </div>
        )
    }
}