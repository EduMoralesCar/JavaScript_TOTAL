import {Component} from 'react';

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contador: 0
        }
        this.incrementar = this.incrementar.bind(this);
        this.decrementar = this.decrementar.bind(this);
    }
    incrementar() {
        this.setState({contador: this.state.contador + 1});
    }
    decrementar() {
        this.setState({contador: this.state.contador - 1});
    }

    render() {
        return (
            <div className="container text-center mt-5">
                <h2>Contador: {this.state.contador}</h2>
                <button className="btn btn-primary mx-2" onClick={this.incrementar}>Incrementar</button>
                <button className="btn btn-danger mx-2" onClick={this.decrementar}>Decrementar</button>
            </div>
        );
    }
}

export default Contador;