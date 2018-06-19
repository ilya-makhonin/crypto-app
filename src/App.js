import React, { Component } from 'react';
import axios from 'axios';
import './app/styles/App.css';

import CryptoList from './app/components/CryptoList';

class App extends Component {
  state = {
      cryptoList: {},
      isFetching: true
  };

  render() {
    const { cryptoList, isFetching } = this.state;

    return (
      <div className="App">
          {
              isFetching
                  ? <div>Loading...</div>
                  : <CryptoList data={cryptoList} />
          }
      </div>
    );
  }

  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v2/ticker/?structure=array&sort=id')
        .then( response => {
          let { data: { data } } = response;

          this.setState({
                  cryptoList: data,
                  isFetching: false
              });
        })
        .catch( error => {
          console.log(error);
        });
  }
}

export default App;
