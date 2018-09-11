import React, { Component } from 'react';
import './App.css';

class App extends Component {
    axios = require('axios');

    constructor(props) {
        super(props);
        this.state = {
            toBeEncrypted: '',
            toBeDecrypted: '',
        };
        this.getEncryptedText = this.getEncryptedText.bind(this);
        this.getDecryptedText = this.getDecryptedText.bind(this);
    }

    static multialphabeticEncrypt(plainText) {
        var mapping = {
            'B': 'BCB',
            'C': 'CRC',
            'D': 'DGD',
            'F': 'FQF',
            'G': 'GXG',
            'H': 'HBH',
            'J': 'JFJ',
            'K': 'KPK',
            'L': 'LYL',
            'M': 'MTM',
            'N': 'NWN',
            'P': 'PNP',
            'Q': 'QJQ',
            'R': 'RVR',
            'S': 'SKS',
            'T': 'THT',
            'V': 'VDV',
            'W': 'WLW',
            'X': 'XTX',
            'Y': 'YSY',
            'Z': 'ZMZ',
            'A': 'A',
            'I': 'I',
            'U': 'U',
            'E': 'E',
            'O': 'O',
        };

        var cipher = '';
        for(var char of plainText) {
            cipher += mapping[char.toUpperCase()];
        }
        return cipher;
    }

    static multialphabeticDecrypt(cipher) {
        var mapping = {
            'BCB': 'B',
            'CRC': 'C',
            'DGD': 'D',
            'FQF': 'F',
            'GXG': 'G',
            'HBH': 'H',
            'JFJ': 'J',
            'KPK': 'K',
            'LYL': 'L',
            'MTM': 'M',
            'NWN': 'N',
            'PNP': 'P',
            'QJQ': 'Q',
            'RVR': 'R',
            'SKS': 'S',
            'THT': 'T',
            'VDV': 'V',
            'WLW': 'W',
            'XTX': 'X',
            'YSY': 'Y',
            'ZMZ': 'Z',
            'A': 'A',
            'I': 'I',
            'U': 'U',
            'E': 'E',
            'O': 'O',
        };

        var plainText = '';
        var toBeDecrypted = '';
        for(var i = 0; i < cipher.length; i+=3) {
            toBeDecrypted = cipher[i].toUpperCase() ? cipher[i].toUpperCase() : cipher[i];
            toBeDecrypted += cipher[i + 1].toUpperCase() ? cipher[i + 1].toUpperCase() : cipher[i];
            toBeDecrypted += cipher[i + 2].toUpperCase() ? cipher[i + 2].toUpperCase() : cipher[i + 2];
            plainText += mapping[toBeDecrypted];
        }
        return plainText;
    }

    static caesarEncrypt(plainText) {
        var cipher = '';
        var toBeEncrypted = '';
        for(var char of plainText) {
            toBeEncrypted = (char.toUpperCase().charCodeAt(0) + 1) %128;
            cipher += String.fromCharCode(toBeEncrypted);
        }
        return cipher;
    }

    static caesarDecrypt(cipher) {
        var plainText = '';
        var toBeDecrypted = '';
        for(var char of cipher) {
            toBeDecrypted = (char.toUpperCase().charCodeAt(0) - 1);
            if(toBeDecrypted < 0) {
                toBeDecrypted += 128;
            }
            plainText += String.fromCharCode(toBeDecrypted);
        }
        return plainText;
    }

    static encrypt(plainText) {
        var cipher = App.multialphabeticEncrypt(plainText);
        cipher = App.caesarEncrypt(cipher);
        return cipher;
    }

    static decrypt(cipher) {
        var plainText = App.multialphabeticDecrypt(cipher);
        plainText = App.caesarDecrypt(plainText);
        return plainText;
    }

    getEncryptedText(event) {
        var cipher = App.encrypt(event.target.value);
        this.setState({
            toBeDecrypted: cipher,
            toBeEncrypted: event.target.value,
        });
    }

    getDecryptedText(event) {
        var plainText = App.decrypt(event.target.value);
        this.setState({
            toBeEncrypted: plainText,
            toBeDecrypted: event.target.value,
        });
    }
    render() {
        return (
            <div className="container">
                <h1 className="cover-page">CryptMe</h1>

                <div id="form-input-output">
                    <form>
                        <h5 className="legend">CIPHER TEXT</h5>
                        <input type="text" className="round-input" onChange={this.getEncryptedText} value={this.state.toBeEncrypted}/>
                        <h5 className="legend">PLAIN TEXT</h5>
                        <input type="text" className="round-input" onChange={this.getDecryptedText} value={this.state.toBeDecrypted}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
