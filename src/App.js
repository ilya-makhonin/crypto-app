import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import request from './app/utils/request';
import './app/styles/App.css';

import Header from './app/components/header/Header';
import RatesList from './app/components/exchangeRates/RatesList';
import CryptoList from './app/components/crypto/CryptoList';
import CryptoInfo from './app/pages/CryptoInfo';
import TopPositions from './app/components/topCrypto/TopPositions';
import Search from './app/components/search/Search';
import Currency from './app/pages/Currency';


class App extends Component {
    state = {
        greatData: [],
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
        request('http://localhost:3000/api/coin')
            .then( response => {
                const { data: { body } } = response;
                const { data } = JSON.parse(body);
                const resultDataArray = Object.values(data);

                const crypto = {
                    cryptoList: resultDataArray,
                    isFetchingCrypto: false
                };

                this.setState({ crypto, greatData: resultDataArray });
            }).catch( error => console.log('This is getExchangeData', error));
    };

    getRates = () => {
        request('http://localhost:3000/api/cbr')
            .then( response => {
                const { data: { body } } = response;
                const { Valute } = JSON.parse(body);

                const rates = {
                    ratesList: Valute,
                    isFetchingRates: false
                };

                this.setState({ rates });
            })
            .catch( error => {
                console.log('This is getRates', error);
            });
    };

    componentDidMount() {
        this.getExchangeData();
        this.getRates();
    }

    search = () => {
        const name = document.getElementById('searchName').value;
        const min = parseFloat(document.getElementById('searchPriceMin').value);
        const max = parseFloat(document.getElementById('searchPriceMax').value);
        const nameCrypto = name.toLowerCase();
        const minVale = !isNaN(min) ? min : '';
        const maxVale = !isNaN(max) ? max : Infinity;

        let result = this.state.greatData.filter(item => {
            return (
                item.website_slug.includes(nameCrypto)
                && item.quotes.USD.price > minVale
                && item.quotes.USD.price < maxVale
            );
        });

        const crypto = {
            cryptoList: result,
            isFetchingCrypto: this.state.crypto.isFetchingCrypto
        };

        this.setState({ crypto });
    };

    render() {
        const {
            greatData,
            crypto: { cryptoList, isFetchingCrypto },
            rates: { ratesList, isFetchingRates }
        } = this.state;

        return (
            <div className="App">
                <Header>Crypto</Header>

                <div className="content_container">
                    <aside className="add_info">
                        <RatesList data={ratesList} isFetching={isFetchingRates}/>
                        <Search
                            data={greatData}
                            isFetching={isFetchingCrypto}
                            searchName={this.search}
                            filterPrice={this.search}
                        />
                        <TopPositions data={greatData} isFetching={isFetchingCrypto}/>
                    </aside>

                    <main className="main">
                        <div className="main_layout">
                            <Route exact path="/" render={() => (
                                <CryptoList data={cryptoList} isFetching={isFetchingCrypto}/>
                            )} />

                            <Route path="/:crname" render={ props => (
                                <CryptoInfo data={greatData} {...props}/>
                            )}/>

                            <Route path="/fullCurrency" render={ () => (
                                <Currency data={ratesList} isFetching={isFetchingRates}/>
                            )}/>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}


export default App;