import { Component } from "react";
import "./App.css";
import GradBroj from "./GradBroj";
import FunctionKomponenta from "./FunctionKomponenta";
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { name: "Ivan", years: 30 },
                { name: "Marko", years: 35 },
                { name: "Ana", years: 25 },
            ],
            variabla: "Neka proizvoljna tekstualna variabla",
            count: 0,
            grad: "Zagreb",
        };
        //this.uvecaj = this.uvecaj.bind(this);
    }

    uvecajGodine = () => {
        const newUsers = this.state.users.map((user) => {
            return { ...user, years: user.years + 1 };
        });

        this.setState({ ...this.state, users: newUsers });
    };

    uvecaj = () => {
        this.setState({ count: this.state.count + 1 });
    };

    zamjena = () => {
        this.setState({
            grad: this.state.grad === "Zagreb" ? "Osijek" : "Zagreb",
        });
    };

    render() {
        return (
            <>
                <p>Count {this.state.count}</p>
                <button onClick={this.uvecaj}>Uvecaj za 1</button>
                <p>
                    Odabrani grad: {this.state.grad} a trenutačni broj je{" "}
                    {this.state.count}
                </p>
                <button onClick={this.zamjena}>Zamjena</button>
                <GradBroj grad={this.state.grad} broj={this.state.count}>
                    {this.state.variabla}
                </GradBroj>
                <FunctionKomponenta
                    title="Display korisnika"
                    ime={this.state.users[0].name}
                    godine={this.state.users[0].years}
                >
                    <p>{this.state.variabla}</p>
                </FunctionKomponenta>
                    <button onClick={this.uvecajGodine}>uvecaj Godine</button>
            </>
        );
    }
}
