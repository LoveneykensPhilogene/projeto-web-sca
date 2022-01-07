import axios, { CancelToken } from 'axios';
import { number } from 'echarts/core';
import apiConfig from '../../Services/APIConfig';

export const ApIAxios=axios.create(
    {
    baseURL:new apiConfig().getURL(),
    headers:{value:sessionStorage.getItem("token")}
}
);
ApIAxios.defaults.headers.common['Authorization'] = sessionStorage.getItem("token");
//authorization = `Bearer ${token}`;


