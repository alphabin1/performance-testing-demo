# K6 Performance Testing Example
Welcome to the K6 performance testing guide. This readme will walk you through the setup and execution of performance tests using K6, a powerful open-source performance testing tool.

## Set up microservices 
Before getting started with performance testing using K6, you need to set up the microservices environment. Follow the steps below to complete the setup:

#### Pre-requisites
Make sure you have the following prerequisites installed:
- Docker: Install Docker on your machine 
- Docker Compose: Install Docker Compose on your machine.

#### Step 1: Clone the Repository
Clone the Git repository to set up the microservices in your local environment:
- git clone https://github.com/microservices-demo/microservices-demo
- cd microservices-demo

#### Step 2 : Run Docker Compose
Use Docker Compose to run the Docker containers for the microservices:
```
docker-compose -f deploy/docker-compose/docker-compose.yml up -d
```

## Getting started
Now that you have the microservices environment set up, you can start running performance tests with K6.

#### Running Local Tests
To run performance tests locally, execute the following command:
```
k6 run script.js
```
Make sure to replace `script.js` with the actual filename of your K6 test script.

#### Running Cloud Tests from CLI
To run performance tests in the cloud using the K6 CLI, follow these steps:
1. Log in to the K6 Cloud using your API token:
    ```
    k6 login cloud -t ${API TOKEN}
    ```
    Note: Replace ${API Token} with your actual API token, which can be found in the profile section of the K6 Cloud web app.

2. Execute the cloud tests by running the following command:
    ```
    k6 cloud script.js
    ```
    Note: Replace `script.js` with the filename of your K6 test script.

Feel free to explore and enhance your performance testing with K6.
Happy testing! 😊
