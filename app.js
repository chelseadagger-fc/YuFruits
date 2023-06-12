const mongoose = require("mongoose");
 
//connect to MongoDB by specifying port to access MongoDB server
main().catch((err) => console.log(err));
 
async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
}
 
//create a SCHEMA that sets out the fields each document will have and their datatypes
 
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});
 
//create a MODEL
const Fruit = new mongoose.model("Fruit", fruitSchema);
 
//create a DOCUMENT
const fruit = new Fruit({
  name: "Apple",
  rating: 9,
  review: "Great fruit. A classic.",
});
 
//save the document
fruit.save();
 
//**CHALLENGE: Set up a people database with one document and two fields**//
//create a SCHEMA
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
 
//create a MODEL
const Person = mongoose.model("Person", personSchema);
 
//create a DOCUMENT
const person = new Person({
  name: "John",
  age: 37,
});
 
//Save it
person.save();
 
const kiwi = new Fruit({
  name: "Kiwi",
  score: 8,
  review: "The Best Fruit",
});
 
const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me",
});
 
const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird texture",
});
 
Fruit.insertMany([kiwi, orange, banana])
  .then(function () {
    console.log("Data inserted"); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });