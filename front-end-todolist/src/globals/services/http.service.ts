import axios from 'axios';
import { environment } from '../../environment';

class HttpService {

    async get(path: string) {
        const res = await axios.get(environment.baseUrl + path)
        return res.data;
    }

    async post(path: string, body: any) {
        const res = await axios.post(environment.baseUrl + path, body)
        return res.data;
    }

}

export default new HttpService() as HttpService;