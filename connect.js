// Promise-based approach
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'node';
const client = new MongoClient(url);
client.connect()
  .then(() => {
    console.log('Connection Established');
})
  .catch((err) => {
    console.error('Connection not Established:', err.message);
});