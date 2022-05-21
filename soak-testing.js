import http from 'k6/http';
import { check, sleep } from 'k6';
const BASE_URL = 'http://localhost';

export const options = {
  stages: [
    { duration: '1h', target: 400 }, 
    // { duration: '3h56m', target: 400 }, 
    // { duration: '2m', target: 0 }, 
  ],
};
export default function () {

  const url = `${BASE_URL}/addresses`;
  const data = {
        street : "xyz",
        number : "204",
        country : "India",
        city : "abc",
        postcode : "123456",
        userID : "test"
  }

  let response = http.post(url, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
  check(response,{'is status code 200':(r) => r.status === 200,});
  sleep(1);
}