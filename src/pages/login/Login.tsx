import { withSignIn } from "react-auth-kit";
import { Component, ReactNode } from "react";
import axios, { AxiosError }from "axios";
import { api_auth, refresh_token_expiration, token_expiration } from "../../config";
import Form from "../../components/form/Form";
import './Login.css';


interface LoginForm {
    username: string;
    password: string;
}

interface LoginState {
    errors?: {[key: string]: string[]};
}

interface LoginProps {
    signIn: (...args: any) => boolean;
}

class Login extends Component<LoginProps, LoginState>{

    form: LoginForm = {
        username: "",
        password: ""
    };

    state: Readonly<LoginState> = {
        errors: undefined,
    }

    loginHandler = async () => {
        try {
            const res = await axios.post(api_auth, this.form);
            
            this.setState({
                errors: undefined,
            });
            
            const auth = this.props.signIn({
                token: res.data.access,
                tokenType: "Bearer",
                refreshToken: res.data.refresh,
                refreshTokenExpireIn: refresh_token_expiration,
                expiresIn: token_expiration,
            });

            
            
        } catch (error) {
            const res = (error as AxiosError).response;
            this.setState({
                errors: res?.data,
            });
        }
        
    };

    fieldHandler = (e: any) => {
        const o: any = {};
        o[e.target.name] = (e.target.value as string).trim();
        this.form = {...this.form, ...o};
    };

    render(): ReactNode {
        return (
            <div className="center-window full-h" id="connection">
                <Form 
                    title="Login" 
                    onSubmit={this.loginHandler} 
                    preventDefault={true}
                    errors={this.state.errors}
                >
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" onChange={this.fieldHandler}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={this.fieldHandler}/>
                </Form>
            </div>
        )
    }
}

export default withSignIn(Login) as any;