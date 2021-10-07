import mongoose from 'mongoose';

const MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://localhost:27017/skillBidDatabase";

const whitelist = ["https://skillzbid.netlify.app"];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(
                new Error("Not allowed by CORS; origin domain needs to be added to whitelist.")
            );
        }
    },
};

mongoose.set("debug", true);
  
mongoose.set("useCreateIndex", true);

mongoose.set("returnOriginal", true);

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).catch(error =>
  console.error("Error connecting to MongoDB", error.message));

mongoose.connection.on("disconnected", () =>
  console.log("Disconnected from MongoDB"));

mongoose.connection.on('error', (error) =>
  console.error(`MongoDB connection error:
${error.message}`));

export default mongoose.connection;
