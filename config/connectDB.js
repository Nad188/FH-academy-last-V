const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb://nad:Cilwazoldik1881993@cluster0-shard-00-00.dtjp6.mongodb.net:27017,cluster0-shard-00-01.dtjp6.mongodb.net:27017,cluster0-shard-00-02.dtjp6.mongodb.net:27017/myFisrtProject?ssl=true&replicaSet=atlas-10g8so-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );
  console.log("connected");
  
};

module.exports = connectDB;
