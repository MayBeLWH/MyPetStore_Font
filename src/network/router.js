import axios from "axios";

axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';
export function request(config){
    const instance=axios.create({
        baseURL:'http://localhost:8081',
        timeout:5000
    })

    instance.interceptors.request.use(
        (config)=>{//请求成功
            return config
        },
        (err)=>{//请求失败
            console.log(err);
        })
    instance.interceptors.response.use(
        (res)=>{
            return res
        },
        (err)=>{
        })

    return instance(config)
}
