import { Component, ReactNode } from "react";

interface NoPageProps {
    placeholder?: string;
}

export default class NoPage extends Component<NoPageProps> {
    render(): ReactNode {
        return (
            <div>{this.props.placeholder ?? "NoPage"}</div>
        )
    }
}