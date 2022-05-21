import http from 'k6/http';
import { check, group } from 'k6';

export const options = {
  stages: [
    { duration: '1s', target: 0},
    { duration: '1s', target: 50}
  ],

  thresholds:{
    'iteration_duration': ['p(90) < 300'],
    'http_req_duration' : ['max< 150'],
  },
}

export default () => {
  
    group ('get customers ' , function () {
        let response = http.get("http://localhost/tags");
    
        check(response, {
            'is status code 200': (r) => r.status === 200,
          });
    });

    group ('get catalogue ' , function () {
      const params = {
        id: "a0a4f044-b040-410d-8ead-4de0446aec7e"
       };

      let response = http.get("http://localhost/catalogue",params);
        check(response, {
            'is status code 200': (r) => r.status === 200,
          });
    });
}

