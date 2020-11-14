# Tech Studium

## What is it?
Tech studium is a theory support app for code writers, which enables them to work with concepts in a practice environment in order to be better prepared for interviews and exams.

## Getting started
In order to use the application on the localhost, the following actions need to be taken:
* Install the dependencies in both client and server by running the command:
```console
npm install
```
* Enter the path ./techstudium/client and run the following command:
```console
npm start
```
* Enter the path ./techstudium/server and run the following command:
```console
nodemon
```
* Lastly, set up a mysql database running on the default server.

## Tech stack
The application contains both a client and a server.

**Front End:**
On the client side, React was used to display the data in a user friendly way. 
The images used were taken from [UNSPLASH](https://unsplash.com/) and the design was created with the help of the [Affinity Photo](https://affinity.serif.com/en-gb/photo/) tool.

**Back End**
NodeJS was the main programming language used for the back end. The language was used together with the Express library, in order to set up the neccessary APIs.

## Data sources
All the data used by the application is stored in a MySql database.