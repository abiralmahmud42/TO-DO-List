import mongoose from "mongoose";

const connectToDatabase = () => {
    const MONGODB_URI = 'mongodb+srv://alex4422:codeforinterview@mern-todo.74otdyt.mongodb.net/mern-todo';

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully");
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected");
    });

    mongoose.connection.on('error', (error) => {
        console.error("Error while connecting to the database:", error.message);
    });
}

export default connectToDatabase;
