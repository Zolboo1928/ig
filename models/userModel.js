const { mongoose, Schema } = require("mongoose");
const userSchema = new Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    profileImage: { type: String },
  },
  { timeStamps: true }
);

const userModel = mongoose.model("users", userSchema)
module.exports = userModel 
