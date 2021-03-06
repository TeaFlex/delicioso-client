import { Component, ReactNode } from "react";
import './NoPage.css';

interface NoPageProps {
    placeholder?: string;
}

export default class NoPage extends Component<NoPageProps> {
    render(): ReactNode {
        return (
            <div className="block">{this.props.placeholder ?? "NoPage"}</div>
        )
    }
}