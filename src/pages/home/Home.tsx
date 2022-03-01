import { Component, ReactNode } from "react";
import TablesInfos from "../../services/TablesInfos";
import './Home.css';

interface HomeState {
    [key: string]: any
}
export default class Home extends Component<{}, HomeState> {

    state: HomeState = {};

    componentDidMount() {
        TablesInfos.getCount()
        .then(v => {
            this.setState(v)
        });

        TablesInfos.getAvailable()
        .then(v => {
            this.setState({
                available: v,
                available_count: v.length,
                ...this.state
            });
        })
    }

    render(): ReactNode {
        return (
            <div className="block">
                <h2>Welcome !</h2>
                {"Available tables: "+(this.state.count ?? -1)+"/"+this.state.available_count ?? -1}
            </div>
        )
    }
}