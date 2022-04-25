import axios from "axios";
//88305080/json/
const api = axios.create({
baseURL: "https://viacep.com.br/ws/"

});
export default api;