import axios from 'axios';

// axios.defaults.baseURL = 'http://m.biyao.com/floorList'

let instance = axios.create({
    baseURL:  '/api'
    // '/app'
    
})

 function get(url='',params={}){
    return instance.get(url,params)
}

 function post(url='',data={},params={}){
    return instance.post(url,data,params)
}

export default{
    get,
    post
}