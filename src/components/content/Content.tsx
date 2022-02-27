import { Component, ReactNode } from "react";
import './Content.css';

export default class Content extends Component {
    render(): ReactNode {
        return (
            <div id="content">
                {this.props.children}
            </div>
        )
    }
}