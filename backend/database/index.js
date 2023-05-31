import { MongoClient } from "mongodb";

// const connectionString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/?retryWrites=true&w=majority`;
const connectionString = "mongodb://127.0.0.1:27017";

const client = new MongoClient(connectionString);

export default client;
