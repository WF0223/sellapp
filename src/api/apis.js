var axios = require('axios');
var qs = require('qs');

let req = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

export function getSeller(){
    return req.get('/api/seller',qs.stringify)
}
export function getgoods(){
    return req.get('/api/goods')
}