import { Component, ReactNode, FormEvent, Children, cloneElement } from "react";
import './Form.css';

interface FormProps {
    title?: string;
    onSubmit?: (...args: any) => any
    submitText?: string;
    preventDefault?: boolean;
    errors?: {[key: string]: string[]};
}

interface FormFields {
    [key: string]: any;
}

export default class Form extends Component<FormProps, FormFields> {

    handleSubmit = (e: FormEvent) => {
        if(!!this.props.preventDefault)
            e.preventDefault();
        (this.props.onSubmit ?? console.log)(e);
    }

    render(): ReactNode {
        return (
            <form className="block formComponent">
                {!!this.props.title && 
                    <h1>{this.props.title}</h1>
                }
                {!!this.props.errors &&
                    <ul className="error">{
                        Object.keys(this.props.errors!).map(key => 
                            <li key={key}>{key}: {this.props.errors![key]}</li>
                        )
                    }</ul>
                }
                {this.props.children}
                <div className="center" id="buttonsArea">
                    <input 
                        type="submit" 
                        value={this.props.submitText ?? "Submit"} 
                        onSubmit={(e) => this.handleSubmit(e)}
                        onClick={(e) => this.handleSubmit(e)}
                    />
                </div>
            </form>
        )
    }
}