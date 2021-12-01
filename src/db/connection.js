const { MongoClient } = require("mongodb");

require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

const connection = async (crudFunc, dataObj, updateObj, deleteObj) => {
    try{
        await client.connect();
        console.log("connection successful")
        const db = client.db("MovieDatabase");
        const collection = db.collection("Movies");
        await crudFunc(collection, dataObj, updateObj, deleteObj)
        client.close();
    }catch (error){
        console.log(error);
    }
};


module.exports = connection;