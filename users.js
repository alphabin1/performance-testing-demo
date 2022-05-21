import http from 'k6/http';
import { check, group } from 'k6';

export const options = {
  stages: [
    { duration: '1s', target: 0},
    { duration: '1s', target: 50}
  ],

  thresholds:{
    'iteration_duration': ['p(90) < 500'],
    'http_req_duration' : ['max< 350'],
  },
}

export default () => {
  
    group ('get customers ' , function () {
        let response = http.get("http://localhost/customers");
            check(response, {
            'is status code 200': (r) => r.status === 200,
          });
    });

    group ('get card' , function () {
        let response = http.get("http://localhost/cards");
            check(response, {
            'is status code 200': (r) => r.status === 200,
          });
    });

    group ('get cart' , function (){
    let response = http.get("http://localhost/cart");
      check(response,{'is status code 200':(r) => r.status === 200,});
  });
}    