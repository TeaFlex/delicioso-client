import { useEffect, useState } from "react";
import { TableI } from "../../services/interfaces";
import TablesInfos from "../../services/TablesInfos";
import './Home.css';

interface HomeState {
    [key: string]: any
}

const Home = (): JSX.Element => {
    const [state, setState] = useState<HomeState>({});

    useEffect(() => {
        (async () => {
            const a = await TablesInfos.getAvailable();
            const c = await TablesInfos.getCount();
            const s = await TablesInfos.getTotalSeats();
            setState({
                ...state, 
                available: a, 
                available_count: a.length, 
                ...c,
                ...s,
            });

        })();
    },[]);

    console.log(state);
    

    return (
        <>
            <div className="block">
                <h2>Welcome !</h2>
                {"Available tables: " +(state.available_count ?? -1)  + "/" + (state.count ?? -1) }
            </div>
            <div className="flex">
                {/* {(state.available as TableI[]).map((v, i) => <div className="block" key={i}>{v.id}</div>)} */}
            </div>
        </>
    )
};

export default Home;