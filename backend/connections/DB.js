import mongoose from 'mongoose';

export const connectDatabase = ()=> {
    mongoose
      .connect("mongodb://localhost:27017/GrihaKalp")
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((error) => {
        console.log(error);
      });
}