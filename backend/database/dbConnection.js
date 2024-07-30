import mongoose from "mongoose";

export const dbConnection = () => {
  const uri = "mongodb+srv://yash123:Konakanchi%4029@cluster0.vujucpg.mongodb.net/MERN_STACK_EVENT_MESSAGE?retryWrites=true";

  // Log the URI to check if it's correctly defined
  console.log("MongoDB URI:", uri);

  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to the database:", err);
    });
};

