import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";
import { api_auth, refresh_token_expiration, token_expiration } from "../../config";
import { ErrorPayload, LoginRequest } from "../../services/interfaces";
import './Login.css';


interface LoginProps {}

const Login = (props: LoginProps): JSX.Element => {
    
    const [errors, setErrors] = useState<ErrorPayload>();
    const [login, setLogin] = useState<LoginRequest>({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const signIn = useSignIn();

    const loginHandler = async () => {
        try {
            const res = await axios.post(api_auth, login);
            
            setErrors(undefined);

            const payload = jwt_decode(res.data.access) as any;
            
            const auth = signIn({
                token: res.data.access,
                tokenType: "Bearer",
                refreshToken: res.data.refresh,
                refreshTokenExpireIn: refresh_token_expiration,
                expiresIn: token_expiration,
                authState: payload.auth_user
            });

            if(auth)
                navigate('/');
            
        } catch (error) {
            const res = (error as AxiosError).response;
            setErrors(res?.data);
        }
    };

    const fieldHandler = (e: any) => {
        const o: any = {};
        o[e.target.name] = (e.target.value as string).trim();
        setLogin({...login, ...o});
    };

    return (
        <div className="center-window full-h" id="connection">
            <div className="block">
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
        </div>
    );
};

export default Login;