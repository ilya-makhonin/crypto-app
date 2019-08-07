const express = require('express');
const morgan = require('morgan');
const request = require('request');
const path = require('path');


const router = express.Router();
const app = express();

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', '*')
    next();
};

router.get('/coin', async (req, res) => {
    request('https://api.coinmarketcap.com/v2/ticker/?type=list', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    });
});

router.get('/cbr', async (req, res) => {
    request('https://www.cbr-xml-daily.ru/daily_json.js', (error, response, body) => {  
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    });
});


app.set('port', process.env.PORT || 3000);

app.use(allowCrossDomain);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api', router);
app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});
