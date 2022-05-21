import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://localhost'; 
export const options = {
  stages: [
    { duration: '1m', target: 5 },
    { duration: '2m', target: 5 },
    { duration: '1m', target: 10 }, 
    { duration: '2m', target: 10 },
    { duration: '1m', target: 15 }, 
    { duration: '2m', target: 15 },
    { duration: '1m', target: 20 }, 
    { duration: '2m', target: 20 },
    { duration: '5m', target: 0 }, 
  ],
};

export default function () {
const data = {
        id : "6285eea1ee11cb0001efc73e"        
  }
let response = http.get(`${BASE_URL}/addresses`,data)    
check(response,{'is status code 200':(r) => r.status === 200,});
sleep(1);
}
