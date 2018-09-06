import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    axios = require('axios');
    constructor(props) {
        super(props);
        this.state = {
            toBeEncrypted: '',
            toBeDecrypted: '',
        };
        this.encrypt = this.encrypt.bind(this);
        this.decrypt = this.decrypt.bind(this);

    }
    encrypt(event) {
        this.setState({
            toBeDecrypted: event.target.value,
            toBeEncrypted: event.target.value,
        });
        this.axios.get('/').then( function (response) {
            console.log(response);
        })
    }
    decrypt(event) {
        this.setState({
            toBeEncrypted: event.target.value,
            toBeDecrypted: event.target.value,
        });
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <h1>Encryptr & Decryptor</h1>
                    </div>
                    <div className="row">
                        <input type="text" className="form-control mt-5" onChange={this.encrypt} value={this.state.toBeEncrypted}/>
                        <input type="text" className="form-control mt-5" onChange={this.decrypt} value={this.state.toBeDecrypted}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
