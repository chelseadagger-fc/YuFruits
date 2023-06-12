const { MongoClient } = require('mongodb');
 
// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
 
// Database Name
const dbName = 'fruitsDB';
 
async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("fruitsDB");
    const collection = db.collection('fruits');
 
    const insertResult = await collection.insertMany(
        [
            {
                name: "Apple",
                score: 8,
                review: "So Healthy"
            },
            {
                name: "Orange",
                score: 7,
                review: "Good for Health"
            },
            {
                name: "Banana",
                score: 10,
                review: "Awesome Taste"
            }
        ]);
    console.log('Inserted documents =>', insertResult);
 
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
 
    // the following code examples can be pasted here...
 
    return 'done.';
}
 
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());