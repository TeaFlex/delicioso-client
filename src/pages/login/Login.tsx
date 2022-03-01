import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";
import { api_auth, refresh_token_expiration, token_expiration } from "../../config";
import './Login.css';

interface LoginProps {}

const Login = (props: LoginProps): JSX.Element => {
    
    const [errors, setErrors] = useState<{[key: string]: string[]} | undefined>();
    const navigate = useNavigate();
    const signIn = useSignIn();

    let form = {
        username: "",
        password: "",
    };

    const loginHandler = async () => {
        try {
            const res = await axios.post(api_auth, form);
            
            setErrors(undefined);
            
            const auth = signIn({
                token: res.data.access,
                tokenType: "Bearer",
                refreshToken: res.data.refresh,
                refreshTokenExpireIn: refresh_token_expiration,
                expiresIn: token_expiration,
            });
            navigate('/');
            
        } catch (error) {
            const res = (error as AxiosError).response;
            setErrors(res?.data);
        }
    };

    const fieldHandler = (e: any) => {
        const o: any = {};
        o[e.target.name] = (e.target.value as string).trim();
        form = {...form, ...o};
    };

    return (
        <div className="center-window full-h" id="connection">
            <Form 
                title="Login" 
                onSubmit={loginHandler} 
                preventDefault={true}
                errors={errors}
            >
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" onChange={fieldHandler}/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={fieldHandler}/>
            </Form>
        </div>
    );
};

export default Login;