import mongoose from "mongoose";

export const connection = () => {
  mongoose.connect(process.env.MONGO_URI,
  {
    dbName: "AUCTION_TRACKER",
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.log(err);
  });
}
