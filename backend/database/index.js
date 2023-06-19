import mongoose from "mongoose";

// const connectionString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/?retryWrites=true&w=majority`;
const connectionString = "mongodb://127.0.0.1:27017";

async function connect() {
  await mongoose.connect(connectionString);
}

export default connect;
