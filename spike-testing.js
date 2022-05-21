import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://localhost'; 
export const options = {
  stages: [
    { duration: '10s', target: 10 }, 
    { duration: '1m', target: 10 },
    { duration: '10s', target: 14 }, 
    { duration: '3m', target: 14 }, 
    { duration: '10s', target: 10 }, 
    { duration: '3m', target: 10 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
    const data = {
            id : "a0a4f044-b040-410d-8ead-4de0446aec7e"        
      }
    let response = http.get(`${BASE_URL}/catalogue`,data)    
    check(response,{'is status code 200':(r) => r.status === 200,});
    sleep(1);
}
    