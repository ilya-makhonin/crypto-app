import axios from 'axios';


export default function(url, data={}) {
    return axios({
        url,
        method: 'GET',
        data
    });
}
