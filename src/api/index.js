import requests from "./request";
export const getUserProfile = () => requests({method:'get',url:'/v1_0/user/profile'})
export const sendSms = mobile => requests({method:'get',url:`/v1_0/sms/codes/${mobile}`})
export const Login = data => requests({method:'post',url:`/v1_0/authorizations`,data:data})