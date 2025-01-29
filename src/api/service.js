import handleApi from './commonService';
const urlPath = 'http://localhost:4000'

const login = ($data)=>{
    let $option = {
        url : urlPath+'/login',
        data : $data,
        method:'POST'
    }
    let response = handleApi($option)
    return response
}

const register = ($data)=>{
    let $option = {
        url : urlPath+'/register',
        data : $data,
        method:'POST'
    }
    let response = handleApi($option)
    return response
}

export {login, register}