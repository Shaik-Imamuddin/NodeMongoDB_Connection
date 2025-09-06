# NodeMongoDB_Connection

Promise-based approach:

-> This imports the `MongoClient` class from the `mongodb` package.
-> `MongoClient` is used to connect to and interact with a MongoDB server.

const { MongoClient } = require('mongodb');

MongoDB connection URL (local server)
This connects to the MongoDB server
const url = 'mongodb://localhost:27017';

Name of the database
const dbName = 'node';

Create MongoDB client

Here, you create an instance of MongoClient, passing in the MongoDB connection URI.
This prepares the client to connect to the server, but it does not establish the connection yet.
const client = new MongoClient(url);

This starts the connection to your MongoDB server.
client is an instance of MongoClient from the mongodb package.
connect() is an asynchronous function that returns a Promise.

client.connect()
.then() is used to handle the successful resolution of the promise.
If the connection is successful, the function inside .then() is executed.
.then(() => {
    console.log('Connection Established');
    You can now use client.db(dbName) to access the database
    return client.close(); // Close connection after checking
    })
.catch((err) => {
       .catch() handles errors that occur during the connect() call.
       console.error('Connection not Established:', err.message);
   });


Async/Await-based approach:

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'node';

const client = new MongoClient(url);

You add async before a function definition to turn it into an asynchronous function.
This allows you to use await inside that function.
An async function always returns a Promise, even if it seems like it returns a regular value.

async function connectDB() {
   try {
     await client.connect();
     console.log('Connection Established')
   }
       await is only used inside async functions.
       It tells JavaScript to pause execution until the Promise resolves (succeeds) or rejects (fails).
       It helps avoid .then() chaining and makes code look synchronous (easy to read).
   catch (err) {
    console.error('Connection not Established:', err.message);
  } 
}
connectDB();