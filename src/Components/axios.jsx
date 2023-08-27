import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:5001//challenge-4b2b2/us-centrall/api'
});
export default instance;