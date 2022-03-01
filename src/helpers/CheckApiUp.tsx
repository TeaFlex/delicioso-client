import { FC, PropsWithChildren, useState } from "react";
import { requestApiWithoutToken } from "../services/request";

interface CheckApiUpProps {}

const checkApiUp = (props: PropsWithChildren<CheckApiUpProps>): JSX.Element => {

    const [isUp, setIsUp] = useState(false);

    const retry = () => {
        requestApiWithoutToken('/')
            .then(v => {
                setIsUp(v.status === 200);
            })
            .catch(e => {
                setIsUp(false);
            });
    };

    retry();

    const up = (
        <>
            {props.children}
        </>
    );

    const down = (
        <div className="center-window full-h">
            <div className="block center flex-col">
                <span className="error">The service is down, please come back later.</span>
                <button 
                    style={{
                        marginTop: "1em"
                    }}
                    onClick={retry}
                    >
                    Retry
                </button>
            </div>
        </div>
    );

    return (isUp)? up : down;
}

export default checkApiUp;