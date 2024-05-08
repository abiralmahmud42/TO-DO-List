import mongoose from "mongoose";

const Connection = () => {


     const MONGODB_URI = 'mongodb+srv://alex4422:codeforinterview@mern-todo.74otdyt.mongodb.net/'

     mongoose.connect(MONGODB_URI, {useURIparser: true});
}

export default Connection