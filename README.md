# Performance Testing with K6
## Set up microservices 
Pre-requisites
- `Install Docker`
- `Install Docker Compose`

Step 1 : Clone the git repository to set up microservices in our device.
- git clone https://github.com/microservices-demo/microservices-demo
- cd microservices-demo

Step 2 : Run docker-compose to run docker containers.
- docker-compose -f deploy/docker-compose/docker-compose.yml up -d

## Getting started
Running local tests :
- `k6 run script.js`

Running cloud tests from CLI :
- `k6 login cloud -t ${API Token}`

Note: Here API token can find from profile of cloud web app.
- `k6 cloud script.js`

Note: Here script.js is node.js file name in which our k6 tests are written.
