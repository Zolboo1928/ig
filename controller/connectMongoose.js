const mongoose = require("mongoose");

const connectMongoose = async () => {
  try {
    const res = await mongoose.connect(
      "mongodb+srv://zolbootulgaa1928:GZTe9utxieEM84wv@instagram.v6qau.mongodb.net/instagram?retryWrites=true&w=majority&appName=Instagram"
    );
    if (res) console.log("connected to mongoose");
  } catch (error) {
    console.log("failed to connect to mongoose")
  }
};

module.exports = connectMongoose