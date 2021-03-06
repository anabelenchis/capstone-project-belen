# POC Front-end automation

Test automation project built using Testcafe framework to do automated tests for [Todoist app](https://todoist.com/).

# Project Structure
```
├── ...
├── API_Testing             # Folder where the API tests are located, including test script and environmental variables
├── pom                     # Folder where all test data, pages, and tests are located
│   ├── data                # Data used for our tests
│   ├── pages               # Pages in which the website is divided for testing purposes
│   └── tests               # Tests files
└── ...
```
# Pre-requisites

1. Node.js
2. Browsers used: Chrome and Edge

## Installation 

To be able to run the test scripts please install the dependencies by writing the following command in the terminal in the folder where the project is located: 

```
$ npm install
```
## Environmental variables

Once dependencies are installed, create a .env file inside the project folder and set the following variables: 

```
BASE_URL=https://todoist.com
VALID_USER= your username
VALID_USER_PASSWORD= your valid password
```
## Run test scripts

*To run the test scripts put the following commands in the terminal while located in the folder of the project.*

To run all tests located in the test folder: 

```
$ npm run test
```
To run the smoke test suite: 

```
$ npm run test-smoke
```
To run the login tests fixture: 

```
$ npm run tests-login
```
To run the tasks tests fixture: 

```
$ npm run tests-tasks
```
To run the projects tests fixture: 

```
$ npm run tests-projects
```
To run login tests in headless mode

```
$ npm run tests-login-headless
```



