import { Component } from "react";
export default class Komponenta extends Component {
    render() {
        const { name, years } = this.props;
        return (
            <>
                <h2>Klasna komponenta</h2>
                <p>Ime korisnika: {name}</p>
                <p>Dob korisnika: {years}</p>
            </>
        );
    }
}
