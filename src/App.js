import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './app/styles/App.css';

import Header from './app/components/header/Header';
import RatesList from './app/components/exchangeRates/RatesList';
import CryptoList from './app/components/crypto/CryptoList';
import CryptoInfo from './app/pages/CryptoInfo';
import TopPositions from './app/components/topCrypto/TopPositions';
import Search from './app/components/search/Search';


class App extends Component {
  state = {
      crypto: {
          cryptoList: [],
          isFetchingCrypto: true
      },
      rates: {
          ratesList: {},
          isFetchingRates: true
      }
  };

  getExchangeData = () => {
      axios.get('https://api.coinmarketcap.com/v2/ticker/?structure=array&sort=id')
          .then( response => {
              let {data: { data }} = response;
              const crypto = {
                  cryptoList: data,
                  isFetchingCrypto: false
              };

              this.getRates(crypto);
          })
          .catch( error => console.log(error));
  };

  getRates = (updateData) => {
      axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
          .then( response => {
              let { data: { Valute } } = response;
              const crypto = updateData;
              const rates = {
                  ratesList: Valute,
                  isFetchingRates: false
              };

              this.setState({ crypto, rates });
          })
          .catch( error => {
              console.log(error);
          });
  };

  render() {
    const {
        crypto: {cryptoList, isFetchingCrypto },
        rates: { ratesList, isFetchingRates }
    } = this.state;

    return (
      <div className="App">
          <Header>Crypto</Header>

          <div className="content_container">
              <aside className="add_info">
                  <RatesList data={ratesList} isFetching={isFetchingRates}/>
                  <Search
                      data={cryptoList}
                      isFetching={isFetchingCrypto}
                      searchName={null}
                      filterPrice={null}
                  />
                  <TopPositions data={cryptoList} isFetching={isFetchingCrypto}/>
              </aside>

              <main className="main">
                  <div className="main_layout">
                      <Route exact path="/" render={() => (
                          <CryptoList data={cryptoList} isFetching={isFetchingCrypto}/>
                      )} />

                      <Route path="/:crname" render={ props => (
                          <CryptoInfo data={cryptoList} {...props}/>
                      )}/>
                  </div>
              </main>
          </div>
      </div>
    );
  }

  componentDidMount() {
    this.getExchangeData();
  }
}

export default App;