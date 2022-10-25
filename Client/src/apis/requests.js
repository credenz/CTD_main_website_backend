import axios from "axios";

const host = window.location.host
const hostname = window.location.hostname
const port = host.split(':')[1]
let url = ""
if(port == "3000") url = "http://localhost:8000"
else url = `http://${hostname}`
const backend = axios.create({
    baseURL: url
  });

const login = (data) => backend.post( `/auth/token/login/`, data,{headers: { "content-type": "application/json" }} );
const register = (data) => backend.post( `/users/`, data,{headers: { "content-type": "application/json" }} );
const order = (data) => backend.get( `/place_order/`, {headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }} );
const user = () => backend.get( `/account_detail/`, {headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }} );
const cart= () => backend.post( `/orders/`, {headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }} );

const Requests = {
    login,
    register,
    order,
    user,
    cart
  };
  export default Requests;